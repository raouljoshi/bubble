# Benchmark Widget Implementation Plan

## 1. New Component – BenchmarkWidget.tsx
* **Location:** `src/components/post/BenchmarkWidget.tsx`
* **Functionality:**
  * Wrap content in the existing `WidgetCard` component with:
    * `feature`: "Benchmarks"
    * `studio`: "Bonobo Gym"
    * `lastUpdated`: computed based on the latest benchmark entry
  * Define a constant list of predefined exercises. Each exercise includes:
    * Name
    * Description
    * Instructions
    * Measure
    * Optional performance levels (up to 3 options)
  * **UI Elements:**
    * Dropdown to select an exercise
    * Input fields for benchmark test details: date, performance level (if applicable), and result (in the exercise's unit)
    * Button to add a new benchmark entry
    * List of current benchmark entries with a delete option for each entry
    * Placeholder section for chart visualization (to be enhanced later)

## 2. Data Persistence
* Utilize `localStorage` with the key `"benchmarkEntries"` to store and retrieve the benchmark log data.

## 3. Styling
* Use Tailwind CSS classes to create a mobile-friendly, responsive UI consistent with the current design.

## 4. Update PostFeed Component
* **Location:** `src/components/post/PostFeed.tsx`
* **Changes:**
  * Remove the rendering of the mock posts.
  * Import and render the new `BenchmarkWidget` component to replace the posts.
  * Ensure the widget appears beneath the TrendingTopics component.

## Mermaid Diagram of the Workflow
```mermaid
graph TD;
    A[User interacts with BenchmarkWidget] --> B[Select Exercise];
    B --> C[Enter Date, Performance, and Result];
    C --> D[Click "Add Entry"];
    D --> E[Add new entry to state and persist in localStorage];
    E --> F[Display updated benchmark list];
    F --> G[Option to delete an entry];
    E --> H[Update "Last Updated" timestamp in WidgetCard];
    I[Placeholder Chart] --- F;
```

## Next Steps
* After approval of this plan, proceed to implementation in Code mode.