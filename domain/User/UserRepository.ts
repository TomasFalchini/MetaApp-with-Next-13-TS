import User from "./UserEntity";

export default interface UserRepository {
  logIn: () => void;
  logOut: () => void;
  changeProfile: (id: string, ...data: string[]) => void;
  getProfile: (id: string) => User;
}
