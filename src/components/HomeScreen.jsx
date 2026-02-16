import { useState } from 'react'
import { CATEGORIES, CATEGORY_COLORS } from '../data/events'

const MIN_YEAR = 2000
const MAX_YEAR = 2025
const ALL_CATEGORIES = Object.values(CATEGORIES)

export default function HomeScreen({ onStart }) {
  const [yearRange, setYearRange] = useState([MIN_YEAR, MAX_YEAR])
  const [selectedCategories, setSelectedCategories] = useState([...ALL_CATEGORIES])

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  const selectAll = () => setSelectedCategories([...ALL_CATEGORIES])
  const selectNone = () => setSelectedCategories([])

  const handleStart = () => {
    onStart({
      yearRange,
      categories: selectedCategories.length > 0 ? selectedCategories : [...ALL_CATEGORIES],
    })
  }

  const handleMinYear = (e) => {
    const val = parseInt(e.target.value, 10)
    setYearRange(([, max]) => [Math.min(val, max), max])
  }

  const handleMaxYear = (e) => {
    const val = parseInt(e.target.value, 10)
    setYearRange(([min]) => [min, Math.max(val, min)])
  }

  return (
    <div className="h-screen w-screen bg-zinc-900 text-white flex items-center justify-center overflow-auto">
      <div className="max-w-xl w-full mx-4 sm:mx-4 my-6 sm:my-8 px-1 sm:px-0">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-3 tracking-tight">
            Europe : événements <span className="text-amber-400">2000–2025</span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto px-2 sm:px-0">
            Explorez 25 ans d'histoire européenne sur une carte interactive.
            Géopolitique, catastrophes, culture et économie — filtrez et naviguez
            à travers les événements qui ont façonné le continent.
          </p>
        </div>

        {/* Filters card */}
        <div className="bg-zinc-800/80 backdrop-blur-sm rounded-xl border border-zinc-700 p-4 sm:p-6 shadow-2xl mb-4 sm:mb-6">
          {/* Year range */}
          <div className="mb-5 sm:mb-6">
            <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3 sm:mb-4">
              Plage d'années
            </h3>
            <div className="flex items-center gap-4 mb-3">
              <span className="text-2xl font-bold text-amber-400 tabular-nums min-w-[52px] text-center">
                {yearRange[0]}
              </span>
              <span className="text-zinc-500">—</span>
              <span className="text-2xl font-bold text-amber-400 tabular-nums min-w-[52px] text-center">
                {yearRange[1]}
              </span>
            </div>
            <div className="space-y-4 sm:space-y-3">
              <div>
                <label className="text-xs text-zinc-500 mb-1.5 sm:mb-1 block">Année début</label>
                <input
                  type="range"
                  min={MIN_YEAR}
                  max={MAX_YEAR}
                  value={yearRange[0]}
                  onChange={handleMinYear}
                  className="w-full h-3 sm:h-2 bg-zinc-700 rounded-full cursor-pointer accent-amber-500"
                />
              </div>
              <div>
                <label className="text-xs text-zinc-500 mb-1.5 sm:mb-1 block">Année fin</label>
                <input
                  type="range"
                  min={MIN_YEAR}
                  max={MAX_YEAR}
                  value={yearRange[1]}
                  onChange={handleMaxYear}
                  className="w-full h-3 sm:h-2 bg-zinc-700 rounded-full cursor-pointer accent-amber-500"
                />
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Catégories
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={selectAll}
                  className="text-xs text-amber-400 hover:text-amber-300 transition-colors py-1 px-1"
                >
                  Tout
                </button>
                <span className="text-zinc-600">|</span>
                <button
                  onClick={selectNone}
                  className="text-xs text-amber-400 hover:text-amber-300 transition-colors py-1 px-1"
                >
                  Aucun
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {ALL_CATEGORIES.map((category) => {
                const isActive = selectedCategories.includes(category)
                const color = CATEGORY_COLORS[category]
                return (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`flex items-center gap-2.5 px-3 py-3 sm:py-2.5 rounded-lg text-sm transition-all border min-h-[44px] ${
                      isActive
                        ? 'bg-zinc-700 border-zinc-600 text-white'
                        : 'bg-zinc-800 border-zinc-700 text-zinc-500 opacity-60'
                    }`}
                  >
                    <span
                      className="w-3.5 h-3.5 sm:w-3 sm:h-3 rounded-full flex-shrink-0 transition-opacity"
                      style={{
                        backgroundColor: color,
                        opacity: isActive ? 1 : 0.3,
                      }}
                    />
                    <span className="text-sm sm:text-sm">{category}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Start button */}
        <button
          onClick={handleStart}
          className="w-full py-4 sm:py-3.5 bg-amber-500 hover:bg-amber-400 text-zinc-900 font-bold text-base sm:text-base rounded-xl transition-colors shadow-lg shadow-amber-500/20 active:scale-[0.98] min-h-[48px]"
        >
          Explorer la carte
        </button>
      </div>
    </div>
  )
}
