import { useStaggerReveal } from '../hooks/useScrollReveal'

const basePath = import.meta.env.BASE_URL || '/'

const screenshots = [
  {
    src: `${basePath}media/alb-parking/alb-parking-store.png`,
    alt: 'ALB Parking Shop screen showing parking solutions and EV charging packages',
    caption: 'Shop',
  },
  {
    src: `${basePath}media/alb-parking/alb-parking-map.png`,
    alt: 'ALB Parking Map view showing available parking locations across the city',
    caption: 'Map View',
  },
  {
    src: `${basePath}media/alb-parking/alb-parking-bookings.png`,
    alt: 'ALB Parking My Bookings page showing upcoming and past reservations',
    caption: 'My Bookings',
  },
  {
    src: `${basePath}media/alb-parking/alb-parking-profile.png`,
    alt: 'ALB Parking user profile page with account settings',
    caption: 'Profile',
  },
]

export default function AlbParkingShowcase() {
  const ref = useStaggerReveal<HTMLDivElement>()

  return (
    <div>
      <p className="text-lg text-zinc-600 leading-relaxed mb-10">
        Find, book, and access parking — all from your phone.
      </p>

      {/* Desktop grid / Mobile carousel */}
      <div
        ref={ref}
        className="flex gap-6 overflow-x-auto pb-4 snap-scroll md:grid md:grid-cols-4 md:overflow-visible md:pb-0"
      >
        {screenshots.map((screenshot) => (
          <div key={screenshot.src} className="reveal-item flex-shrink-0 w-48 md:w-auto text-center">
            {/* Phone frame */}
            <div className="bg-zinc-900 rounded-[2rem] p-2 shadow-2xl shadow-zinc-300/50">
              <div className="rounded-[1.5rem] overflow-hidden bg-white">
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="text-sm text-zinc-500 mt-4 font-medium">{screenshot.caption}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
