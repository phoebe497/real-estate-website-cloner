# DeveloperHeader Specification

## Overview
- **Target file:** `src/components/DeveloperHeader.tsx`
- **Interaction model:** static

## DOM Structure
- `.re__developer-header`
  - `.re__developer-header-logo` (Large image/logo)
  - `.re__developer-header-info`
    - `.re__developer-header-title` (Company Name)
    - `.re__developer-header-count` (Total projects)
    - `.re__developer-header-address`

## Computed Styles (exact values)

### Container
- display: flex
- align-items: center
- gap: 24px
- padding: 32px 0
- border-bottom: 1px solid oklch(92.41% 0 0)

### Logo
- width: 100px
- height: 100px
- border-radius: 50%
- border: 1px solid oklch(92.41% 0 0)
- object-fit: contain

### Title
- font-size: 24px
- font-weight: 700
- color: oklch(34.82% 0 0)

## Assets
- Logo image: `public/images/vingroup-logo.png`

## Responsive Behavior
- **Desktop:** row layout
- **Mobile:** column layout, centered
- **Breakpoint:** ~768px
