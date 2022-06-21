import { NavLink } from "react-router-dom";

/** Render to create new employee page
 * @function NavLink
 * @param {string} linkTo
 * @param {string} text
 * @returns {JSX}
 */

export default function Nav({ linkTo, text }) {

    let activeStyle = { textDecoration: "underline" };

    return(
        <div>
            <NavLink
            to={linkTo}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="nav">
                {text}
            </NavLink>
        </div>
    )
}