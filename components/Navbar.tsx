import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link href="/">Fun For Kids</Link>
      </div>
      <div className="routing">
        <ul className="nav-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/cards">Cards</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li className="search-bar-container">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
            <input type="text" placeholder="Search..." id="search-bar" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
