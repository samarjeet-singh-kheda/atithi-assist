import Button from "./Button";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="flex w-full flex-col items-center gap-16 bg-[#7C4032]">
      <div className="flex h-[4.25rem] items-center justify-between self-stretch px-6 py-0">
        <div className="flex flex-custom items-center gap-[0.625rem]">
          <svg
            height="32"
            width="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 0C19.6819 0 22.6667 2.98477 22.6667 6.66667H9.33331C9.33331 2.98477 12.3181 0 16 0Z"
              fill="#1A1A1A"
            />
            <path
              d="M8 16C8 11.5817 11.5817 8 16 8C20.4183 8 24 11.5817 24 16C24 20.4183 20.4183 24 16 24C11.5817 24 8 20.4183 8 16Z"
              fill="#1A1A1A"
            />
            <path
              d="M6.66667 9.33331C2.98477 9.33331 0 12.3181 0 16C0 19.6819 2.98477 22.6667 6.66667 22.6667V9.33331Z"
              fill="#1A1A1A"
            />
            <path
              d="M32 16C32 19.6819 29.0152 22.6667 25.3333 22.6667V9.33331C29.0152 9.33331 32 12.3181 32 16Z"
              fill="#1A1A1A"
            />
            <path
              d="M9.33331 25.3333C9.33331 29.0152 12.3181 32 16 32C19.6819 32 22.6667 29.0152 22.6667 25.3333H9.33331Z"
              fill="#1A1A1A"
            />
            <path
              d="M25.3333 2.66669C27.5425 2.66669 29.3333 4.45755 29.3333 6.66669H25.3333V2.66669Z"
              fill="#1A1A1A"
            />
            <path
              d="M25.3333 29.3333C27.5425 29.3333 29.3333 27.5425 29.3333 25.3333H25.3333V29.3333Z"
              fill="#1A1A1A"
            />
            <path
              d="M2.66669 6.66669C2.66669 4.45755 4.45755 2.66669 6.66669 2.66669V6.66669H2.66669Z"
              fill="#1A1A1A"
            />
            <path
              d="M2.66669 25.3333C2.66669 27.5425 4.45755 29.3333 6.66669 29.3333V25.3333H2.66669Z"
              fill="#1A1A1A"
            />
          </svg>

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
        <svg
          height="32"
          width="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 0C19.6819 0 22.6667 2.98477 22.6667 6.66667H9.33331C9.33331 2.98477 12.3181 0 16 0Z"
            fill="#1A1A1A"
          />
          <path
            d="M8 16C8 11.5817 11.5817 8 16 8C20.4183 8 24 11.5817 24 16C24 20.4183 20.4183 24 16 24C11.5817 24 8 20.4183 8 16Z"
            fill="#1A1A1A"
          />
          <path
            d="M6.66667 9.33331C2.98477 9.33331 0 12.3181 0 16C0 19.6819 2.98477 22.6667 6.66667 22.6667V9.33331Z"
            fill="#1A1A1A"
          />
          <path
            d="M32 16C32 19.6819 29.0152 22.6667 25.3333 22.6667V9.33331C29.0152 9.33331 32 12.3181 32 16Z"
            fill="#1A1A1A"
          />
          <path
            d="M9.33331 25.3333C9.33331 29.0152 12.3181 32 16 32C19.6819 32 22.6667 29.0152 22.6667 25.3333H9.33331Z"
            fill="#1A1A1A"
          />
          <path
            d="M25.3333 2.66669C27.5425 2.66669 29.3333 4.45755 29.3333 6.66669H25.3333V2.66669Z"
            fill="#1A1A1A"
          />
          <path
            d="M25.3333 29.3333C27.5425 29.3333 29.3333 27.5425 29.3333 25.3333H25.3333V29.3333Z"
            fill="#1A1A1A"
          />
          <path
            d="M2.66669 6.66669C2.66669 4.45755 4.45755 2.66669 6.66669 2.66669V6.66669H2.66669Z"
            fill="#1A1A1A"
          />
          <path
            d="M2.66669 25.3333C2.66669 27.5425 4.45755 29.3333 6.66669 29.3333V25.3333H2.66669Z"
            fill="#1A1A1A"
          />
        </svg>

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
          <Button variant="brown"> Discover More</Button>
          <Button variant="yellow"> Book Your Adventure</Button>
        </div>
      </section>

      <img
        src="img-hero.png"
        alt="Photo of a van in desert"
        className="h-fit w-fit"
      />
    </header>
  );
}

export default Header;
