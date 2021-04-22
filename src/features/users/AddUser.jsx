import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userAdded } from "./userSlice";
import { useState } from "react";
// userState() adalah state Hook
// Hook adalah fitur react dengan menggunakan state dan fitur react lainnya tanpa menuliskan sebuah kelas

export function AddUser(){
    const dispatch = useDispatch();
    const history = useHistory();

    // mendeklarasikan variabel state baru, yaitu name dan email
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = userState(null);

    const handleName = (e) => setName(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);

    const userAmount = userSelector((state) => state.users.length);

    const handleClick = () => {
        if(name && email){
            dispatch(
                userAdded({
                    id: usersAmount + 1,
                    name,
                    email,
                })
            );

            setError(null);
            history.push("/");
        }else{
            setError("Fill in all fields");
        }

        setName("");
        setEmail();
    };

    return (
        <div className="container">
            <div className="row">
                <h1>Add User</h1>
            </div>
            <div className="row">
                <div className="three columns">
                    {/* name */}
                    <label for="nameInput">
                        Name
                    </label>
                    <input
                        className="u-full-width"
                        type="text"
                        placeholder="test@gmail.com"
                        id="nameInput"
                        onChange={handleName}
                        value={name}
                    />
                    {/* email */}
                    <label for="nameInput">
                        Email
                    </label>
                    <input 
                        className="u-full-width"
                        type="email"
                        placeholder="test@gmail.com"
                        id="emailInput"
                        onChange={handleEmail}
                        value={email}
                    />
                    {error && error}
                    <button className="button-primary">Add User</button>
                </div>
            </div>
        </div>
    );
}