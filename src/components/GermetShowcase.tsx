import VideoPlayer from './VideoPlayer'
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'

const basePath = import.meta.env.BASE_URL || '/'

interface VideoItem {
  src: string
  title: string
  description: string
}

interface VideoGroup {
  label: string
  videos: VideoItem[]
}

// Featured video displayed large at the top
const featuredVideo: VideoItem = {
  src: `${basePath}media/germet/germet-garment-show.mp4`,
  title: 'Garment Overview',
  description: 'A garment decomposed into its components, suppliers, and sourcing options.',
}

// Remaining videos grouped by category
const videoGroups: VideoGroup[] = [
  {
    label: 'Scenario Planning',
    videos: [
      {
        src: `${basePath}media/germet/germet-build-scenario.mp4`,
        title: 'Build a Scenario',
        description: 'Start with a garment and build sourcing scenarios across suppliers and components.',
      },
      {
        src: `${basePath}media/germet/germet-view-scenarios.mp4`,
        title: 'View Scenarios',
        description: 'Browse and compare existing sourcing scenarios side by side.',
      },
      {
        src: `${basePath}media/germet/germet-scenarios-build.mp4`,
        title: 'Scenario Builder',
        description: 'Step-by-step scenario creation with component and supplier selection.',
      },
      {
        src: `${basePath}media/germet/germet-scenario-comparison.mp4`,
        title: 'Compare Scenarios',
        description: 'Evaluate scenarios against cost, lead time, and risk factors.',
      },
    ],
  },
  {
    label: 'Procurement Flow',
    videos: [
      {
        src: `${basePath}media/germet/germet-approved-ready-to-send.mp4`,
        title: 'Approved & Ready to Send',
        description: 'Final approval workflow before purchase orders are sent to suppliers.',
      },
      {
        src: `${basePath}media/germet/germet-approval-generate-pos.mp4`,
        title: 'Approval & Generate POs',
        description: 'Approve sourcing decisions and automatically generate purchase orders.',
      },
      {
        src: `${basePath}media/germet/germet-split-allocation.mp4`,
        title: 'Split Allocation',
        description: 'Allocate orders across multiple suppliers for risk distribution.',
      },
    ],
  },
  {
    label: 'Risk & Trade-offs',
    videos: [
      {
        src: `${basePath}media/germet/germet-emergency-air-tradeoff.mp4`,
        title: 'Emergency Air Trade-off',
        description: 'Analyze the cost and time impact of switching to air freight in urgent situations.',
      },
    ],
  },
]

export default function GermetShowcase() {
  const featuredRef = useScrollReveal<HTMLDivElement>()

  return (
    <div className="space-y-16">
      {/* Featured video — large, full width */}
      <div ref={featuredRef} className="reveal">
        <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-6">
          Overview
        </h3>
        <VideoPlayer
          src={featuredVideo.src}
          title={featuredVideo.title}
          description={featuredVideo.description}
        />
      </div>

      {/* Categorized video grid */}
      {videoGroups.map((group) => (
        <GroupSection key={group.label} group={group} />
      ))}
    </div>
  )
}

function GroupSection({ group }: { group: VideoGroup }) {
  const ref = useStaggerReveal<HTMLDivElement>()

  return (
    <div>
      <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-6">
        {group.label}
      </h3>
      <div
        ref={ref}
        className={`grid gap-6 ${group.videos.length > 1 ? 'sm:grid-cols-2' : ''}`}
      >
        {group.videos.map((video) => (
          <div key={video.src} className="reveal-item">
            <VideoPlayer
              src={video.src}
              title={video.title}
              description={video.description}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
