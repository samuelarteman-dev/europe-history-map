import { CATEGORIES, CATEGORY_COLORS } from '../data/events'

export default function CategoryFilter({ activeCategories, setActiveCategories }) {
  const toggleCategory = (category) => {
    setActiveCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  return (
    <div className="bg-zinc-800/90 backdrop-blur-sm rounded-lg border border-zinc-700 p-3 sm:p-4 shadow-xl">
      <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
        Filtres
      </h3>
      <div className="flex flex-col gap-2">
        {Object.values(CATEGORIES).map((category) => {
          const isActive = activeCategories.includes(category)
          const color = CATEGORY_COLORS[category]
          return (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-all ${
                isActive
                  ? 'bg-zinc-700 text-white'
                  : 'bg-zinc-800 text-zinc-500 opacity-50'
              }`}
            >
              <span
                className="w-3 h-3 rounded-full flex-shrink-0 transition-opacity"
                style={{
                  backgroundColor: color,
                  opacity: isActive ? 1 : 0.3,
                }}
              />
              <span className="text-xs sm:text-sm whitespace-nowrap">{category}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
