import UserRepository from "../../domain/User/UserRepository";

class UsersServices {
  private UserDB: UserRepository;
  constructor(UserDB: UserRepository) {
    this.UserDB = UserDB;
  }

  async logIn() {
    try {
      return this.UserDB.logIn();
    } catch (err) {
      return console.log(err);
    }
  }

  async logOut() {
    try {
      return this.UserDB.logOut();
    } catch (err) {
      return console.log(err);
    }
  }

  async getProfile(id: string) {
    try {
      return this.UserDB.getProfile(id);
    } catch (err) {
      return console.log(err);
    }
  }

  async updateProfile(id: string, ...data: string[]) {
    try {
      return this.UserDB.changeProfile(id, ...data);
    } catch (err) {
      return console.log(err);
    }
  }
}

export default UsersServices;
