import { useState, useEffect } from 'react'

interface MarketMover {
  symbol: string
  name: string
  change: string
  changePercent: string
}

interface NewsItem {
  title: string
  source: string
  url?: string
}

interface MarketBriefData {
  date: string
  marketStatus: 'open' | 'closed' | 'premarket' | 'afterhours'
  premarketHighlights: string[]
  sessionHighlights: string[]
  afterHoursHighlights: string[]
  topMovers: MarketMover[]
  newsDrivers: NewsItem[]
  generatedAt: string
}

export default function MarketBrief() {
  const [data, setData] = useState<MarketBriefData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchBrief = async () => {
      try {
        const basePath = import.meta.env.BASE_URL || '/'
        const response = await fetch(`${basePath}data/alphaclaim/latest.json`)
        if (!response.ok) {
          throw new Error('Brief not found')
        }
        const briefData = await response.json()
        setData(briefData)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchBrief()
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-green-50 text-green-700'
      case 'premarket':
        return 'bg-blue-50 text-blue-700'
      case 'afterhours':
        return 'bg-purple-50 text-purple-700'
      default:
        return 'bg-zinc-100 text-zinc-600'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'open':
        return 'Market Open'
      case 'premarket':
        return 'Pre-Market'
      case 'afterhours':
        return 'After Hours'
      default:
        return 'Market Closed'
    }
  }

  if (loading) {
    return (
      <div className="border border-zinc-200 rounded-lg p-8">
        <div className="flex items-center justify-center">
          <div className="animate-pulse flex space-x-2">
            <div className="h-2 w-2 bg-zinc-300 rounded-full"></div>
            <div className="h-2 w-2 bg-zinc-300 rounded-full"></div>
            <div className="h-2 w-2 bg-zinc-300 rounded-full"></div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="border border-zinc-200 rounded-lg p-8 bg-zinc-50/50">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-zinc-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-zinc-900 mb-2">Today's brief is being prepared</h3>
          <p className="text-sm text-zinc-500 max-w-sm mx-auto">
            Market briefs are generated daily. Check back soon for the latest intelligence.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="border border-zinc-200 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-zinc-50 border-b border-zinc-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${getStatusColor(data.marketStatus)}`}>
              {getStatusLabel(data.marketStatus)}
            </span>
            <span className="text-sm text-zinc-500">
              {new Date(data.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Highlights */}
        {data.premarketHighlights.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-3">Pre-Market</h4>
            <ul className="space-y-2">
              {data.premarketHighlights.map((highlight, i) => (
                <li key={i} className="flex items-start text-sm text-zinc-600">
                  <span className="text-zinc-400 mr-2">-</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {data.sessionHighlights.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-3">Session</h4>
            <ul className="space-y-2">
              {data.sessionHighlights.map((highlight, i) => (
                <li key={i} className="flex items-start text-sm text-zinc-600">
                  <span className="text-zinc-400 mr-2">-</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {data.afterHoursHighlights.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-3">After Hours</h4>
            <ul className="space-y-2">
              {data.afterHoursHighlights.map((highlight, i) => (
                <li key={i} className="flex items-start text-sm text-zinc-600">
                  <span className="text-zinc-400 mr-2">-</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Top Movers */}
        {data.topMovers.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-3">Top Movers</h4>
            <div className="border border-zinc-200 rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="text-left px-4 py-2 text-zinc-500 font-medium">Symbol</th>
                    <th className="text-left px-4 py-2 text-zinc-500 font-medium">Name</th>
                    <th className="text-right px-4 py-2 text-zinc-500 font-medium">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {data.topMovers.map((mover, i) => (
                    <tr key={i} className="border-t border-zinc-100">
                      <td className="px-4 py-2 font-medium text-zinc-900">{mover.symbol}</td>
                      <td className="px-4 py-2 text-zinc-600">{mover.name}</td>
                      <td className={`px-4 py-2 text-right font-medium ${
                        mover.change.startsWith('+') ? 'text-green-600' :
                        mover.change.startsWith('-') ? 'text-red-600' : 'text-zinc-600'
                      }`}>
                        {mover.change} ({mover.changePercent})
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* News Drivers */}
        {data.newsDrivers.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-3">News Drivers</h4>
            <ul className="space-y-3">
              {data.newsDrivers.map((news, i) => (
                <li key={i} className="flex items-start justify-between gap-4">
                  <span className="text-sm text-zinc-600">{news.title}</span>
                  {news.url ? (
                    <a
                      href={news.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-zinc-400 hover:text-zinc-600 whitespace-nowrap transition-colors"
                    >
                      {news.source}
                    </a>
                  ) : (
                    <span className="text-xs text-zinc-400 whitespace-nowrap">{news.source}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-zinc-50 border-t border-zinc-200 px-6 py-3">
        <p className="text-xs text-zinc-400">
          Generated {new Date(data.generatedAt).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            timeZoneName: 'short',
          })}
        </p>
      </div>
    </div>
  )
}
