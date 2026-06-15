# ProjectAlbum Specification

## Overview
- **Target file:** `src/components/ProjectAlbum.tsx`
- **Screenshot:** `docs/design-references/desktop-full.png` (Gallery section)
- **Interaction model:** Click-driven (Image click, View all)

## DOM Structure
- `div.re__project-album-container` (Wrapper)
  - `div.re__project-album` (Grid)
    - `div.re__project-album__media` (Main big image, 609x360)
    - `div.re__project-album__media` (Small image 1, 264x179)
    - `div.re__project-album__media` (Small image 2, 264x179)
    - `div.re__project-album__media` (Small image 3, 264x179)
    - `div.re__project-album__media` (Small image 4, 264x179)
  - `div.re__prj-tag-info` (Overlay: "Đang mở bán")
  - `div.re__project-info-details` (Overlay: "420 ha")
  - `div.re__project-album-summary` (Overlay: "19")

## Computed Styles (exact values)

### Container (`.re__project-album-container`)
- display: block
- position: relative
- width: 1141px
- height: 362px

### Grid (`.re__project-album`)
- display: grid
- gridTemplateColumns: 609px 264px 264px
- gridTemplateRows: 179px 179px
- gap: 2px

### Tag: "Đang mở bán" (`.re__project-open`)
- backgroundColor: rgb(7, 163, 93)
- color: rgb(255, 255, 255)
- padding: 6px 12px
- borderRadius: 2px
- fontSize: 12px
- position: absolute
- top: 16px
- left: 16px

### Info: "420 ha" (`.re__project-info-details`)
- backgroundColor: rgba(0, 0, 0, 0.6)
- color: rgb(255, 255, 255)
- padding: 12px
- borderRadius: 4px
- position: absolute
- bottom: 16px
- left: 16px

### Summary Count (`.re__project-album-summary`)
- backgroundColor: rgba(0, 0, 0, 0.6)
- color: rgb(255, 255, 255)
- padding: 6px 12px
- borderRadius: 16px
- position: absolute
- bottom: 16px
- right: 16px

## States & Behaviors
- **Image Hover:** Image scales slightly or brightness reduces.
- **Click:** Opens lightbox.

## Assets
- **Images:** 
  - Main: `public/images/20250610160442-5cbb_wm.jpg`
  - Small 1: `public/images/20250610160438-3330_wm.jpg`
  - Small 2: `public/images/20250610160435-5b09_wm.jpg`
  - Small 3: `public/images/20240712141326-1386_wm.jpg`
  - Small 4: `public/images/20240712122229-2d1a_wm.jpg`

## Text Content (verbatim)
"Đang mở bán"
"420 ha"
"19" (Image count)

## Responsive Behavior
- **Mobile:** Only the main big image is shown. Height reduces to ~240px. Overlays remain but scale down.
