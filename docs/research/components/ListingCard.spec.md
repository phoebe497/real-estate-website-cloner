# ListingCard Specification

## Overview
- **Target file:** `src/components/ListingCard.tsx`
- **Interaction model:** static (with hover states)

## DOM Structure
- `.re__card-full-container` (Main wrapper)
  - `.re__card-image` (Left/Top side image with lazy loading)
  - `.re__card-info` (Right/Bottom side content)
    - `.re__card-title` (Heading)
    - `.re__card-config` (Price, Area, Price per m2)
    - `.re__card-location` (Address)
    - `.re__card-description` (Excerpt)
    - `.re__card-published-info` (Published date & Save button)

## Computed Styles (exact values)

### Container
- display: flex
- border: 1px solid oklch(92.41% 0 0)
- border-radius: 8px
- padding: 0
- margin-bottom: 16px
- overflow: hidden

### Title
- font-size: 14px
- font-weight: 700
- line-height: 20px
- color: oklch(34.82% 0 0)
- text-transform: uppercase

### Price & Area
- color: oklch(61.85% 0.178 28.5) (Red/Orange accent)
- font-weight: 700
- font-size: 16px

## Hover states
- **Container:** box-shadow: 0 4px 12px rgba(0,0,0,0.1), transition: box-shadow 0.2s ease
- **Title:** color: oklch(61.85% 0.178 28.5)

## Assets
- Image placeholder: `public/images/listing-placeholder.jpg`
- Icons: Heart (Save), MapPin (Location) from lucide-react

## Responsive Behavior
- **Desktop:** flex-direction: row, image width: 200px
- **Mobile:** flex-direction: column, image width: 100%
- **Breakpoint:** ~768px
