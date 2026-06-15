# RelatedProjects Specification

## Overview
- **Target file:** `src/components/RelatedProjects.tsx`
- **Screenshot:** `docs/design-references/desktop-full.png` (Bottom section)
- **Interaction model:** scroll-driven (Horizontal scroll), click-driven (Card links)

## DOM Structure
- `div.re__project-related` (Container)
  - `div.re__project-related-container`
    - `h2` ("Dự án liên quan")
    - `div.re__related-list` (Horizontal scrollable area)
      - `div.re__related-card` (Project Card)
        - `img`
        - `div.re__card-info`

## Computed Styles (exact values)

### Container (`.re__project-related`)
- backgroundColor: #FFF
- padding: 40px 0
- width: 100%

### Card (`.re__related-card`)
- width: 260px
- margin: 0 16px 0 0
- border: 1px solid rgb(229, 229, 229)
- borderRadius: 8px
- overflow: hidden

### Card Image
- height: 160px
- objectFit: cover

### Card Title
- fontSize: 16px
- fontWeight: 600
- padding: 12px 12px 4px

## Text Content (verbatim)
"Dự án liên quan"
Project Names: "IA25 Ciputra", "JSC 34", "C13 Khuyến Lương", "Sunshine Continental", "Noble West Lake Ha Noi", "Moonlight 2 - An Lạc Green Symphony"

## Responsive Behavior
- **Mobile:** Cards might stack or use native touch-swipe horizontal scroll.
