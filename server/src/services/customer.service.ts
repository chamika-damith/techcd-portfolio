import { PrismaClient } from '@prisma/client';
// import {Customer} from '../models/customer.models.ts';

interface Customer {
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

const prisma = new PrismaClient();

// Create new customer
export const createCustomer = async (customerData: Customer) => {
  try {
    console.log('=== SERVICE: CREATE CUSTOMER START ===');
    console.log('Service: Customer data received:', customerData);
    
    console.log('Service: Attempting to create customer in database...');
    const customer = await prisma.customer.create({
      data: customerData
    });
    console.log('Service: Customer created successfully in database:', customer);

    const { password, ...customerWithoutPassword } = customer as any;
    console.log('Service: Returning customer without password:', customerWithoutPassword);
    console.log('=== SERVICE: CREATE CUSTOMER SUCCESS ===');
    
    return customerWithoutPassword;
  } catch (error) {
    console.error('=== SERVICE: CREATE CUSTOMER ERROR ===');
    console.error('Service: Full error object:', error);
    console.error('Service: Error name:', error instanceof Error ? error.name : 'Unknown');
    console.error('Service: Error message:', error instanceof Error ? error.message : 'Unknown error');
    console.error('Service: Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    
    throw new Error(`Failed to create customer: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

// Get all customers
export const getAllCustomers = async () => {
  try {
    const customers = await prisma.customer.findMany();
    
    return customers.map((customer: any) => {
      const { password, ...customerWithoutPassword } = customer;
      return customerWithoutPassword;
    });
  } catch (error) {
    throw new Error(`Failed to fetch customers: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

// Get customer by ID
export const getCustomerById = async (id: string) => {
  try {
    const customer = await prisma.customer.findUnique({ 
      where: { id } 
    });
    
    if (!customer) return null;

    const { password, ...customerWithoutPassword } = customer as any;
    return customerWithoutPassword;
  } catch (error) {
    throw new Error(`Failed to fetch customer: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

// Update customer
export const updateCustomer = async (id: string, customerData: Customer) => {
  try {
    const updatedCustomer = await prisma.customer.update({
      where: { id },
      data: customerData
    });

    const { password, ...customerWithoutPassword } = updatedCustomer as any;
    return customerWithoutPassword;
  } catch (error) {
    throw new Error(`Failed to update customer: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

// Delete customer
export const deleteCustomer = async (id: string) => {
  try {
    await prisma.customer.delete({ 
      where: { id } 
    });
    return true;
  } catch (error) {
    throw new Error(`Failed to delete customer: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};
