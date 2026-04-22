# Acme Corp — Business Website

A professional business website built with Next.js 16, TypeScript, and Tailwind CSS v4. Includes a public landing page and an admin section with a Kanban board.

## Tech Stack

- **Next.js 16.2** — App Router, TypeScript, static export
- **Tailwind CSS v4** — PostCSS plugin, CSS custom properties for theming
- **React 19** — Server and Client Components, native HTML5 drag-and-drop

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

| Route | Description |
|-------|-------------|
| `/` | Public landing page (Hero, Features, About, Contact) |
| `/admin` | Admin dashboard |
| `/admin/kanban` | Kanban board with drag-and-drop |

## Project Structure

```
app/
  page.tsx                    # Landing page
  layout.tsx                  # Root layout (fonts, metadata)
  globals.css                 # Tailwind v4 + brand color tokens
  lib/
    nav-links.ts              # Shared navigation link definitions
  components/
    Navbar.tsx                # Fixed top navigation
    Hero.tsx                  # Hero section
    Features.tsx              # Features/services grid
    About.tsx                 # About section with stats
    Footer.tsx                # Contact footer
    admin/
      AdminSidebar.tsx        # Left sidebar navigation
      KanbanBoard.tsx         # Board state owner
      KanbanColumn.tsx        # Column with DnD event handlers
      KanbanCard.tsx          # Draggable card
      kanban-types.ts         # Shared TypeScript interfaces
  admin/
    layout.tsx                # Admin shell (sidebar + content)
    page.tsx                  # Admin dashboard
    kanban/
      page.tsx                # Kanban board page
```

## Kanban Board

- **3 columns**: To Do, In Progress, Done
- **Drag and drop**: Native HTML5 DnD API — no extra packages
- **Add cards**: Click "+ Add a card" in any column, press Enter or click "Add card"
- **Delete cards**: Hover a card and click the × button
- **State**: In-memory React state (refreshes on page reload)

## Theming

Brand colors are defined as CSS custom properties in [`app/globals.css`](app/globals.css) and exposed as Tailwind utilities:

| Token | Value | Tailwind class |
|-------|-------|----------------|
| `--brand` | `#2563eb` | `bg-brand`, `text-brand` |
| `--brand-dark` | `#1d4ed8` | `bg-brand-dark`, `hover:bg-brand-dark` |

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run lint     # ESLint
```
