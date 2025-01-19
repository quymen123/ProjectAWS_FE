"use client";
import { store } from "./store";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";

persistStore(store);
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
