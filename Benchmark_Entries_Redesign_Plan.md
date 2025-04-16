# Benchmark Entries Redesign Plan

## 1. Analysis & Assessment
**Current State:**
- The `BenchmarkWidget` component in `src/components/post/BenchmarkWidget.tsx` uses a modal for adding/modifying entries.
- Benchmark entries are stored in localStorage as a plain array with the key `benchmarkEntries`.
- The current UI (modal, table) lacks modern UX polish and clear structure.

**Pain Points:**
- **Modal Design:** The form layout is dense, uses a single grid, and does not clearly group related inputs.
- **Table Design:** The table lacks clear visual hierarchy, consistent spacing, and responsiveness.
- **localStorage:** Uses a simple array without schema versioning, making future updates and migrations harder.

## 2. UI Redesign
### Modal/Form Redesign
- **Separate Component:** Extract the modal form into a new component called `BenchmarkEntryForm`.
- **Layout Improvements:** Use a two-column grid layout to group inputs (e.g., left column for exercise selection and details; right column for date, performance, result, etc.).
- **Visual Enhancements:** Adopt Tailwind UI patterns for clear labels, larger interactive areas, consistent spacing, and visual feedback on error states.

### Table Redesign
- **Structured Layout:** Redesign the table with clear headers, consistent padding, alternating row colors, and improved readability.
- **Additional UX Features:** Consider adding sorting, filtering, and responsive card views for mobile devices.

## 3. LocalStorage Redesign
Transition from storing a plain array to a structured object to facilitate future changes:
```json
{
  "version": "1.0",
  "entries": [ ... ]
}
```
This schema allows for versioned migrations and potential grouping of benchmarks by category or type.

## 4. UX Inspirations & Best Practices
- **Benchmarking Inspirations:** Draw design cues from platforms like Strava and Fitbit that offer clean, user-friendly performance tracking.
- **Modern UI Patterns:** Leverage Material Design principles or refined Tailwind UI components for consistency and appeal.

## 5. Implementation Plan & Steps
1. **Refactor Modal:** Create a dedicated component (`BenchmarkEntryForm`) with a two-column layout, improved styling, and validation.
2. **Update Table:** Redesign the table component, update headers, improve spacing, and ensure responsive behavior.
3. **Update localStorage Schema:** Modify localStorage integration to store data as a structured object with a version field.
4. **Testing & Iteration:** Validate the new UI flow, gather feedback, and iterate to refine the overall user experience.

## 6. Mermaid Diagram Overview
```mermaid
flowchart TD
    A[User initiates Add/Modify Entry] --> B[Open Redesigned Modal]
    B --> C[BenchmarkEntryForm loads with two-column layout]
    C --> D[User inputs data with clear grouping]
    D --> E[Form validates inputs]
    E --> F[Save updates in new localStorage schema {"version": "1.0", entries: [...]}]
    F --> G[Refresh Benchmark Table with improved styling]