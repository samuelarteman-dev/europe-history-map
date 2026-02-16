import { MapContainer, TileLayer, Marker, Popup, Polyline, GeoJSON, useMap, useMapEvents } from 'react-leaflet'
import { useMemo, useEffect, useState, useRef } from 'react'
import L from 'leaflet'
import { createMarkerIcon, getLinkedPairs, EUROPE_CENTER, EUROPE_ZOOM } from '../utils/mapHelpers'
import { CATEGORY_COLORS } from '../data/events'
import europeCities from '../data/europeCities'
import countryColors from '../data/countryColors'

const GEOJSON_URL = 'https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson'

const EUROPEAN_COUNTRIES = new Set([
  'France', 'Germany', 'Italy', 'Spain', 'United Kingdom', 'Poland', 'Romania',
  'Netherlands', 'Belgium', 'Greece', 'Czech Republic', 'Czechia', 'Portugal',
  'Sweden', 'Hungary', 'Austria', 'Switzerland', 'Bulgaria', 'Denmark', 'Finland',
  'Slovakia', 'Norway', 'Ireland', 'Croatia', 'Bosnia and Herzegovina',
  'Albania', 'Lithuania', 'Slovenia', 'Latvia', 'Estonia', 'Montenegro',
  'Luxembourg', 'Malta', 'Iceland', 'Serbia', 'North Macedonia', 'Macedonia',
  'Moldova', 'Belarus', 'Ukraine', 'Russia', 'Turkey', 'Cyprus', 'Kosovo',
  'Andorra', 'Monaco', 'San Marino', 'Liechtenstein',
])

function createCityIcon(isCapital) {
  const size = isCapital ? 6 : 4
  return L.divIcon({
    className: 'city-marker',
    html: `<div style="
      width:${size}px;
      height:${size}px;
      border-radius:50%;
      background:${isCapital ? '#fafafa' : '#d4d4d8'};
      border:1px solid ${isCapital ? '#fff' : '#a1a1aa'};
      box-shadow:0 0 3px rgba(0,0,0,0.4);
    "></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  })
}

function CityLabels() {
  const map = useMap()
  const [zoom, setZoom] = useState(map.getZoom())
  const labelsRef = useRef([])

  useMapEvents({
    zoomend: () => setZoom(map.getZoom()),
  })

  useEffect(() => {
    // Clear previous labels
    labelsRef.current.forEach((m) => map.removeLayer(m))
    labelsRef.current = []

    const citiesToShow = europeCities.filter((city) => {
      if (city.isCapital) return zoom >= 4
      return zoom >= 6
    })

    citiesToShow.forEach((city) => {
      const icon = L.divIcon({
        className: 'city-label',
        html: `<div style="
          display:flex;
          align-items:center;
          gap:3px;
          pointer-events:none;
          white-space:nowrap;
        ">
          <span style="
            width:${city.isCapital ? 6 : 4}px;
            height:${city.isCapital ? 6 : 4}px;
            border-radius:50%;
            background:${city.isCapital ? '#fafafa' : '#d4d4d8'};
            border:1px solid ${city.isCapital ? '#fff' : '#a1a1aa'};
            display:inline-block;
            flex-shrink:0;
          "></span>
          <span style="
            font-size:${city.isCapital ? '11px' : '9px'};
            font-weight:${city.isCapital ? '700' : '400'};
            color:${city.isCapital ? '#fafafa' : '#d4d4d8'};
            text-shadow: 1px 1px 2px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 0 0 4px rgba(0,0,0,0.6);
            letter-spacing:0.02em;
          ">${city.name}</span>
        </div>`,
        iconSize: [0, 0],
        iconAnchor: [-4, city.isCapital ? 3 : 2],
      })

      const marker = L.marker([city.lat, city.lng], {
        icon,
        interactive: false,
        pane: 'tooltipPane',
      }).addTo(map)

      labelsRef.current.push(marker)
    })

    return () => {
      labelsRef.current.forEach((m) => map.removeLayer(m))
      labelsRef.current = []
    }
  }, [zoom, map])

  return null
}

function CountryLayer() {
  const [geoData, setGeoData] = useState(null)

  useEffect(() => {
    fetch(GEOJSON_URL)
      .then((res) => res.json())
      .then((data) => {
        const europeFeatures = {
          ...data,
          features: data.features.filter((f) =>
            EUROPEAN_COUNTRIES.has(f.properties.ADMIN) ||
            EUROPEAN_COUNTRIES.has(f.properties.name)
          ),
        }
        setGeoData(europeFeatures)
      })
      .catch((err) => console.warn('GeoJSON load failed:', err))
  }, [])

  const style = (feature) => {
    const name = feature.properties.ADMIN || feature.properties.name
    return {
      fillColor: countryColors[name] || '#e0e0e0',
      fillOpacity: 0.35,
      color: '#a1a1aa',
      weight: 1.5,
      opacity: 0.7,
    }
  }

  const onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: (e) => {
        e.target.setStyle({ fillOpacity: 0.5, weight: 2 })
      },
      mouseout: (e) => {
        e.target.setStyle({ fillOpacity: 0.35, weight: 1.5 })
      },
    })
  }

  if (!geoData) return null

  return (
    <GeoJSON
      data={geoData}
      style={style}
      onEachFeature={onEachFeature}
    />
  )
}

function MapEvents({ filteredEvents }) {
  const map = useMap()
  return null
}

export default function EventMap({ filteredEvents }) {
  const linkedPairs = useMemo(
    () => getLinkedPairs(filteredEvents),
    [filteredEvents]
  )

  return (
    <MapContainer
      center={EUROPE_CENTER}
      zoom={EUROPE_ZOOM}
      className="h-full w-full z-0"
      zoomControl={false}
      minZoom={3}
      maxZoom={10}
    >
      <TileLayer
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
      />
      <CountryLayer />
      <CityLabels />
      <MapEvents filteredEvents={filteredEvents} />

      {filteredEvents.map((event) => (
        <Marker
          key={event.id}
          position={[event.lat, event.lng]}
          icon={createMarkerIcon(event.category)}
        >
          <Popup className="custom-popup">
            <div className="min-w-[200px]">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="inline-block w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: CATEGORY_COLORS[event.category] }}
                />
                <span className="text-xs font-medium text-zinc-400">
                  {event.category}
                </span>
              </div>
              <h3 className="font-bold text-sm text-white mb-1">{event.title}</h3>
              <p className="text-xs text-zinc-300 mb-2">{event.date}</p>
              <p className="text-xs text-zinc-400 leading-relaxed">{event.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}

      {linkedPairs.map((positions, index) => (
        <Polyline
          key={index}
          positions={positions}
          pathOptions={{
            color: '#fbbf24',
            weight: 2,
            opacity: 0.6,
            dashArray: '6, 8',
          }}
        />
      ))}
    </MapContainer>
  )
}
