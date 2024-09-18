function Navbar() {
  return (
    <nav className="flex h-11 flex-custom items-center gap-6 text-[#F2F2F2]">
      {["Home", "Features", "Support", "Contact", "Blog"].map((el) => (
        <li className="list-none text-lg font-semibold" key={el}>
          {el}
        </li>
      ))}
    </nav>
  );
}

export default Navbar;
