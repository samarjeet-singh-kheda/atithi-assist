function Navbar() {
  return (
    <nav className="hidden h-11 items-center gap-6 text-[#F2F2F2] sm:flex">
      {["Home", "Features", "Support", "Contact", "Blog"].map((el) => (
        <li className="list-none text-base font-semibold sm:text-lg" key={el}>
          {el}
        </li>
      ))}
    </nav>
  );
}

export default Navbar;
