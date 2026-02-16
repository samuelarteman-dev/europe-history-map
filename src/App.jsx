import { useState, useMemo } from 'react'
import EventMap from './components/EventMap'
import Timeline from './components/Timeline'
import CategoryFilter from './components/CategoryFilter'
import Legend from './components/Legend'
import events, { CATEGORIES } from './data/events'
import { getFilteredEvents } from './utils/mapHelpers'

const ALL_CATEGORIES = Object.values(CATEGORIES)

export default function App() {
  const [year, setYear] = useState(2025)
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeCategories, setActiveCategories] = useState(ALL_CATEGORIES)

  const filteredEvents = useMemo(
    () => getFilteredEvents(events, year, activeCategories),
    [year, activeCategories]
  )

  return (
    <div className="h-screen w-screen flex flex-col bg-zinc-900 text-white overflow-hidden">
      {/* Map area */}
      <div className="flex-1 relative">
        <EventMap filteredEvents={filteredEvents} />

        {/* Header */}
        <div className="absolute top-4 left-4 z-[1000] pointer-events-none">
          <h1 className="text-lg sm:text-xl font-bold text-white drop-shadow-lg">
            Europe — Événements historiques
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 drop-shadow">
            2000 – 2025
          </p>
        </div>

        {/* Category filters — top right */}
        <div className="absolute top-4 right-4 z-[1000]">
          <CategoryFilter
            activeCategories={activeCategories}
            setActiveCategories={setActiveCategories}
          />
        </div>

        {/* Legend — bottom left above timeline */}
        <div className="absolute bottom-4 left-4 z-[1000]">
          <Legend eventCount={filteredEvents.length} />
        </div>
      </div>

      {/* Timeline */}
      <Timeline
        year={year}
        setYear={setYear}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  )
}
