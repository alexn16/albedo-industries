# Hero video audit

Reviewed 2026-09-13. Repository-wide search found hero video use on `/` and `/atlas`; Orbital retains its CSS technical diagram. Other MP4 files are product demonstrations in Foreman and Germet, not hero media.

## Asset inventory

| File | Bytes | Container / codec | Geometry | FPS | Duration | Approx. file bitrate | Audio | Progressive layout | Production role |
|---|---:|---|---|---:|---:|---:|---|---|---|
| `herovideo.mp4` | 2 before removal | Invalid CRLF placeholder | Unknown | Unknown | Unknown | Unknown | Unknown | Not an MP4 | Removed; original binary must be restored through the approved media pipeline |
| `weryai_5bb6aefbba19268f1e7c90c34015e82f.mp4` | 3,217,521 | ISO BMFF MP4 / H.264 AVC | 864×480, 9:5 landscape | 24 | 5.042 s | 5.11 Mb/s | None | `moov` after `mdat` | Active homepage and Atlas fallback source |

Metadata was read from MP4 boxes because `ffprobe`/`ffmpeg` were unavailable. Full decode and representative-frame inspection therefore remain manual requirements; neither file is claimed visually approved from metadata alone.

## Broken-file reconciliation

`herovideo.mp4` was a two-byte CRLF file: not Git LFS, not an MP4, and referenced nowhere. It was removed rather than shipping an invalid binary placeholder. A 4,198,975-byte historical source exists as blob `14baba079f7a2095cf156fb8d6035cab38b6c0bc`, immediately before commit `6054600` renamed it to the broken destination. Because binary changes are not accepted in this delivery path, the historical binary was not recommitted. Restore and visually review it through the approved media pipeline before activation.

## Production strategy

- Homepage and Atlas currently retain the landscape `weryai…mp4`. Sharing is intentional until the restored portrait asset receives visual review; the footage is not labelled as an owned Atlas site.
- Home uses mobile focal position 56% center; Atlas uses 58% center; desktop returns to center. Both use fixed minimum hero heights.
- Directional and vertical black overlays preserve copy and transparent-header contrast throughout unknown frame variation.
- `hero-fallback.svg` provides a lightweight, non-photographic poster and static fallback. A frame-derived poster may replace it after decoded visual review.
- `HeroVideo` renders no media for reduced-motion or Save-Data users, uses metadata-only preload, is route-local, is muted/inline/decorative, and removes failed media while retaining the fallback.
- Orbital uses no terrestrial hero video.
- No recompression was performed. The active landscape MP4 is not fast-start arranged; move `moov` before `mdat` with a no-reencode tool only after a media-capable environment is available.

## Manual visual checklist

Inspect decoded frames and the full loop for artifacts, banding, watermarks, embedded text, black first frame, motion blur, abrupt transitions, letterboxing and misleading subject matter. Review 320, 375, 390, tablet portrait, 1440 and ultrawide crops. If the portrait asset is visually suitable for a distinct route, create a frame-derived poster and assign it only after this review.
