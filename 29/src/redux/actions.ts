import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task, TaskData } from "../features/Task/interfaces";


const initialState: TaskData = {
    tasks: [],
}

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addData: (store, action: PayloadAction<Task[]>) => {             
            action.payload.forEach((task: Task) => store.tasks.push(task));
        },
        updateData: (store, action: PayloadAction<Task>) => {

            const sendData = action.payload;

        },
        createTask: (store, action: PayloadAction<Task>) => {
            store.tasks.push(action.payload)
        }
    }
})


export const {addData, updateData, createTask} = taskSlice.actions;
export default taskSlice.reducer as {};