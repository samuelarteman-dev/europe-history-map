export default function Legend({ eventCount }) {
  return (
    <div className="bg-zinc-800/90 backdrop-blur-sm rounded-lg border border-zinc-700 px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-xl">
      <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-zinc-400">
        <div className="hidden sm:flex items-center gap-1.5">
          <span className="w-4 border-t-2 border-dashed border-amber-400" />
          <span>Événements liés</span>
        </div>
        <div className="hidden sm:block w-px h-3 bg-zinc-600" />
        <span>
          <span className="text-white font-semibold">{eventCount}</span> événement{eventCount !== 1 ? 's' : ''}
        </span>
      </div>
    </div>
  )
}
