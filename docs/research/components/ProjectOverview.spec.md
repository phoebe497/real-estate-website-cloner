# ProjectOverview Specification

## Overview
- **Target file:** `src/components/ProjectOverview.tsx`
- **Screenshot:** `docs/design-references/desktop-full.png` (Main content area)
- **Interaction model:** click-driven ("Xem thêm" / "Thu gọn")

## DOM Structure
- `div.re__project-main-left` (Container)
  - `div.re__project-main-number` (Key Metrics Grid)
    - `div.re__project-attr-box`
      - `div` (Label)
      - `div` (Value)
  - `div.re__project-main-content` (Rich Text)
    - `div.re__detail-content`
    - `div.re__box-view-more` (Button)

## Computed Styles (exact values)

### Metrics Container (`.re__project-main-number`)
- display: grid
- gridTemplateColumns: 1fr 1fr
- gap: 16px
- padding: 24px
- backgroundColor: rgb(250, 250, 250)
- borderRadius: 8px
- margin: 0 0 24px 0

### Metric Item
- display: flex
- flexDirection: column
- gap: 4px

### Metric Label
- fontSize: 12px
- color: rgb(153, 153, 153)
- textTransform: uppercase

### Metric Value
- fontSize: 16px
- fontWeight: 600
- color: rgb(44, 44, 44)

### Content Area (`.re__project-main-content`)
- fontSize: 14px
- lineHeight: 24px
- color: rgb(44, 44, 44)

## States & Behaviors
- **View More:** The content area has a max-height (e.g., 400px) and `overflow: hidden`. Clicking "Xem thêm" removes the max-height.

## Assets
- **Icons:** Each metric has a small SVG icon (from `public/images/ic_*.svg`).

## Text Content (verbatim)
Metrics:
- "Diện tích": "420 ha"
- "Số tòa": "66 tòa"
- "Chủ đầu tư": "Tập đoàn Vingroup"
- "Pháp lý": "Sổ hồng sở hữu lâu dài"

Content: (Long text about Vinhomes Ocean Park, Singapore model, lakes, etc. See `docs/research/components_raw.json` for full text).

## Responsive Behavior
- **Mobile:** Metrics grid becomes single column. Padding reduces.
