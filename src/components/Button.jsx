function Button({ children, variant }) {
  const base =
    "h-11 rounded-xl px-4 py-0 text-center text-lg font-semibold leading-7 transition-all duration-300 whitespace-nowrap overflow-hidden text-ellipsis";

  const style = {
    yellow:
      base +
      " border border-solid border-[#F3CE5E] text-black bg-[#F3CE5E] hover:bg-opacity-80 hover:border-opacity-80",
    brown:
      base +
      " border border-solid border-[#572D23] text-white bg-[#7B3F32] hover:bg-opacity-90 hover:border-opacity-90",
    skin:
      base +
      " border border-solid border-[#B2AB9B] text-black bg-[#FEF4DE] hover:bg-[#B2AB9B] hover:text-white",
  };

  return <button className={style[variant]}>{children}</button>;
}

export default Button;
