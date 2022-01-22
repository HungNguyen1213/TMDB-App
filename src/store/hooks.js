import { Context } from "./StoreProvider";
import { useContext } from "react";

export function useStore() {
  return useContext(Context);
}
