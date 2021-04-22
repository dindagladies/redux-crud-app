import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function UserList(){
    const users = useSelector((state) => state.users);
    return (
        <div className="container">
            {/* title */}
            <div className="row">
                <h1>Redux CRUD User App</h1>
            </div>
            {/* menu */}
            <div className="row">
                <div className="two columns">
                    <button className="button-primary">Load Users</button>
                </div>
                <div className="two columns">
                    <Link to="/add-user">
                        <button className="button-primary">Add Users</button>
                    </Link>
                </div>
            </div>
            {/* content */}
            <div className="row">
                <table class="u-full-width">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(({ id, name, email}, i) => (
                            <tr>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>
                                    <button>Delete</button>
                                    <Link to={`/edit-user/${id}`}>
                                        <button>Edit</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}