import { FC, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  return (
    <header className="flex justify-between items-center py-4 px-2">
      <Link to="/home">
        <h1>BlueFilms</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </form>
    </header>
  );
};

export default Header;
