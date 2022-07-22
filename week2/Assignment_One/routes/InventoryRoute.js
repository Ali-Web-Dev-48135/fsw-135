import express, { json } from "express";
const InventoryRouter = express.Router();
import InventoryModel from "../models/inventory.js";

InventoryRouter.get("/", (request, response, next) => {
  InventoryModel.find((error, items) => {
    if (error) {
      response.status(500);
      return next(error);
    }
    return response.status(200).send(items);
  });
})

  // Post One
  .post("/", (request, response, next) => {
    const newItem = new InventoryModel(request.body);
    newItem.save((error, saveItem) => {
      if (error) {
        response.status(500);
        return next(error);
      }
      return response.status(201).send(saveItem);
    });
  })

  .put("/:itemid", (request, response) => {
    InventoryModel.findOneAndUpdate(
      { _id: request.params.itemid },
      request.body,
      { new: true },
      (error, updatedItem) => {
        if (error) {
          response.status(500);
          return next(error);
        }
        return response.status(201).send(updatedItem);
      }
    );
  })

  .delete("/:itemId", (request, response, next) => {
    InventoryModel.findOneAndDelete(
      { _id: request.params.itemId },
      (error, deletedItem) => {
        if (error) {
          response.status(500);
          return next(error);
        }
        return response
          .status(200)
          .send(`Item ${deletedItem.title} Deleted Successfully.`);
      }
    );
  });

export default InventoryRouter;
