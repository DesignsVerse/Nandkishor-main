export function formatTitleForURL(title) {
  console.log("Original Title:", title); // Log the incoming title

  const slug = title
    ?.trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s-._\u0900-\u097F]/g, "") // Keep Hindi characters along with Latin alphabet, numbers, spaces, hyphens, dots, and underscores
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Remove multiple hyphens

  console.log("Formatted Slug:", slug || "untitled"); // Log the final slug

  return slug || "untitled"; // Ensure no empty slugs
}