function Navbar() {
  return (
    <nav className="flex h-11 flex-custom items-center text-[#F2F2F2]">
      {["Home", "Features", "Support", "Contact", "Blog"].map((el) => (
        <li className="text-sm font-semibold leading-[1.375rem]" key={el}>
          {el}
        </li>
      ))}
    </nav>
  );
}

export default Navbar;
