import React from "react";
import Routes from "./Routes";
import { Link } from "react-router-dom";
const Header = () => (
    <ul className="nav">
        {Routes.map((route, i) => (
            <li key={i}>
                <Link to={route.path}>{route.name}
                </Link>
            </li>
        ))}
    </ul >
);
export default Header;