import { Link, useMatch, useResolvedPath } from "react-router-dom";
import FlatifyLogo from "./FlatifyLogo.jpg";

function Navbar () {
    return <nav className="nav">
        <Link to="/" className="site-title">Flatify</Link>
        <img className="logo" src={FlatifyLogo} />
        <ul>
            <CustomLink to="/About">About</CustomLink>
            <CustomLink to="/Music">Music</CustomLink>
            <CustomLink to="/SavedMusic">Saved Music</CustomLink>
        </ul>
    </nav>
};

function CustomLink({ to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive === to ? "active" : ""}>
            <Link to={to}>{children}</Link>
        </li>
    )
}

export default Navbar;