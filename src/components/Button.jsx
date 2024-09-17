function Button({ children, variant }) {
  const base =
    "h-11 rounded-xl  px-4 py-0 text-center text-lg font-semibold leading-7";

  const style = {
    yellow:
      base + "border border-solid border-[#F3CE5E] text-black bg-[#F3CE5E]",
    brown:
      base + "border border-solid border-[#572D23] text-white bg-[#7B3F32]",
  };

  return <button className={style[variant]}>{children}</button>;
}

export default Button;
