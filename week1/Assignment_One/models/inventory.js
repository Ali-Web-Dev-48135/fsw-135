import mongoose from "mongoose";
const { Schema } = mongoose;

const inventorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  material: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("InventoryModel", inventorySchema);
