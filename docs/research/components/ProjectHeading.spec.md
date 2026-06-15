# ProjectHeading Specification

## Overview
- **Target file:** `src/components/ProjectHeading.tsx`
- **Screenshot:** `docs/design-references/desktop-full.png` (Below breadcrumb)
- **Interaction model:** Click-driven (Map link, Share button)

## DOM Structure
- `div.re__project-heading` (Container)
  - `h1.re__project-name` (Project Title)
  - `div.re__project-address` (Address Line)
    - `a.re__link-se` (Map Link: "Xem bản đồ")
  - `div.re__project-sharing` (Share Button)

## Computed Styles (exact values)

### Container (`.re__project-heading`)
- display: block
- position: relative
- margin: 0px 0px 24px
- width: 1141px

### Title (`.re__project-name`)
- fontSize: 32px
- fontWeight: 600
- fontFamily: "Lexend Medium", Roboto, Arial
- lineHeight: 40px
- color: rgb(0, 0, 0)
- margin: 0 0 4px 0

### Address (`.re__project-address`)
- fontSize: 14px
- color: rgb(44, 44, 44)
- display: flex
- alignItems: center
- gap: 8px

### Share Button (`.re__project-sharing`)
- position: absolute
- top: 0
- right: 0
- display: flex
- alignItems: center
- padding: 8px 16px
- border: 1px solid rgb(229, 229, 229)
- borderRadius: 4px
- cursor: pointer
- fontSize: 14px
- fontWeight: 500

## States & Behaviors
- **Share Button Hover:** Background becomes `rgb(242, 242, 242)`.
- **Map Link Hover:** Color becomes `rgb(224, 60, 49)`.

## Assets
- **Icons:** 
  - Share icon (Likely standard Lucide Share or extracted SVG)
  - Location pin icon (next to address)

## Text Content (verbatim)
"Vinhomes Ocean Park Gia Lâm"
"Xã Đa Tốn, Kiêu Kỵ, Dương Xá và thị trấn Trâu Quỳ, Gia Lâm, Hà Nội. Xem bản đồ"
"Chia sẻ"

## Responsive Behavior
- **Mobile:** Share button moves below title or becomes icon-only. Title font size reduces to ~24px.
