import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> {/* link = é usado para definir o URL e acompanhar o histórico de navegação.*/}
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet /> {/* renderiza a rota atual selecionada. */}
    </>
  )
};

export default Layout;