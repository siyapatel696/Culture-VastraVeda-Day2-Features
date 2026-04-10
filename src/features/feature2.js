export const feature2 = {
  goal: "Categorise clothing entries with tags",
  requirements: ["Tags CRUD interface", "Filter by tag", "Tag assignment on submit"],
  steps: ["Define tag data model", "Build assign-tag UI", "Wire filter to listing"],
  output: ["Clickable tag filters", "Tagged clothing entries"]
}

// Feature 2 — Cultural Tagging System
//  GOAL
// Allow categorization and filtering of clothing using dynamic cultural tags.
//  REQUIREMENTS
// Admin can create/edit/delete tags
// Tags attached to clothing items
// Tag pills UI on cards
// Click → filter items
// Support multiple tags per item
//  IMPLEMENTATION STEPS
// Create tag data structure (id, name)
// Add tag selection in clothing form
// Render tags as clickable pills
// Maintain selectedTag state
// Filter dataset based on selected tag
// Build admin UI for tag management
// EXPECTED OUTPUT
// ✔ Tags visible on each clothing card
//  ✔ Clicking filters results instantly
//  ✔ Admin can manage tags
