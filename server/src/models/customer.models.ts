export interface Customer {
  id?: string; // Optional for creation, required for updates
  // Profile section
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  phoneNumber?: string;  
  // Shipping section
  shippingFirstName?: string;
  shippingLastName?: string;
  shippingPhone?: string;
  address?: string;
  city?: string;
  
  // Timestamps (optional for creation)
  createdAt?: Date;
  updatedAt?: Date;
}