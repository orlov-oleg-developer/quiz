import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";

export const getData = (state: StateSchema) => state.data.data;