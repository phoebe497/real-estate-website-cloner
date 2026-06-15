# Page Topology - Vinhomes Ocean Park Clone

## Page Structure (Vertical Order)

1. **Header & Global Nav** (External to main content)
2. **Breadcrumb** (`.re__project-breadcrumb`)
3. **Project Heading** (`.re__project-heading`) - Title, Address, Map link, Share
4. **Project Album** (`.re__project-album-container`) - Big gallery with overlay tags ("Đang mở bán", "420 ha")
5. **Project Navigation** (`.re__project-navigation`) - Sticky tabs (Overview, Plan, Location, etc.)
6. **Main Content Container** (`.re__project-main-container`)
   - **Left Column** (`.re__project-main-left`)
     - **Key Metrics** (`.re__project-main-number`) - Grid of Area, Buildings, Developer, Legal
     - **Description Content** (`.re__project-main-content`) - Rich text introduction
     - **Information Toggles** (`.re__project-toogle-box`) - Accordions for Details, Amenities, Developer
   - **Right Column** (Sidebar - contains Contact, Quick Info)
7. **Related Projects** (`.re__project-related`) - Horizontal scroll/grid of similar projects
8. **SEO Tags** (`.re__seo-tags`) - Bottom keyword list
9. **Footer** (Global)

## Interactivity Model
- **Sticky Header:** Nav tabs stick to top when scrolling past album.
- **Image Gallery:** Click to open full-screen lightbox.
- **Accordions:** "See more" triggers in description and "Thông tin chi tiết".
- **Tabs:** Navigation tabs jump to anchors.
