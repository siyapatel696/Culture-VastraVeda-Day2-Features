export const feature5 = {
  goal: "Attach images and videos to clothing entries",
  requirements: ["File input", "Preview before upload", "Media gallery view"],
  steps: ["File input handler", "Generate preview", "Store media refs", "Render gallery"],
  output: ["Upload and preview UI", "Media gallery component"]
}
// 🧩 Feature 5 — Photo & Video Contribution Module
// 🎯 GOAL
// Allow users to enrich clothing data with media.
// 📌 REQUIREMENTS
// Upload images/videos
// Preview before upload
// Store media links
// Gallery view on detail page
// ⚙️ IMPLEMENTATION STEPS
// Add file input
// Handle preview (URL.createObjectURL)
// Store media in array
// Create gallery component
// Render media grid
// Add basic moderation
// ✅ EXPECTED OUTPUT
// ✔ Users upload media
//  ✔ Media visible in gallery
//  ✔ Supports images + videos
