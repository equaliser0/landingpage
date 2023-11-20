export interface Product {
  id: string; // Unique product identifier
  created: Date;
  updated: Date;
  brand?: string; // Brand name
  name: string; // Product name
  slug: string; // URL Slug
  images?: any[];
  quantity?: number;
  description?: string;
  comments?: string;
  propertyName?: string; // Property name
  propertyValue?: string; // Property value
  variant?: string; // Product color
  variants?: string[]; // Product color
  properties?: string[]; // Additional product properties (you can adjust the data type)
  shippingWeight?: number;
  boughtPrice?: number; // Product price
  sellingPrice?: number; // Product price
  account?: string; // Product account or category
  tax?: number; // Tax percentage (e.g., 0.2 for 20% tax)
  EAN?: string; // European Article Number (EAN) or barcode
  featured?: boolean; // Is the product featured or not
  similarProducts?: string[] // Product IDs of similar products
}
