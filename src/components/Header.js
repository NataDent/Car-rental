import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <NavLink>Catalog</NavLink>
          <NavLink>Favorites</NavLink>
        </nav>
      </div>
    </header>
  );
};
