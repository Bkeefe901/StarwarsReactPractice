import { Link } from "react-router-dom";

export default function NavBar(){

    return (
        <nav width={'100%'}>
            <ul>
                <Link to={'/'}>
                    <li>Home</li>
                </Link>
                <Link to={'/people'}>
                    <li>People</li>
                </Link>
                <Link to={'/starships'}>
                    <li>Starships</li>
                </Link>
                <Link to={'/planets'}>
                    <li>Planets</li>
                </Link>
            </ul>
        </nav>
    )
}