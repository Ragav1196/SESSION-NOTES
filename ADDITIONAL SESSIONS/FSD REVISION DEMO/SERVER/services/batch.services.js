import { ObjectId } from "mongodb";
import { mongo as db } from "../mongo.js";

const service = {
  async getBatch(req, res) {
    try {
      const data = await db.batch.find().toArray();
      console.log("Batch fetched");
      res.json({ status: "success", data });
    } catch (error) {
      console.log("Error fetching batch", error);
      res.json({ status: "error", error: "Cannot fetch batch data" });
    } 
  },

  async addBatch(req, res) {
    try {
      const { insertedId: _id } = await db.batch.insertOne(req.body);
      console.log("Batch Inserted", _id, req.body);
      res.json({
        status: "success",
        data: {
          _id,
          ...req.body /*  4(1) -> "..." is used because we are not assigning value using keys */,
        },
      });
    } catch (error) {
      console.log("Error inserting batch", error);
      res.json({ status: "error", error: "Cannot insert batch data" });
    }
  },

  async updateBatch(req, res) {
    try {
      const { value } = await db.batch.findOneAndUpdate(
        /* 3 -> To get the updated data */ { _id: ObjectId(req.params.id) },
        { $set: { ...req.body } },
        {
          returnDocument:
            "after" /* 3 -> to get the data only after updating the resource. this is an syntax for 
            older version mongo. in new version(version - 5) we need to use 
            "returnNewDocument: "true" */,
        } /* this third parameter is called options parameter */
      );
      console.log("Batch Updated", req.params.id, req.body);
      res.json({ status: "success", data: value });
    } catch (error) {
      console.log("Error updating batch", error);
      res.json({ status: "error", error: "Cannot update batch" });
    }
  },

  async deleteBatch(req, res) {
    try {
      await db.batch.deleteOne({ _id: ObjectId(req.params.id) });
      console.log("Batch Deleted", req.params.id);
      res.json({ status: "success" });
    } catch (error) {
      console.log("Error deleting batch", error);
      res.json({ status: "error", error: "Cannot delete batch" });
    }
  },
};

export { service };
