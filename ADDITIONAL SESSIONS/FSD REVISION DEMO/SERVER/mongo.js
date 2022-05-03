import { MongoClient } from "mongodb";

// const mongoURL =
//   "mongodb+srv://ragavendiran:<password>@cluster0.vcsp8.mongodb.net";
const mongoDbName = "FSD-Revision-Demo";

const mongo = {
  db: null,
  batch: null,
  async connect() {
    const client = new MongoClient(mongoURL);
    await client.connect();
    console.log("MongoDB connection established");

    this.db = client.db(mongoDbName);
    console.log("MongoDB Selected");

    this.batch = this.db.collection("batch");
    console.log("Collections Initialized");
  },
};

export { mongo };
