export const feature1 = {
  goal: "Multi-step clothing submission flow",
  requirements: ["Multi-step form", "Field validation", "Status tracking", "Admin moderation panel", "Draft save support"],
  steps: ["Manage state across steps with useState", "Build step components (BasicInfo, Media, Tags, Review)", "Add field-level validation before advancing", "Store submission in context or backend", "Hook up moderation/approval queue for admins"],
  output: ["Working multi-step form", "Approval and rejection system"]
}

//  Feature 1 — Community Clothing Submission Portal
//  GOAL
// Enable users to contribute traditional clothing data through a structured, multi-step form with moderation control.
//  REQUIREMENTS
// Multi-step form (at least 3 steps)
// Fields: Name, Region, Fabric, Embroidery, Occasion, Gender, Language
// Form validation (required fields, formats)
// Draft saving (optional but bonus)
// Submission status: Pending / Approved / Rejected
// Admin moderation view
//  IMPLEMENTATION STEPS
// Create form state (single object)
// Divide form into steps (Step1, Step2, Step3 components)
// Add navigation (Next / Previous)
// Validate inputs before moving to next step
// Store submissions in array/database with status = "pending"
// Create admin panel to approve/reject
// Update UI based on status
//  EXPECTED OUTPUT
// ✔ Multi-step form works smoothly
//  ✔ Data stored with status
//  ✔ Admin can approve/reject
//  ✔ Only approved entries visible publicly
