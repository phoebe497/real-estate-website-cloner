# Breadcrumb Specification

## Overview
- **Target file:** `src/components/Breadcrumb.tsx`
- **Screenshot:** `docs/design-references/desktop-full.png` (Top section)
- **Interaction model:** static links

## DOM Structure
- `div.re__project-breadcrumb` (Container)
  - `a.re__link-se` (Breadcrumb Item)
  - `span` (Separator: "/")
  - ... (Repeat)

## Computed Styles (exact values)

### Container (`.re__project-breadcrumb`)
- display: block
- margin: 24px 70px 8px
- width: 1140px
- height: 20px
- color: rgb(0, 0, 0)
- fontSize: 14px
- fontFamily: "Roboto Regular", Roboto, Arial
- lineHeight: 20px

### Link Item (`.re__link-se`)
- color: rgb(0, 0, 0)
- textDecoration: none
- cursor: pointer

### Separator (`span`)
- margin: 0 4px
- color: rgb(153, 153, 153)

## States & Behaviors
- **Hover:** Link items change color to primary red (`rgb(224, 60, 49)`) and gain underline.

## Text Content (verbatim)
"Dự án / Hà Nội / Gia Lâm / Căn hộ chung cư Vinhomes Ocean Park Gia Lâm"

## Responsive Behavior
- **Desktop:** 1140px centered (via margin auto/calculated).
- **Mobile:** Horizontal scroll or wrapping. (To be refined during mobile sweep).
