function Card({ review }) {
  return (
    <div className="flex w-full max-w-sm flex-col items-start gap-3 rounded-xl border border-solid border-[#B2AB9B] p-4 sm:max-w-md md:max-w-lg lg:max-w-xl">
      <div className="flex w-full items-center gap-3">
        <img
          src={review.img}
          alt="user profile image"
          className="h-12 w-12 rounded-full object-cover"
        />

        <div className="flex w-full flex-col items-start justify-center gap-1">
          <h3 className="text-base font-medium sm:text-lg">
            {review.username}
          </h3>
          <p className="text-xs font-medium text-custom-black sm:text-sm">
            {review.bio}
          </p>
        </div>

        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
        >
          <path
            d="M25.8559 6.59858C24.9652 6.99256 24.0206 7.2513 23.0535 7.36625..."
            fill="#1A1A1A"
          />
        </svg>
      </div>

      <div className="text-sm sm:text-base md:text-lg">{review.tweet}</div>
    </div>
  );
}

export default Card;
