import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet'
import { useMemo } from 'react'
import { createMarkerIcon, getLinkedPairs, EUROPE_CENTER, EUROPE_ZOOM } from '../utils/mapHelpers'
import { CATEGORY_COLORS } from '../data/events'

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
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
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
