// not sure if service will have access to actual user objects
import { MockUsers } from "./mock-data/MockUsers";

export interface ActiveUser {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
}

export interface User extends ActiveUser {
  password: string;
}

class ActiveUserError {
  constructor(public message: string) {}
}

export async function getUserById(userId: number): Promise<ActiveUser> {
  const user = MockUsers.get(userId);
  if (!user) throw new ActiveUserError("user not found");

  return {
    id: user.id,
    username: user.username,
    firstname: user.firstname,
    lastname:user.lastname
  }
}