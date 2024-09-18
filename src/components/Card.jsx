function Card({ review }) {
  return (
    <div className="flex min-w-[25rem] flex-custom flex-col items-start gap-3 self-stretch rounded-xl border border-solid border-[#B2AB9B] p-4">
      <div className="flex w-full items-center gap-3">
        <img src={review.img} alt="user profile image" className="h-12 w-12" />

        <div className="flex h-[3.125rem] w-5/6 flex-col items-start justify-center gap-1">
          <h3 className="text-lg font-medium">{review.username}</h3>

          <p className="text-custom-black text-sm font-medium">{review.bio}</p>
        </div>

        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
        >
          <g id="Icons/twitter-fill">
            <path
              id="Vector"
              d="M25.8559 6.59858C24.9652 6.99256 24.0206 7.2513 23.0535 7.36625C24.0729 6.75659 24.8358 5.7971 25.2002 4.66658C24.2435 5.23591 23.1947 5.63491 22.1015 5.85075C21.3672 5.06509 20.3939 4.54404 19.333 4.3686C18.272 4.19316 17.1828 4.37315 16.2347 4.88061C15.2865 5.38807 14.5326 6.19455 14.0902 7.17467C13.6477 8.1548 13.5414 9.25366 13.7878 10.3004C11.8478 10.2032 9.9499 9.69902 8.21735 8.82069C6.4848 7.94235 4.95633 6.70947 3.73118 5.20208C3.29752 5.94694 3.06963 6.79368 3.07085 7.65558C3.07085 9.34725 3.93185 10.8417 5.24085 11.7167C4.46619 11.6924 3.70859 11.4832 3.03118 11.1066V11.1672C3.03142 12.2939 3.42128 13.3858 4.13467 14.2578C4.84806 15.1298 5.84108 15.7283 6.94535 15.9517C6.22623 16.1466 5.47221 16.1753 4.74035 16.0357C5.0517 17.0055 5.65852 17.8536 6.47587 18.4614C7.29322 19.0691 8.28017 19.406 9.29852 19.4249C8.28641 20.2198 7.12756 20.8074 5.88821 21.1541C4.64886 21.5008 3.35333 21.5999 2.07568 21.4456C4.306 22.8799 6.9023 23.6414 9.55402 23.6389C18.5292 23.6389 23.4374 16.2037 23.4374 9.75558C23.4374 9.54558 23.4315 9.33325 23.4222 9.12558C24.3775 8.43511 25.202 7.57977 25.857 6.59975L25.8559 6.59858Z"
              fill="#1A1A1A"
            />
          </g>
        </svg>
      </div>

      <div className="text-xl">{review.tweet}</div>
    </div>
  );
}

export default Card;
