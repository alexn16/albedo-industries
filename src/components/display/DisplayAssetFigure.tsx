import type { DisplayAsset } from '../../data/albedoDisplayAssets'

type DisplayAssetFigureProps = {
  asset: DisplayAsset
  className?: string
  showNotes?: boolean
}

export default function DisplayAssetFigure({ asset, className = '', showNotes = false }: DisplayAssetFigureProps) {
  return (
    <figure className={`ad-asset ${className}`.trim()}>
      <a href={asset.src} target="_blank" rel="noreferrer" aria-label={`Open full-size ${asset.title}`}>
        <img src={asset.src} alt={asset.title} />
        <span className="ad-asset__zoom" aria-hidden="true">Open full image ↗</span>
      </a>
      <figcaption>
        <span className="ad-status">{asset.status}</span>
        <span><b>{asset.caption}</b><small>{asset.date}</small></span>
      </figcaption>
      {showNotes && asset.technicalNotes && <p className="ad-asset__notes">{asset.technicalNotes}</p>}
    </figure>
  )
}
