import type { Request, Response } from 'express';
import * as customerService from '../services/customer.service.ts';

// Create new customer
export const createCustomer = async (req: Request, res: Response) => {
  try {
    const customerData = req.body;
    const newCustomer = await customerService.createCustomer(customerData);
    
    res.status(201).json({
      success: true,
      data: newCustomer,
      message: 'Customer created successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating customer',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Get all customers
export const getCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await customerService.getAllCustomers();
    res.status(200).json({
      success: true,
      data: customers,
      message: 'Customers retrieved successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving customers',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Get customer by ID
export const getCustomerById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({
        success: false,
        message: 'Customer ID is required'
      });
      return;
    }
    
    const customer = await customerService.getCustomerById(id);
    
    if (!customer) {
      res.status(404).json({
        success: false,
        message: 'Customer not found'
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: customer,
      message: 'Customer retrieved successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving customer',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Update customer
export const updateCustomer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({
        success: false,
        message: 'Customer ID is required'
      });
      return;
    }
    
    const customerData = req.body;
    const updatedCustomer = await customerService.updateCustomer(id, customerData);
    
    if (!updatedCustomer) {
      res.status(404).json({
        success: false,
        message: 'Customer not found'
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: updatedCustomer,
      message: 'Customer updated successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating customer',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Delete customer
export const deleteCustomer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({
        success: false,
        message: 'Customer ID is required'
      });
      return;
    }
    
    const deleted = await customerService.deleteCustomer(id);
    
    if (!deleted) {
      res.status(404).json({
        success: false,
        message: 'Customer not found'
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Customer deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting customer',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};
