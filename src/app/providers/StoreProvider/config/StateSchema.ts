import { DataSchema } from "@/entities/Data/model/types/dataSchema";
import { UserSchema } from "@/entities/User/model/types/userSchema";

export interface StateSchema {
    data: DataSchema,
    user: UserSchema
}

