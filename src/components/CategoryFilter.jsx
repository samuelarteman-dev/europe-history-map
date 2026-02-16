import { useState, useEffect, useRef } from 'react'
import { CATEGORIES, CATEGORY_COLORS } from '../data/events'

const MIN_YEAR = 2000
const MAX_YEAR = 2025

export default function CategoryFilter({
  activeCategories,
  setActiveCategories,
  yearRange,
  setYearRange,
  eventCount,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const panelRef = useRef(null)

  const toggleCategory = (category) => {
    setActiveCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  const handleMinYear = (e) => {
    const val = parseInt(e.target.value, 10)
    setYearRange(([, max]) => [Math.min(val, max), max])
  }

  const handleMaxYear = (e) => {
    const val = parseInt(e.target.value, 10)
    setYearRange(([min]) => [min, Math.max(val, min)])
  }

  // Close panel on outside tap (mobile)
  useEffect(() => {
    if (!isOpen) return
    const handleClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('pointerdown', handleClickOutside)
    return () => document.removeEventListener('pointerdown', handleClickOutside)
  }, [isOpen])

  const filterContent = (
    <>
      {/* Event count badge */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
          Filtres
        </h3>
        <span className="bg-amber-500/20 text-amber-400 text-xs font-bold px-2 py-0.5 rounded-full tabular-nums">
          {eventCount}
        </span>
      </div>

      {/* Year range filter */}
      <div className="mb-3 pb-3 border-b border-zinc-700">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs text-zinc-500">Années</span>
          <span className="text-xs font-semibold text-amber-400 tabular-nums">
            {yearRange[0]}–{yearRange[1]}
          </span>
        </div>
        <div className="space-y-2 sm:space-y-1.5">
          <div>
            <label className="text-[10px] text-zinc-600">De</label>
            <input
              type="range"
              min={MIN_YEAR}
              max={MAX_YEAR}
              value={yearRange[0]}
              onChange={handleMinYear}
              className="w-full h-2 sm:h-1.5 bg-zinc-700 rounded-full cursor-pointer accent-amber-500"
            />
          </div>
          <div>
            <label className="text-[10px] text-zinc-600">À</label>
            <input
              type="range"
              min={MIN_YEAR}
              max={MAX_YEAR}
              value={yearRange[1]}
              onChange={handleMaxYear}
              className="w-full h-2 sm:h-1.5 bg-zinc-700 rounded-full cursor-pointer accent-amber-500"
            />
          </div>
        </div>
      </div>

      {/* Category filters */}
      <div className="flex flex-col gap-2">
        {Object.values(CATEGORIES).map((category) => {
          const isActive = activeCategories.includes(category)
          const color = CATEGORY_COLORS[category]
          return (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              className={`flex items-center gap-2 px-3 py-2.5 sm:py-1.5 rounded-md text-sm transition-all min-h-[44px] sm:min-h-0 ${
                isActive
                  ? 'bg-zinc-700 text-white'
                  : 'bg-zinc-800 text-zinc-500 opacity-50'
              }`}
            >
              <span
                className="w-3.5 h-3.5 sm:w-3 sm:h-3 rounded-full flex-shrink-0 transition-opacity"
                style={{
                  backgroundColor: color,
                  opacity: isActive ? 1 : 0.3,
                }}
              />
              <span className="text-sm sm:text-xs">{category}</span>
            </button>
          )
        })}
      </div>
    </>
  )

  return (
    <>
      {/* Desktop: always-visible panel */}
      <div className="hidden sm:block bg-zinc-800/90 backdrop-blur-sm rounded-lg border border-zinc-700 p-4 shadow-xl max-w-[220px]">
        {filterContent}
      </div>

      {/* Mobile: hamburger button + slide-in panel */}
      <div className="sm:hidden" ref={panelRef}>
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="bg-zinc-800/90 backdrop-blur-sm rounded-lg border border-zinc-700 p-2.5 shadow-xl flex items-center justify-center min-w-[44px] min-h-[44px]"
          aria-label="Ouvrir les filtres"
        >
          {isOpen ? (
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <div className="flex items-center gap-1.5">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="bg-amber-500/20 text-amber-400 text-[10px] font-bold px-1.5 py-0.5 rounded-full tabular-nums">
                {eventCount}
              </span>
            </div>
          )}
        </button>

        {isOpen && (
          <div className="absolute top-0 right-0 mt-12 w-[260px] max-w-[calc(100vw-32px)] bg-zinc-800/95 backdrop-blur-sm rounded-lg border border-zinc-700 p-4 shadow-2xl animate-in">
            {filterContent}
          </div>
        )}
      </div>
    </>
  )
}
