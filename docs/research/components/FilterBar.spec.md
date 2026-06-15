# FilterBar Specification

## Overview
- **Target file:** `src/components/FilterBar.tsx`
- **Interaction model:** click-driven (dropdowns/modals)

## DOM Structure
- `.re__advanced-filter-modal-container`
  - `.re__filter-group` (Grid of selects)
    - `.re__filter-item` (Dropdown trigger: "Loại nhà đất", "Khu vực", "Mức giá", etc.)

## Computed Styles (exact values)

### Container
- display: grid
- grid-template-columns: repeat(4, 1fr)
- gap: 12px
- background: oklch(100% 0 0)
- padding: 16px
- border-bottom: 1px solid oklch(92.41% 0 0)

### Filter Item
- border: 1px solid oklch(92.41% 0 0)
- border-radius: 4px
- height: 40px
- display: flex
- align-items: center
- padding: 0 12px
- cursor: pointer

## States & Behaviors
- **Dropdown Open:** border-color: oklch(61.85% 0.178 28.5)
- **Hover:** background: oklch(96.27% 0 0)

## Assets
- Icons: ChevronDown from lucide-react

## Responsive Behavior
- **Desktop:** 4 columns
- **Mobile:** Horizontal scroll or button to open full-screen filter modal
- **Breakpoint:** ~1024px
