export const feature4 = {
  goal: "Support multiple languages for all content",
  requirements: ["Language selector UI", "Translation queue", "Locale store"],
  steps: ["Store selected language in context", "Queue translation tasks", "Apply translations on load"],
  output: ["Language switcher", "Translated content flow"]
}

// 🧩 Feature 4 — Multilingual Contribution Support
// 🎯 GOAL
// Enable content contributions in multiple languages with translation workflow.
// 📌 REQUIREMENTS
// Language selector in form
// Store content language
// Translator dashboard
// Translation status tracking
// ⚙️ IMPLEMENTATION STEPS
// Add language dropdown
// Store language field in submission
// Create translation queue
// Assign items to translators
// Save translated versions
// Display based on selected language
// ✅ EXPECTED OUTPUT
// ✔ Users can submit in different languages
//  ✔ Translators can pick and translate entries
//  ✔ Language toggle works
