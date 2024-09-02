import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./actions";

export const taskStore = configureStore({
    reducer: {
        tasks: taskSlice
    } as any,
})

export type TaskState = ReturnType<typeof taskStore.getState>
export type AppDispatch = typeof taskStore.dispatch;
