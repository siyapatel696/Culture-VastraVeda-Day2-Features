export const feature3 = {
  goal: "Suggest alternative fabrics for a garment",
  requirements: ["Substitution modal", "Suggestions dataset", "User input for custom substitutions"],
  steps: ["Build substitution dataset", "Open modal on trigger", "Render suggestions list", "Submit custom entry"],
  output: ["Suggestion modal", "User submitted alternatives"]
}

// 🧩 Feature 3 — Fabric Substitution Guide
// 🎯 GOAL
// Help users find alternative fabrics based on context like weather or affordability.
// 📌 REQUIREMENTS
// “Find Similar Fabric” button
// Modal showing alternatives
// Each alternative includes explanation
// Form to suggest new substitutions
// Moderation for suggestions
// ⚙️ IMPLEMENTATION STEPS
// Create fabric mapping dataset
// Add modal component
// Trigger modal on button click
// Render alternatives dynamically
// Add submission form inside modal
// Store suggestions in pending state
// ✅ EXPECTED OUTPUT
// ✔ Modal opens with relevant fabric suggestions
//  ✔ Users can submit new alternatives
//  ✔ Suggestions stored for review
