import DB from "../domain/dbInterface";

class DBconections {
  private DB: DB;
  constructor(DB: DB) {
    this.DB = DB;
  }

  async connectToDB() {
    try {
      return this.DB.connect();
    } catch (err) {
      return console.log(err);
    }
  }
  async disconnectOfDB() {
    try {
      return this.DB.disconnect();
    } catch (err) {
      return console.log(err);
    }
  }
}
