import React from "react";
import { useDispatch } from "react-redux";
import { toggleNavbar } from "actions/layout";

const Header = ({ title = "Page Title" }) => {
    const dispatch = useDispatch();

    const toogleNavbar = () => {
        return dispatch(toggleNavbar());
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid pr-5">
                <button
                    type="button"
                    id="sidebarCollapse"
                    className="btn btn-info"
                    onClick={toogleNavbar}
                >
                    <i className="fas fa-align-justify"></i>
                </button>
                <h2>{title}</h2>
            </div>
        </nav>
    );
};

export default Header;
