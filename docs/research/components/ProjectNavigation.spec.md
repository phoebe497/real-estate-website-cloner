# ProjectNavigation Specification

## Overview
- **Target file:** `src/components/ProjectNavigation.tsx`
- **Screenshot:** `docs/design-references/desktop-full.png` (Sticky tab bar)
- **Interaction model:** click-driven (Jump to anchors), scroll-driven (Sticky positioning)

## DOM Structure
- `div.re__project-navigation` (Wrapper)
  - `div.re__project-navigation__container` (Inner)
    - `ul`
      - `li` -> `a` (Tab Item)
      - ...

## Computed Styles (exact values)

### Container (`.re__project-navigation`)
- display: block
- backgroundColor: rgb(255, 255, 255)
- height: 84px
- boxShadow: rgb(242, 242, 242) 0px 1px 0px 0px (Bottom border)
- position: static (Becomes `fixed` or `sticky` on scroll)

### Inner Container (`.re__project-navigation__container`)
- width: 1140px
- margin: 0 auto
- display: flex
- alignItems: center
- height: 60px (Content height)

### Tab Item (`a`)
- padding: 20px 0
- margin: 0 16px
- fontSize: 14px
- fontWeight: 500
- color: rgb(44, 44, 44)
- cursor: pointer
- transition: all 0.2s

## States & Behaviors
- **Sticky:** When user scrolls past `y=700` (approximately), the container should stick to the top with `zIndex: 100`.
- **Active State:** The active tab has a red bottom border (`rgb(224, 60, 49)`) 2px thick.
- **Hover:** Color changes to primary red.

## Text Content (verbatim)
"Bán & Cho thuê", "Danh sách tin rao", "Tổng quan", "Giới thiệu về dự án", "Mặt bằng dự án", "Tổng thể hạ tầng", "Vị trí", "Bản đồ dự án", "Ước tính khoản vay", "Hỗ trợ tính lãi suất", "Xem thêm", "Câu hỏi thường gặp", "Dự án liên quan"

## Responsive Behavior
- **Mobile:** Becomes a horizontal scrollable list or a dropdown menu.
