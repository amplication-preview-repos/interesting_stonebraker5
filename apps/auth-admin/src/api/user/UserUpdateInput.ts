import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  hashedPassword?: string | null;
  isDeleted?: boolean | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  userId?: string | null;
  username?: string;
};
