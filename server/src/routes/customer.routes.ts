import { Router } from 'express';
import * as customerController from '../controllers/customer.controller.ts';

const router = Router();

// POST /api/customers - Create new customer
router.post('/', customerController.createCustomer);

// GET /api/customers - Get all customers
router.get('/', customerController.getCustomers);

// GET /api/customers/:id - Get customer by ID
router.get('/:id', customerController.getCustomerById);

// PUT /api/customers/:id - Update customer
router.put('/:id', customerController.updateCustomer);

// DELETE /api/customers/:id - Delete customer
router.delete('/:id', customerController.deleteCustomer);

export default router;
