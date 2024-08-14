import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  hashedPassword?: StringNullableFilter;
  id?: StringFilter;
  isDeleted?: BooleanNullableFilter;
  lastName?: StringNullableFilter;
  userId?: StringNullableFilter;
  username?: StringFilter;
};
