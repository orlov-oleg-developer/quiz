import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";

export const getData = (state: StateSchema) => state.data.data;
export const getIsLoading = (state: StateSchema) => state.data.isLoading;