import logoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiUser, FiLogIn } from "react-icons/fi";

export function Header() {
  const signed = false;
  const loadingAuth = false;

  return (
    <div>
      <header>
        <Link to="/">
          <img src={logoImg} alt="logo web carros" />
        </Link>

        <Link to="/dashboard">
          <FiUser size={24} color="#000" />
        </Link>
      </header>
    </div>
  );
}
