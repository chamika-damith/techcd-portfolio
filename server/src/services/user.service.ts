import { PrismaClient } from '@prisma/client';

interface User {
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

const prisma = new PrismaClient();

// Create new user
export const createUser = async (userData: User) => {
  try {
    const user = await prisma.user.create({
      data: userData
    });

    const { password, ...userWithoutPassword } = user as any;
    return userWithoutPassword;
  } catch (error) {
    throw new Error(`Failed to create user: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

// Get all users
export const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    
    return users.map((user: any) => {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });
  } catch (error) {
    throw new Error(`Failed to fetch users: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

// Get user by ID
export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({ 
      where: { id } 
    });
    
    if (!user) return null;

    const { password, ...userWithoutPassword } = user as any;
    return userWithoutPassword;
  } catch (error) {
    throw new Error(`Failed to fetch user: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

// Update user
export const updateUser = async (id: string, userData: User) => {
  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: userData
    });

    const { password, ...userWithoutPassword } = updatedUser as any;
    return userWithoutPassword;
  } catch (error) {
    throw new Error(`Failed to update user: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

// Delete user
export const deleteUser = async (id: string) => {
  try {
    await prisma.user.delete({ 
      where: { id } 
    });
    return true;
  } catch (error) {
    throw new Error(`Failed to delete user: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};
