export interface Subcategory {
  id: string; // Unique identifier for the subcategory
  parent: string; // parent category slug for the subcategory
  name: string; // Name of the subcategory
  slug: string; // URL Subcategory Slug
  image: string; // Banner
  description?: string; // Optional description of the subcategory
  products?: string[]; // Array of products IDs within this subcategory
  featured?: string[]; // Array of featured IDs products within this subcategory
  created: Date; // Date when the subcategory was created
  updated: Date; // Date when the subcategory was last updated
}
