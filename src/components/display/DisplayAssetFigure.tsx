import type { DisplayAsset } from '../../data/albedoDisplayAssets'

type DisplayAssetFigureProps = {
  asset: DisplayAsset
  className?: string
  showNotes?: boolean
  priority?: boolean
}

export default function DisplayAssetFigure({ asset, className = '', showNotes = false, priority = false }: DisplayAssetFigureProps) {
  return (
    <figure className={`ad-asset ${className}`.trim()}>
      <a href={asset.src} target="_blank" rel="noreferrer" aria-label={`View full-size ${asset.title}`}>
        <img
          src={asset.src}
          alt={asset.alt}
          width={asset.width ?? 1200}
          height={asset.height ?? 820}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          sizes={asset.sizes}
        />
        <span className="ad-asset__zoom" aria-hidden="true">View full-size concept ↗</span>
      </a>
      <figcaption>
        <span className="ad-status">{asset.status}</span>
        <span><b>{asset.caption}</b><small>{asset.date}</small></span>
      </figcaption>
      {showNotes && asset.technicalNotes && <p className="ad-asset__notes">{asset.technicalNotes}</p>}
    </figure>
  )
}
