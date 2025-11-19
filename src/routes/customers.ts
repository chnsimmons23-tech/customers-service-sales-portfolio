import express from 'express';
import prisma from '../prisma';

const router = express.Router();

// List customers
router.get('/', async (_req, res) => {
  const customers = await prisma.customer.findMany();
  res.json(customers);
});

// Get customer
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const c = await prisma.customer.findUnique({ where: { id } });
  if (!c) return res.status(404).json({ error: 'Customer not found' });
  res.json(c);
});

// Create customer
router.post('/', async (req, res) => {
  const { name, email } = req.body;
  if (!name) return res.status(400).json({ error: 'name is required' });
  const customer = await prisma.customer.create({ data: { name, email } });
  res.status(201).json(customer);
});

// Update customer
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  try {
    const updated = await prisma.customer.update({
      where: { id },
      data: { name, email },
    });
    res.json(updated);
  } catch (err) {
    res.status(404).json({ error: 'Customer not found' });
  }
});

// Delete customer
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await prisma.customer.delete({ where: { id } });
    res.status(204).send();
  } catch (err) {
    res.status(404).json({ error: 'Customer not found' });
  }
});

export default router;