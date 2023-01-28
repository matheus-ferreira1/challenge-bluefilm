import { FC, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const Header: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <header className="flex justify-between items-center py-3.5 px-4 md:px-16 bg-[#182e4a] text-white">
      <h1 className="text-lg md:text-3xl font-semibold">
        <Link to="/home">BlueFilms</Link>
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-gray-500/70 py-2 px-4 rounded-md w-3/5 md:w-2/5"
      >
        <input
          placeholder="Digite um filme"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent outline-0 w-full"
        />
        <button type="submit">
          <IoIosSearch size={25} />
        </button>
      </form>
    </header>
  );
};

export default Header;
