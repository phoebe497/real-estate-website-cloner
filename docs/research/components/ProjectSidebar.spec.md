# ProjectSidebar Specification

## Overview
- **Target file:** `src/components/ProjectSidebar.tsx`
- **Screenshot:** `docs/design-references/desktop-full.png` (Right column)
- **Interaction model:** click-driven (Form submission, Links)

## DOM Structure
- `div.project-main-right` (Container)
  - `div.re__contact-form` (Contact Box)
    - `h3` ("Liên hệ tư vấn miễn phí")
    - `input`, `textarea`, `button`
  - `div.re__sidebar-links` (Optional links/ads)

## Computed Styles (exact values)

### Container (`.project-main-right`)
- width: 363px
- padding: 0
- backgroundColor: transparent
- display: block

### Contact Box
- padding: 24px
- border: 1px solid rgb(229, 229, 229)
- borderRadius: 8px
- backgroundColor: #FFF

### Title
- fontSize: 18px
- fontWeight: 600
- color: rgb(44, 44, 44)
- margin: 0 0 16px 0

### Input Fields
- width: 100%
- padding: 12px
- border: 1px solid rgb(229, 229, 229)
- borderRadius: 4px
- margin: 0 0 12px 0

### Button
- width: 100%
- padding: 12px
- backgroundColor: rgb(224, 60, 49)
- color: #FFF
- fontWeight: 600
- borderRadius: 4px
- cursor: pointer

## Text Content (verbatim)
"Liên hệ tư vấn miễn phí"
"Hãy để lại thông tin của bạn để nhận tư vấn và các cập nhật mới nhất của dự án."
"Họ và tên", "Số điện thoại", "Email", "Nhận tư vấn"

## Responsive Behavior
- **Mobile:** Moves below the main content column. Width becomes 100%.
