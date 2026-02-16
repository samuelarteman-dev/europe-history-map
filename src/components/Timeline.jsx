import { useEffect, useRef, useCallback } from 'react'

const MIN_YEAR = 2000
const MAX_YEAR = 2025

export default function Timeline({ year, setYear, isPlaying, setIsPlaying, yearRange }) {
  const intervalRef = useRef(null)
  const rangeMin = yearRange ? yearRange[0] : MIN_YEAR
  const rangeMax = yearRange ? yearRange[1] : MAX_YEAR

  const stopPlaying = useCallback(() => {
    setIsPlaying(false)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [setIsPlaying])

  const startPlaying = useCallback(() => {
    setIsPlaying(true)
    intervalRef.current = setInterval(() => {
      setYear((prev) => {
        if (prev >= rangeMax) {
          stopPlaying()
          return rangeMax
        }
        return prev + 1
      })
    }, 1000)
  }, [setYear, setIsPlaying, stopPlaying, rangeMax])

  const togglePlay = () => {
    if (isPlaying) {
      stopPlaying()
    } else {
      if (year >= rangeMax) {
        setYear(rangeMin)
      }
      startPlaying()
    }
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const handleSliderChange = (e) => {
    const newYear = parseInt(e.target.value, 10)
    setYear(newYear)
    if (isPlaying) {
      stopPlaying()
    }
  }

  const progress = ((year - rangeMin) / (rangeMax - rangeMin || 1)) * 100

  return (
    <div className="bg-zinc-800/90 backdrop-blur-sm border-t border-zinc-700 px-4 py-3 sm:px-8 sm:py-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 sm:gap-5">
          <button
            onClick={togglePlay}
            className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-700 hover:bg-zinc-600 transition-colors flex items-center justify-center text-white border border-zinc-600"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            )}
          </button>

          <div className="flex-1 relative">
            <div className="relative h-2 bg-zinc-700 rounded-full overflow-hidden">
              <div
                className="absolute h-full bg-amber-500 rounded-full transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>
            <input
              type="range"
              min={rangeMin}
              max={rangeMax}
              value={year}
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="flex justify-between mt-1 text-xs text-zinc-500">
              <span>{rangeMin}</span>
              <span>{rangeMax}</span>
            </div>
          </div>

          <div className="flex-shrink-0 text-center min-w-[60px]">
            <span className="text-2xl sm:text-3xl font-bold text-amber-400 tabular-nums">
              {year}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
