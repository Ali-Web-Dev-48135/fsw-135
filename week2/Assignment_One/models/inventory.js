import mongoose from "mongoose";
const { Schema } = mongoose;

const inventorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("InventoryModel", inventorySchema);
