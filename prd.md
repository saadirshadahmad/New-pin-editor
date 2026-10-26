# Pinterest Pin Studio --- Product Requirements Document (PRD)

**Product type:** Browser-based Pinterest pin design editor for
digital-product sellers\
**Working name:** PinStudio (renameable)\
**Primary user:** A solo Etsy/digital-download seller who needs
attractive, editable Pinterest creatives without Canva or AI image
generation\
**Platform:** Responsive web application, desktop-first editor with
usable tablet/mobile layouts\
**Recommended implementation:** Next.js App Router, TypeScript, React,
Tailwind CSS, shadcn/ui (customized), Zustand or equivalent state store,
Fabric.js or Konva for canvas interactions, and a reliable client-side
export pipeline.

------------------------------------------------------------------------

## 1. Product vision

Build a polished, flexible pin-making studio that lets a user create
beautiful Pinterest-ready vertical pins from their own product images,
editable text, colors, and reusable layouts. The user should be able to
start with one image and a simple layout, or build a richer promotional
pin using 3--4 images, a headline, subtitle, benefits, and a footer
call-to-action.

The editor should make professional-looking pins possible without
requiring Canva, AI-generated artwork, or graphic-design expertise. The
product should focus on digital products such as planners, templates,
printable wall art, crochet patterns, PNG files, trackers, worksheets,
and other downloadable products.

**Important marketing qualification:** Templates should follow sound
creative principles---clear hierarchy, strong contrast, legible
typography, relevant imagery, and one clear message---but no layout can
guarantee high CTR, Pinterest visibility, or sales. Include a way to
compare and test different creative variations.

## 2. Goals and success criteria

### Core goals

1.  Provide 20 polished, distinct, reusable pin templates designed for
    digital-product promotion.
2.  Let users edit every template's text, images, colors, font sizes,
    alignment, spacing, and visible elements.
3.  Support a fast "add one image → download pin" workflow.
4.  Support multi-image layouts with 3--4 images, heading, subtitle,
    feature text, and footer CTA.
5.  Export clean, sharp pins in a 2:3 aspect ratio, with 1000 × 1500 px
    as the default export size.
6.  Save projects and duplicate designs so users can build a consistent
    brand style.
7.  Offer a Pinterest-inspired visual experience without copying
    Pinterest's exact interface, logo, icons, proprietary assets, or
    trade dress.
8.  Work well for a seller who needs to produce multiple product pins
    efficiently.

### Measurable product targets

-   A first-time user can create and export a one-image pin in under 2
    minutes.
-   A user can replace template images and edit its headline without
    breaking the layout.
-   Exported images have the requested dimensions and do not contain
    clipped text or unintended blank areas.
-   All 20 templates are editable and preview correctly.
-   The app remains responsive with a typical design containing 4 images
    and 10--20 editable elements.
-   Errors are understandable and recoverable; unsaved work is protected
    against accidental navigation where technically possible.

These are product targets to validate with testing, not claims of
guaranteed outcomes.

## 3. Users and main use cases

### Primary user

A digital-product seller who has product mockups or screenshots and
wants to create promotional pins quickly. They may not have professional
design skills and need a simple workflow, attractive presets, and full
control over the result.

### Main use cases

-   Create a minimalist pin from one product image.
-   Create a collage from 3--4 product previews.
-   Promote a free digital download.
-   Show a planner, printable, template, tracker, or pattern with
    benefits and a CTA.
-   Create a branded series of pins with consistent colors and
    typography.
-   Duplicate a pin and test different headlines, images, or colors.
-   Export multiple versions in a standard Pinterest vertical format.
-   Reopen and edit an existing project later.

## 4. Scope

### MVP --- must have

-   20 templates.
-   2:3 vertical canvas.
-   Image upload, crop, reposition, zoom, replace, and remove.
-   Editable text and color controls.
-   Montserrat as the default font.
-   Custom color palette and per-element colors.
-   Layers/elements panel with selection, reorder, hide, lock, and
    delete.
-   Undo/redo.
-   Zoom and fit-to-canvas.
-   Project save/load in the browser.
-   PNG export at 1000 × 1500 px, plus optional 2× export at 2000 × 3000
    px.
-   Responsive app shell, clear empty states, and helpful errors.
-   Basic template categories and search/filter.
-   Duplicate design.

### Recommended next release

-   Multiple brand kits.
-   JPG export and quality setting.
-   Project import/export as a portable JSON file with linked/embedded
    image handling.
-   Bulk duplicate workflow for creating variations.
-   Safe-area and contrast warnings.
-   Keyboard shortcuts.
-   Autosave and recovery.
-   Export queue for several variations.
-   Template favorites and recently used templates.

### Out of scope for the first release

-   Publishing directly to Pinterest.
-   Pinterest account connection or analytics.
-   Automated scraping of Pinterest or competitor pins.
-   Guaranteed CTR, ranking, traffic, or sales predictions.
-   AI image generation.
-   A full general-purpose photo editor.
-   Multi-user collaboration and billing unless added as a separate
    phase.

## 5. Design direction and brand safety

### Overall visual direction

Use a familiar, creator-friendly layout inspired by modern
visual-discovery and design tools: a compact top bar, a template
library, a central canvas, and contextual editing controls. Keep the app
clean, spacious, quick, and image-focused.

**Do not make an exact copy of Pinterest.** Do not use Pinterest's logo,
branded wordmark, proprietary illustrations, exact icons, or a
pixel-for-pixel recreation of its UI. Use an original product name,
original icon set, and a distinct interface. A red accent may be offered
as one theme option, but the app should not imply that it is an official
Pinterest product. Personal use does not automatically remove copyright
or trademark concerns.

### Suggested application layout

-   **Top bar:** App mark/name, project title, undo, redo, autosave
    state, preview, export.
-   **Left rail:** Templates, Uploads, Text, Elements, Brand Kit,
    Projects.
-   **Left content panel:** Contextual list for the selected rail item;
    searchable templates and uploads.
-   **Center workspace:** Neutral gray or warm-neutral pasteboard, with
    a centered 2:3 artboard and zoom controls.
-   **Right properties panel:** Selected element settings: text, font,
    fill, stroke, opacity, alignment, crop, position, dimensions, layer
    controls.
-   **Bottom/status area:** Canvas dimensions, zoom percentage, selected
    object info, and helpful warnings when applicable.

On smaller screens, panels should collapse into drawers or tabs. Do not
squeeze the full desktop editor into a tiny mobile layout.

### UI principles

-   Clear hierarchy and minimal visual noise.
-   Consistent spacing, accessible contrast, and visible focus states.
-   Rounded corners used with restraint.
-   Small, meaningful icons with labels or tooltips.
-   Do not rely on color alone to communicate status.
-   Confirm destructive actions such as deleting a project.
-   Provide empty states that explain what to do next.
-   Use original components and styling rather than copied Pinterest
    screens.

## 6. Main user journey

1.  User opens PinStudio.
2.  User chooses **Start with a template**, **Start with an image**, or
    **Open a project**.
3.  If starting with an image, the app opens a simple image-first layout
    and fits the image to the 2:3 canvas.
4.  User uploads one or more product images.
5.  User selects a template or replaces placeholder images.
6.  User edits the headline, subtitle, CTA, colors, and typography.
7.  User previews the pin at full size and at thumbnail scale.
8.  App runs a non-blocking pre-export check for missing images, clipped
    text, low contrast, or content outside the canvas.
9.  User exports PNG (default 1000 × 1500 px) or a larger 2× PNG.
10. Project is saved so the user can revisit or duplicate it.

## 7. The 20 template styles

Every template must be an actual editable layout---not a static
background image. Each must use a sensible default hierarchy and sample
copy that can be replaced. Provide neutral, clearly marked placeholders
rather than forcing users to keep sample text.

### Template 01 --- Clean Product Hero

-   One large product image/mockup is the visual focus.
-   Optional small headline, short subtitle, and optional footer CTA.
-   Controls: image fit/crop, image position, background, text
    visibility, alignment.
-   Best for: a planner cover, printable, worksheet, or product mockup.

### Template 02 --- Full-Bleed Image

-   One image fills the whole 2:3 canvas.
-   Optional editable overlay, small label, and CTA pill.
-   Include adjustable overlay opacity and text-safe area.
-   Best for: strong product mockups or lifestyle photos.

### Template 03 --- Editorial Title + Image

-   Large headline in the upper area, one main image below.
-   Subtitle and small footer.
-   Adjustable top/bottom split and text alignment.
-   Best for: educational or problem/solution pins.

### Template 04 --- Three-Image Collage

-   Three images in a clean grid or asymmetric arrangement.
-   Editable headline, subtitle, and footer CTA.
-   Allow users to swap image positions and adjust gutters.
-   Best for: showing several planner pages or product previews.

### Template 05 --- Four-Image Product Grid

-   Four image tiles with consistent spacing.
-   Title, optional short subtitle, and footer CTA.
-   Each tile has independent crop and corner radius.
-   Best for: bundles, printable packs, and template collections.

### Template 06 --- Before / After or Problem / Solution

-   Two main image areas with editable labels.
-   Headline and concise explanatory line.
-   Avoid misleading transformations or unsupported claims.
-   Best for: showing a blank worksheet versus a completed example.

### Template 07 --- Feature Checklist

-   One hero image plus 3--5 editable benefit bullets.
-   Simple check icons or original decorative markers.
-   CTA footer.
-   Best for: communicating what is included in a digital download.

### Template 08 --- Free Download

-   One main image or mockup.
-   Strong "FREE"/"Free Download" label, editable title, and CTA.
-   Offer text must remain editable; avoid false urgency.
-   Best for: lead magnets and free sample products.

### Template 09 --- Bundle Showcase

-   Main product image plus 2--4 small preview tiles.
-   Editable bundle title, item count, short details, and CTA.
-   Item count must be user-editable and not auto-invented.
-   Best for: multi-file digital bundles.

### Template 10 --- Minimal Typography

-   Typography-led composition with optional small image.
-   Large headline, concise supporting line, small CTA.
-   Strong contrast and generous negative space.
-   Best for: simple messages and educational content.

### Template 11 --- Product Pages Preview

-   3--4 stacked or fanned page previews.
-   Title and small caption.
-   User can adjust angle, scale, overlap, and shadow within safe
    limits.
-   Best for: planners, trackers, journals, and worksheets.

### Template 12 --- Device Mockup

-   Product preview inside an editable tablet/laptop/phone frame or a
    simple original frame.
-   Headline and CTA.
-   Device frame must be an original, reusable vector component, not a
    copied brand asset.
-   Best for: digital planners and templates.

### Template 13 --- Step-by-Step Guide

-   Three numbered steps with small image/illustration slots.
-   Editable heading and brief step descriptions.
-   Best for: explaining how to use a printable or template.

### Template 14 --- Benefits + Product

-   One large product image on one side and a list of 3 benefits on the
    other.
-   Clear title and CTA.
-   Responsive layout logic is not needed inside the static pin, but the
    composition must adapt if text is longer.
-   Best for: explaining the value of a product.

### Template 15 --- Seasonal / Occasion

-   Hero image with editable seasonal headline and small accent shapes.
-   Seasonal colors must be fully editable.
-   Avoid locking the design to one year or holiday.
-   Best for: seasonal planners, gifting, and holiday printables.

### Template 16 --- Quote / Tip Card

-   Large editable tip, quote, or useful idea with a supporting image.
-   Optional small product preview and CTA.
-   Include attribution field when the quote is not original.
-   Best for: educational content that points toward a related digital
    product.

### Template 17 --- Checklist / Tracker Preview

-   Main screenshot or preview of a tracker/checklist.
-   Title, a few editable feature labels, CTA.
-   Do not make tiny mockup text part of the actual headline; keep the
    headline legible.
-   Best for: habit trackers, cleaning planners, and goal trackers.

### Template 18 --- Colorway Comparison

-   2--4 image cards showing different product colors/versions.
-   Editable title, color labels, and footer.
-   Best for: products offered in several color themes.

### Template 19 --- Pinterest-Style Listicle Layout

-   Large headline plus 3--5 short list items and one supporting image.
-   Clean hierarchy; no tiny paragraphs.
-   Best for: "ideas," "ways," "checklist," or "what's included" pins.

### Template 20 --- Brand Signature

-   Reusable branded composition with logo/brand name, one hero image,
    headline, and CTA.
-   User can save brand colors and default text styles.
-   Best for: consistent pin series across a shop.

### Template system requirements

-   All templates use the same element model and editor tools.
-   Templates define element positions, default styles, placeholders,
    and optional element groups.
-   Each template has a preview thumbnail, title, category, short
    description, and a "Use template" action.
-   Users can hide optional elements and restore them later.
-   Template selection should not destroy a current project without a
    confirmation or create-new-project option.
-   Users can favorite templates and filter by "One image," "Collage,"
    "Text-led," "Freebie," and "Product showcase."

## 8. Canvas and export requirements

### Canvas

-   Default aspect ratio: 2:3 portrait.
-   Default size: 1000 × 1500 px.
-   Optional export sizes: 2000 × 3000 px (2×) and a custom size that
    preserves 2:3 unless the user explicitly unlocks the ratio.
-   The editor workspace may display the canvas scaled down, but export
    must use the intended pixel dimensions.
-   Keep all canvas content inside the export bounds.
-   Include a toggle for guides/safe margins; guides must not be
    exported.
-   Support zoom in/out, fit to screen, and 100% preview.
-   Include a thumbnail preview so users can assess text readability at
    small sizes.

### Export

-   PNG as the default, with transparent background only if a future
    export mode explicitly supports it; ordinary pin exports should use
    a solid background.
-   Optional JPG export in a later release.
-   Render at the final pixel dimensions, not by taking a screenshot of
    the visible editor.
-   Wait for images and fonts to be ready before rendering.
-   Avoid blurry text, missing fonts, unexpected clipping, or export
    artifacts.
-   Use an informative filename, e.g. `product-name-pin-01.png`, with
    editable project title.
-   Display export progress and a clear error if export fails.
-   Revoke temporary object URLs when no longer needed and clean up
    temporary export resources.

## 9. Editor features

### Images

-   Upload from device using file picker and drag-and-drop.
-   Support common image formats: PNG, JPG/JPEG, and WebP. HEIC support
    may be deferred.
-   Show image thumbnails in an Uploads panel.
-   Replace selected image while preserving the image frame's size and
    layout.
-   Crop, zoom, pan, fit, and fill.
-   Flip horizontally/vertically if supported by the selected canvas
    library.
-   Adjust opacity and corner radius.
-   Optional simple border and shadow.
-   Duplicate or delete an image.
-   Show a useful error for unsupported or oversized files.
-   Never silently distort an image; preserve aspect ratio by default.
-   Let users choose whether an image is cropped to fill or contained
    with empty space.

### Text

-   Add heading, subtitle, body, label, bullet list, and CTA text.
-   Default font: **Montserrat**.
-   Provide Montserrat weights such as 400, 500, 600, 700, and 800 when
    available.
-   Font controls: family, weight, size, color, line height, letter
    spacing, alignment, capitalization, and text box width.
-   Support line breaks and multiline text.
-   Support text background/highlight, outline, and shadow as optional
    controls.
-   Provide quick styles: Heading, Subtitle, Body, Label, CTA.
-   Text box resizing should reflow text predictably.
-   Warn when text is overflowing or too small for a typical pin
    preview.
-   If a chosen font is unavailable, use a clear fallback and ensure
    export matches preview.

### Colors and backgrounds

-   Background colors, gradients, and solid color fills.
-   Per-element color controls.
-   Color picker plus HEX input.
-   Recent colors and saved swatches.
-   Optional palette presets, all editable.
-   Suggested starter palette: warm cream, white, charcoal, deep purple,
    lilac, and golden yellow. These are defaults, not restrictions.
-   Include one-click "Apply brand colors" and "Reset to template
    colors."
-   Do not force users into one brand palette.

### Elements and layers

-   Basic original shapes: rectangle, rounded rectangle, circle, line,
    divider, and simple decorative sparkles.
-   Editable CTA pill/button-like graphic as part of the pin artwork; it
    is not a live clickable button in the exported image.
-   Layer list with reorder, rename, hide/show, lock/unlock, duplicate,
    and delete.
-   Multi-select and group/ungroup where supported.
-   Snap-to-center, alignment guides, spacing hints, and optional grid.
-   Bring forward/send backward and bring to front/send to back.
-   Lock background elements to prevent accidental movement.
-   Clear selection and escape-key behavior.

### Undo, redo, and keyboard

-   Undo/redo for meaningful changes.
-   Suggested shortcuts: Ctrl/Cmd+Z undo, Ctrl/Cmd+Shift+Z redo,
    Delete/Backspace delete selected element when safe, Ctrl/Cmd+D
    duplicate, Ctrl/Cmd+S save, plus/minus zoom.
-   Show shortcuts in tooltips where practical.
-   Do not intercept normal text-editing shortcuts while the text field
    is active.

### Preview and quality checks

-   Full-canvas preview without editor controls.
-   Thumbnail-size preview.
-   Toggle safe-area guides.
-   Non-blocking checks for missing images, text outside the canvas,
    text overflow, very low contrast, and very small text.
-   Provide a direct "Fix" or "Select element" action when possible.
-   Warnings must not falsely claim that a pin will perform well or
    poorly in Pinterest's algorithm.

## 10. Project and asset management

### Projects

-   Create, rename, duplicate, delete, and reopen a project.
-   Autosave after a short debounce and show "Saving," "Saved," or "Save
    failed."
-   Protect against accidental loss when navigating away, as supported
    by the browser.
-   Provide a recovery option after a crash or refresh.
-   Recent projects list with preview thumbnail, title, modified time,
    and duplicate action.
-   Empty state with a clear "Create your first pin" action.

### Persistence approach

For an MVP without accounts, use browser-local storage or IndexedDB.
Prefer IndexedDB for project JSON and image blobs because localStorage
is not suitable for large images. Clearly explain that browser-local
projects do not automatically sync across devices and can be lost if
browser data is cleared.

Structure the persistence layer so cloud sync and user accounts can be
added later without rewriting the editor. Never imply that local-only
projects are backed up to a server.

### Portable project file

-   Define a versioned JSON schema for project structure.
-   Store text, shapes, image-frame geometry, element styling, canvas
    dimensions, and layer order.
-   For images, use safe references to stored assets or include image
    data only in an explicit portable export.
-   Validate imported project files and reject malformed data.
-   Do not execute imported content as code.
-   Add schema migration support when the project format changes.

## 11. Brand kit and repeatable production

-   Optional brand name and logo image.
-   Save primary, secondary, background, and accent colors.
-   Save default heading, subtitle, body, and CTA styles.
-   One-click apply brand kit to a template without moving or deleting
    content unexpectedly.
-   Save up to several brand kits in the project/local profile.
-   Allow a user to change a template's colors manually after applying
    the kit.
-   Add an optional logo placeholder that can be hidden or removed.

## 12. Bulk variation workflow

Recommended feature after the MVP: - Duplicate a design into a new
variation. - Let the user change only selected fields, such as headline,
subtitle, hero image, accent color, or CTA. - Name variations clearly
(A, B, C or custom names). - Preview variations side by side. - Export
selected variations with distinct filenames. - Do not label one
variation "high CTR" without real, relevant performance data. -
Encourage users to test one or two variables at a time and evaluate
their own results.

## 13. Accessibility and usability

-   Use semantic HTML for app controls and labels.
-   Keyboard-operable panels and buttons.
-   Visible keyboard focus.
-   Accessible contrast for editor UI and sensible contrast warnings for
    pin content.
-   Buttons have accessible names; icon-only controls have tooltips and
    accessible labels.
-   Do not communicate save/export errors by color alone.
-   Keep essential text controls readable at normal zoom.
-   Provide helpful empty states and plain-language error messages.
-   Support reduced motion for nonessential transitions.
-   Do not use hover as the only way to reveal critical controls.

## 14. Technical architecture

### Recommended stack

-   **Framework:** Next.js App Router + TypeScript.
-   **Styling:** Tailwind CSS with custom tokens; shadcn/ui may be used
    as a foundation but must be customized to match the app's own
    design.
-   **Canvas:** Choose Fabric.js or Konva after a short technical spike.
    Confirm text rendering, clipping, image cropping, selection,
    transforms, and high-resolution export before committing.
-   **State:** Zustand or a similarly small predictable state store.
-   **Validation:** Zod for project and import schemas.
-   **Persistence:** IndexedDB wrapper such as Dexie, or a small tested
    equivalent.
-   **Icons:** Lucide or another consistent licensed icon library.
-   **Fonts:** Load Montserrat from a reliable source or bundle it where
    licensing and deployment rules allow; wait for font readiness before
    export.
-   **Testing:** Vitest/Jest for logic and Playwright for core user
    flows.

### Suggested architecture modules

-   `app/` --- routes and application shell.
-   `components/editor/` --- canvas, toolbar, panels, properties
    inspector, layers.
-   `components/templates/` --- template gallery, cards, filters.
-   `lib/canvas/` --- canvas adapter, selection, transforms, rendering,
    export.
-   `lib/templates/` --- versioned template definitions and defaults.
-   `lib/projects/` --- schema, migrations, import/export, persistence.
-   `lib/assets/` --- upload validation, thumbnails, image metadata,
    cleanup.
-   `lib/quality-checks/` --- overflow, bounds, contrast, missing
    assets.
-   `lib/brand-kit/` --- palettes and text presets.
-   `stores/` --- editor and project state.
-   `types/` --- shared TypeScript types.
-   `tests/` --- unit, integration, and end-to-end tests.

### Data model (conceptual)

Each project should include: - `id`, `name`, `createdAt`, `updatedAt`,
`schemaVersion`. - `canvas`: width, height, background, aspect ratio. -
`elements`: an ordered list of element objects. - `assets`: references
and metadata for uploaded images. - `brandKitId` or a project-local
brand kit snapshot. - `exportSettings`: format and output dimensions. -
`templateId` as optional origin metadata.

Each element should include: - `id`, `type` (text, image, shape, line,
decorative element). - `name`, `visible`, `locked`, `zIndex`. - `x`,
`y`, `width`, `height`, `rotation`, `opacity`. - Type-specific content
and styling. - Optional group ID and accessibility/editor metadata.

Use a stable, documented schema; do not make templates dependent on
hard-coded component markup.

## 15. Performance and reliability

-   Keep the editor interactive with a typical pin containing 4 images
    and 10--20 elements.
-   Avoid re-rendering the entire editor on every keystroke if only one
    selected property changes.
-   Generate image thumbnails for the gallery rather than rendering
    every original image at full size.
-   Lazy-load template previews when practical.
-   Use debounced autosave.
-   Avoid unnecessarily large client bundles; dynamically load
    canvas-only code if helpful.
-   Clean up event listeners, object URLs, image resources, and canvas
    instances.
-   Handle upload, image decode, save, and export errors gracefully.
-   Test high-resolution export for memory use and performance.
-   Ensure export waits for image decoding and font readiness.
-   Avoid relying on screenshot capture of the DOM for the final export
    when a proper canvas renderer is available.

## 16. Privacy and security

-   For the MVP, process images locally in the browser wherever
    possible.
-   Explain what is saved locally and whether anything is uploaded.
-   Do not upload user assets to a server without clear consent and a
    documented reason.
-   Validate MIME type and file size; do not trust filename extensions
    alone.
-   Avoid executing imported project data.
-   Sanitize any text that is rendered as HTML; normally treat user text
    as text, not markup.
-   Use safe object URL handling and clean up temporary resources.
-   If accounts/cloud sync are added later, implement authentication,
    authorization, and secure asset access separately.
-   Do not scrape Pinterest or attempt to access private account data.

## 17. Error states and edge cases

Handle at least these scenarios: - Unsupported or corrupted image. -
Image upload exceeds configured size limit. - Image fails to decode. -
User deletes an image still referenced by a project. - Project file is
invalid or from a newer unsupported schema. - Autosave fails or browser
storage quota is reached. - Export fails or the browser runs out of
memory. - Font does not load. - Text is too long for a layout. - User
changes canvas dimensions after designing. - User closes a project with
unsaved changes. - Empty template search results. - No saved projects or
no uploaded images. - Duplicate project name. - Imported asset is
missing.

For every error, explain what happened and provide a reasonable next
action. Never silently discard the current design.

## 18. Testing plan

### Unit tests

-   Template definitions have valid canvas bounds and unique element
    IDs.
-   Project schema validation and migrations.
-   Color/HEX parsing.
-   Text overflow and canvas-bound checks.
-   Image file validation.
-   Export dimension calculations.
-   Undo/redo state transitions.
-   Filename sanitization.

### Integration tests

-   Choose a template and edit every element type.
-   Upload, crop, replace, and delete images.
-   Edit Montserrat text styles.
-   Change background and per-element colors.
-   Reorder and lock layers.
-   Save, reload, duplicate, and delete a project.
-   Import/export a project JSON file.
-   Export PNG at 1000 × 1500 and 2000 × 3000.

### End-to-end acceptance tests

1.  Start with one image and export a valid PNG.
2.  Select a 4-image template, upload four images, edit text, and
    export.
3.  Change the whole pin palette and override one element color.
4.  Refresh the browser and recover the saved project.
5.  Undo and redo image movement and text changes.
6.  Export a design with a long headline and verify that the warning is
    shown.
7.  Confirm guides and editor controls are not present in the exported
    image.
8.  Verify that exported dimensions are exact.
9.  Test keyboard navigation and visible focus states.
10. Test a project with missing assets and verify a helpful recovery
    path.

## 19. MVP acceptance criteria

The MVP is considered complete when: - \[ \] All 20 templates exist as
editable layouts. - \[ \] The one-image workflow is available from the
home screen. - \[ \] 3-image and 4-image layouts can be populated and
edited. - \[ \] All text is editable and Montserrat is the default
font. - \[ \] Images can be uploaded, cropped, repositioned, replaced,
and removed. - \[ \] Every element's main color can be changed. - \[ \]
Background color can be changed with a color picker and HEX field. - \[
\] Layers can be reordered, hidden, locked, duplicated, and deleted. -
\[ \] Undo and redo work for the main editing operations. - \[ \]
Projects can be saved, reopened, duplicated, and deleted. - \[ \] PNG
export at 1000 × 1500 px and 2000 × 3000 px works. - \[ \] Export does
not include editor UI, guides, selection handles, or controls. - \[ \]
The UI works at desktop and remains usable on tablet/mobile. - \[ \]
Invalid files and export failures show understandable errors. - \[ \]
The app uses its own original visual identity and does not claim to be
Pinterest. - \[ \] No feature claims to guarantee reach, CTR, or sales.

## 20. Suggested implementation phases

### Phase 1 --- Foundation

-   Initialize Next.js + TypeScript project.
-   Build the original application shell and responsive layout.
-   Define project and element types.
-   Implement canvas sizing, selection, zoom, and core state.

### Phase 2 --- Template system

-   Build the 20 template definitions.
-   Create the template gallery, categories, search, and preview.
-   Implement the one-image starter flow and image placeholders.

### Phase 3 --- Editing

-   Add image upload/crop/reposition/replace.
-   Add text editing with Montserrat.
-   Add backgrounds, palette controls, shapes, layers, and alignment.
-   Add undo/redo and keyboard shortcuts.

### Phase 4 --- Projects and export

-   Implement IndexedDB save/load and autosave.
-   Implement schema validation and portable project JSON.
-   Implement high-resolution PNG export and filename options.
-   Add export preview and quality checks.

### Phase 5 --- QA and polish

-   Test all 20 templates.
-   Test long/short text, missing images, and export fidelity.
-   Optimize rendering and memory use.
-   Improve empty states, errors, accessibility, and responsive
    behavior.

### Phase 6 --- Post-MVP enhancements

-   Brand kits, bulk variations, JPG export, favorites, and export
    queue.
-   Optional accounts and cloud sync only after privacy and security
    design.
-   Optional performance tracking based on user-provided data, without
    promising algorithmic outcomes.

## 21. Final instructions for the coding agent

Build a complete, working application---not a static mockup and not a
landing page pretending to be an editor.

Prioritize a dependable editor and export pipeline over decorative
complexity. Keep the code modular, typed, and maintainable. Use real
editable canvas elements, not flattened template images. Every template
must work with the same editing controls. Add realistic sample content
so the first launch demonstrates the workflow, but make every sample
field replaceable.

Do not leave core buttons inert. If a feature is intentionally deferred,
clearly mark it as unavailable and do not present it as working. Include
setup instructions, environment requirements, architecture notes, and
tests in the repository README. Keep Pinterest-inspired usability
patterns while using an original UI identity and avoiding a
pixel-perfect clone.

**Definition of success:** A digital-product seller can upload their own
product images, choose one of 20 layouts, edit text and colors freely,
save the project, and export a crisp 2:3 pin without needing Canva or an
AI image generator.
