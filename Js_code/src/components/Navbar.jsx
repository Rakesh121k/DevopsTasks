import React from "react";

const Navbar = () => {
    return (
        <div id="nav">
            <h1 className="logo">New Mew</h1>
            <div className="navbar">
                <a href="#">sunglasses</a>
                <a href="#">frames</a>
                <a href="#">kids</a>
                <a href="#">contact lens</a>
                <a href="#">blog</a>
                <a href="#">Book Appointment</a>
            </div>
            <div className="cartbox">
                <a href="#">Sign In</a>
                <a href="#">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </a>
                <a href="#">
                    <i className="fa-solid fa-cart-shopping"></i>
                </a>
            </div>
        </div>
    );
};

export default Navbar;
