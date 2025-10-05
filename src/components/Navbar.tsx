import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = ["Images", "Document", "Archive", "Video", "Audio"];

  return (
    <nav className="sticky top-0 bg-white flex justify-between items-center px-4 md:px-8 py-2">
      <h1 className="text-4xl md:text-5xl font-aclonica">C</h1>

      <ul className="flex gap-2 items-center mx-auto">
        {menuItems.map((item) => (
          <Link
            to={`/${item}`}
            key={item}
            className="border font-montserrat text-[8px] md:text-base border-black px-2 md:px-5 py-1 rounded-full cursor-pointer 
                       transition-all duration-200 hover:bg-black hover:text-white 
                       hover:-translate-y-[2px]"
          >
            {item}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
