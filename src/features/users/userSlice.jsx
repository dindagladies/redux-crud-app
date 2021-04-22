import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", name: "Dinda", email: "dinda@gmail.com"},
    { id: "2", name: "Gladis", email: "gladis@gmail.com"},
];

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        userAdded(state, action){
            state.push(action.payload);
        },
        userUpdated(state, action){
            const { id, name, email } = action.payload;
            const existingUser = state.find((user) => user.id === id);
            if(existingUser){
                existingUser.name = name;
                existingUser.email = email;
            }
        },
    },
});

export const { userAdded } = userSlice.actions;

export default userSlice.reducer;