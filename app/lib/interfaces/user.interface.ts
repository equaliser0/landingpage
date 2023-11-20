export interface User {
  id: string;
  created: Date;
  updated: Date;
  roles: string[]; // Array of roles, e.g., ['user', 'client', 'admin']
  username: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  image?: string;
  dateOfBirth?: Date; // You can use a Date type for date values
  bio?: string;
  // socialMediaLinks?: {
  //   facebook: string;
  //   twitter: string;
  //   linkedin: string;
  //   instagram: string;
  //   github: string;
  // };
  // Password information
  password: string;
  // password: { // TODO
  //   hash: string; // Encrypted password hash
  //   salt: string; // Password salt for added security
  // };
  // Add other user properties as needed
}
