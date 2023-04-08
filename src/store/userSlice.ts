import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from '../../app/store'


interface userState {
    name: String;
    email: String;
    includeTable: Boolean;
    table: Boolean;
}


const initialState: userState = {
    name: "",
    email: "",
    includeTable: false,
    table: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        openTable: (state) => {
            state.table = true;
        },
        closeTable: (state) => {
            state.table = false;
        },
        addToTable: (state) => {
            state.includeTable = true;
        },
        removeAdded: (state) => {
            state.includeTable = false;
        },
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        }, 
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        }
    },
});

export const { openTable, closeTable, addToTable, removeAdded, setEmail, setName } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default userSlice.reducer;
