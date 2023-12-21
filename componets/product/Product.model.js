import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  price: { 
    type: Number, 
    required: true 
  },
  stock: { 
    type: Number, 
    required: true 
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
});

const Producto = mongoose.model('Producto', productoSchema);

export default Producto;
