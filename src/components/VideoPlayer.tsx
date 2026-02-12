import { useState, useRef } from 'react'

interface VideoPlayerProps {
  src: string
  title: string
  description?: string
}

export default function VideoPlayer({ src, title, description }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    const video = videoRef.current
    if (!video) return
    video.play()
    setIsPlaying(true)
  }

  return (
    <div className="group rounded-xl overflow-hidden bg-zinc-900 shadow-lg shadow-zinc-200/50">
      {/* Video container with play overlay */}
      <div className="relative">
        <video
          ref={videoRef}
          controls={isPlaying}
          preload="metadata"
          playsInline
          className="w-full"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video element.
        </video>

        {/* Play button overlay — shown until first play */}
        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/30 video-overlay cursor-pointer"
            aria-label={`Play ${title}`}
          >
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-200">
              <svg className="w-7 h-7 text-zinc-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        )}
      </div>

      {/* Caption */}
      <div className="px-4 py-3 bg-zinc-900">
        <h4 className="font-medium text-white text-sm">{title}</h4>
        {description && (
          <p className="text-xs text-zinc-400 mt-0.5">{description}</p>
        )}
      </div>
    </div>
  )
}
