import L from 'leaflet'
import { CATEGORY_COLORS } from '../data/events'

export function createMarkerIcon(category) {
  const color = CATEGORY_COLORS[category] || '#9ca3af'
  // Visual marker is 14px but touch target is 44px for mobile accessibility
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <div style="
        background-color: ${color};
        width: 14px;
        height: 14px;
        border-radius: 50%;
        border: 2px solid white;
        box-shadow: 0 0 6px rgba(0,0,0,0.5);
      "></div>
    </div>`,
    iconSize: [44, 44],
    iconAnchor: [22, 22],
    popupAnchor: [0, -22],
  })
}

export function getFilteredEvents(events, year, activeCategories, yearRange) {
  const [minYear, maxYear] = yearRange || [2000, 2025]
  return events.filter(
    (event) =>
      event.year <= year &&
      event.year >= minYear &&
      event.year <= maxYear &&
      activeCategories.includes(event.category)
  )
}

export function getLinkedPairs(events) {
  const pairs = []
  const seen = new Set()

  for (const event of events) {
    if (event.linkedTo) {
      const linked = events.find((e) => e.id === event.linkedTo)
      if (linked) {
        const key = [Math.min(event.id, linked.id), Math.max(event.id, linked.id)].join('-')
        if (!seen.has(key)) {
          seen.add(key)
          pairs.push([
            [event.lat, event.lng],
            [linked.lat, linked.lng],
          ])
        }
      }
    }
  }

  return pairs
}

export const EUROPE_CENTER = [50.0, 10.0]
export const EUROPE_ZOOM = 4
