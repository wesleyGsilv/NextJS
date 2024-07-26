import { Link } from "react-router-dom";
export default function Header() {
    return (
        <header>
        <h1>Header</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aula2">Aula 2</Link></li>
        </ul>
        </header>
    );
}