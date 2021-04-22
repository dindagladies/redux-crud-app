import { useDispatch, userSelector, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-redux";

import { useState } from "react";
import { userUpdated } from "./userSlice";

export function EditUser(){
    const { pathme } = useLocation();
    const userId  = pathme.replace("/edit-user/", "");

    const user = useSelector((state) =>
        state.users.find((user) => user.id === userId)
    );

    const dispatch = useDispatch();
    const history = useHistory();

    const handleName = (e) => setName(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);

    const handleClick = () => {
        if(name && email){
            
        }
    }
}