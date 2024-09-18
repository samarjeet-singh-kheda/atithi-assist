function Footer() {
  return (
    <footer className="flex w-full flex-col items-start bg-[#303030] p-10 pt-0 text-[#E6E6E6]">
      <div className="flex flex-wrap content-end items-end gap-x-0 gap-y-4 self-stretch pt-12">
        <div className="flex flex-custom flex-col items-start justify-center gap-4">
          <div className="flex items-center gap-2 self-stretch">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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
                d="M6.66667 9.3335C2.98477 9.3335 0 12.3183 0 16.0002C0 19.6821 2.98477 22.6669 6.66667 22.6669V9.3335Z"
                fill="#1A1A1A"
              />
              <path
                d="M32 16.0002C32 19.6821 29.0152 22.6669 25.3333 22.6669V9.3335C29.0152 9.3335 32 12.3183 32 16.0002Z"
                fill="#1A1A1A"
              />
              <path
                d="M9.33331 25.3335C9.33331 29.0154 12.3181 32.0002 16 32.0002C19.6819 32.0002 22.6667 29.0154 22.6667 25.3335H9.33331Z"
                fill="#1A1A1A"
              />
              <path
                d="M25.3333 2.6665C27.5425 2.6665 29.3333 4.45736 29.3333 6.6665H25.3333V2.6665Z"
                fill="#1A1A1A"
              />
              <path
                d="M25.3333 29.3335C27.5425 29.3335 29.3333 27.5427 29.3333 25.3335H25.3333V29.3335Z"
                fill="#1A1A1A"
              />
              <path
                d="M2.66669 6.6665C2.66669 4.45736 4.45755 2.6665 6.66669 2.6665V6.6665H2.66669Z"
                fill="#1A1A1A"
              />
              <path
                d="M2.66669 25.3335C2.66669 27.5427 4.45755 29.3335 6.66669 29.3335V25.3335H2.66669Z"
                fill="#1A1A1A"
              />
            </svg>

            <span className="text-base font-bold leading-6">
              Atithi Assist - Your Travel Buddy
            </span>
          </div>

          <div className="font-medium leading-7 text-footer-black">
            &copy; 2023 Atithi Asist. All Rights Reserved.
          </div>
        </div>

        <div className="flex flex-wrap content-center items-center gap-x-7 gap-y-4">
          {[
            "Privacy Policy",
            "Terms of Service",
            "Help Center",
            "Careers",
            "Feedback",
          ].map((el) => (
            <li
              className="list-none text-base font-semibold leading-6 text-[#f2f2f2]"
              key={el}
            >
              {el}
            </li>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
