export interface Client {
  id: string;
  isUser: boolean;
  created: Date;
  updated: Date;
  title?: string;
  firstname: string;
  lastname: string;
  email: string;
  orders: string[];
  phone?: string;
  street?: string;
  number?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  // Add other client properties as needed
}
