import mongoose from "mongoose";
import DB from "../../../domain/dbInterface";

class DBMongoose implements DB {
  async connect() {
    try {
      if (mongoose.connections[0].readyState) {
        const res = await mongoose.connect(
          "mongodb+srv://tomasfalchini:Sopadeavestruz7@cluster0.fv06faq.mongodb.net/?retryWrites=true&w=majority"
        );
        if (res) return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  }

  async disconnect() {
    return true;
  }
}

export default DBMongoose;
