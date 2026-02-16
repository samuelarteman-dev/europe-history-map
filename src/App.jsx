import { useState, useMemo } from 'react'
import EventMap from './components/EventMap'
import Timeline from './components/Timeline'
import CategoryFilter from './components/CategoryFilter'
import Legend from './components/Legend'
import HomeScreen from './components/HomeScreen'
import events, { CATEGORIES } from './data/events'
import { getFilteredEvents } from './utils/mapHelpers'

const ALL_CATEGORIES = Object.values(CATEGORIES)

export default function App() {
  const [screen, setScreen] = useState('home') // 'home' | 'map'
  const [year, setYear] = useState(2025)
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeCategories, setActiveCategories] = useState(ALL_CATEGORIES)
  const [yearRange, setYearRange] = useState([2000, 2025])

  const filteredEvents = useMemo(
    () => getFilteredEvents(events, year, activeCategories, yearRange),
    [year, activeCategories, yearRange]
  )

  const handleStartFromHome = ({ yearRange: range, categories }) => {
    setYearRange(range)
    setActiveCategories(categories)
    setYear(range[1])
    setScreen('map')
  }

  if (screen === 'home') {
    return <HomeScreen onStart={handleStartFromHome} />
  }

  return (
    <div className="h-screen w-screen flex flex-col bg-zinc-900 text-white overflow-hidden">
      {/* Map area */}
      <div className="flex-1 relative min-h-0">
        <EventMap filteredEvents={filteredEvents} />

        {/* Header — hidden on mobile to save space */}
        <div className="absolute top-4 left-4 z-[1000] pointer-events-none hidden sm:block">
          <h1 className="text-lg sm:text-xl font-bold text-white drop-shadow-lg">
            Europe — Événements historiques
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 drop-shadow">
            2000 – 2025
          </p>
        </div>

        {/* Category filters + year range — top right */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-[1000]">
          <CategoryFilter
            activeCategories={activeCategories}
            setActiveCategories={setActiveCategories}
            yearRange={yearRange}
            setYearRange={setYearRange}
            eventCount={filteredEvents.length}
          />
        </div>

        {/* Back button — top left on mobile, bottom left on desktop */}
        <button
          onClick={() => setScreen('home')}
          className="absolute top-3 left-3 sm:bottom-4 sm:left-4 sm:top-auto z-[1000] bg-zinc-800/90 backdrop-blur-sm rounded-lg border border-zinc-700 px-3 py-2 shadow-xl text-xs text-zinc-300 hover:text-white hover:bg-zinc-700/90 transition-colors flex items-center gap-1.5 min-h-[44px] sm:min-h-0"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Accueil
        </button>

        {/* Legend — bottom left on desktop, hidden on mobile (count is in hamburger) */}
        <div className="absolute bottom-4 left-20 z-[1000] hidden sm:block">
          <Legend eventCount={filteredEvents.length} />
        </div>
      </div>

      {/* Timeline */}
      <Timeline
        year={year}
        setYear={setYear}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        yearRange={yearRange}
      />
    </div>
  )
}
