export interface User {
  id?: string; // Optional for creation, required for updates
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  phoneNumber?: string;
  password: string;
  
  // Timestamps (optional for creation)
  createdAt?: Date;
  updatedAt?: Date;
}
