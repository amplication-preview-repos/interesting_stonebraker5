import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  hashedPassword: string | null;
  id: string;
  isDeleted: boolean | null;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  userId: string | null;
  username: string;
};
