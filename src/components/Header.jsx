import Navbar from "./Navbar";

function Header() {
  return (
    <header className="flex w-full flex-col items-center gap-16 bg-[#7C4032]">
      <div className="flex h-[4.25rem] items-center justify-between self-stretch px-6 py-0">
        <div className="flex flex-custom items-center gap-[0.625rem]">
          <img src="logo.svg" alt="Atithi Assist Logo" className="h-8 w-8" />

          {/* NAV */}
          <Navbar />
        </div>

        <div className="my- flex items-end justify-end gap-4">
          <button className="flex h-11 items-center justify-center rounded-xl px-4 py-0 font-semibold text-[#F2F2F2]">
            Sign in
          </button>

          <button className="flex h-11 items-center justify-center rounded-xl border border-solid border-[#F3CE5E] bg-[#F3CE5E] px-4 py-0 font-semibold text-black">
            Get Started
          </button>
        </div>
      </div>

      <section className="flex min-w-[31.5rem] flex-col items-center gap-11 self-stretch pt-8">
        <img src="logo.svg" alt="" className="h-11 w-11" />

        <div className="flex flex-col items-center gap-3 self-stretch pt-8">
          <h1 className="text-[3rem] font-bold leading-[4rem] text-white">
            Welcome to Atithi Assist!
          </h1>
          <p className="text-center text-xl font-normal leading-8 text-white">
            Your multilingual AI-powered travel companion for seamless ticket
            <br />
            booking.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <button className="flex h-11 items-center justify-center gap-3 rounded-xl border border-solid border-[#572D23] bg-[#7B3F32] px-4 py-0 text-lg font-semibold leading-7 text-white">
            Discover More
          </button>

          <button className="flex h-11 items-center justify-center gap-3 rounded-xl border border-solid border-[#F3CE5E] bg-[#F3CE5E] px-4 py-0 text-lg font-semibold leading-7 text-black">
            Book Your Adventure
          </button>
        </div>
      </section>

      <img src="image.png" alt="" className="h-fit w-fit" />
    </header>
  );
}

export default Header;
