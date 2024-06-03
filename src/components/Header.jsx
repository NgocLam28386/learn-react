import { Link } from "react-router-dom";
export default function Header() {
    return (
      <header>
      <ul>
        <li>
          <link to="/">Home</link>
        </li>
        <li>
          <link to="/about">About</link>
        </li>
        <li>
          <link to="/products">Shop</link>
        </li>
        <li>
          <link to="/login">Login</link>
        </li>
      </ul>
    </header>
    );
  }