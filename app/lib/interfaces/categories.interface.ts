export interface Category {
  id: string; // Unique identifier for the category
  name: string; // Name of the category
  slug: string; // URL Slug
  image: string; // Banner
  description?: string; // Optional description of the category
  products?: string[]; // Array of products IDs within this category
  featured?: string[]; // Array of featured IDs products within this category
  subcategories?: string[]; // Array of subcategory IDs within this category
  created: Date; // Date when the category was created
  updated: Date; // Date when the category was last updated
}
