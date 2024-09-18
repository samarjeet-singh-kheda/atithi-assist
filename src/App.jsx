import Header from "./components/Header";
import Button from "./components/Button";
import Carousel from "./components/Carousel";
import reviews from "./data/userReviews";
import Card from "./components/Card";

export default function App() {
  return (
    <>
      <Header />

      <main>
        {/**
         *    VISION SECTION
         *
         */}
        <section className="flex flex-wrap content-center items-center gap-x-16 gap-y-11 p-16">
          <div className="flex flex-custom flex-col items-start gap-8">
            <div className="flex flex-col items-start gap-3 self-stretch text-black">
              <h2 className="text-3xl font-bold leading-[2.625rem]">
                Unlock Your Adventure with Atithi Assist!
              </h2>

              <p className="text-lg font-normal leading-7">
                Experience seamless ticket booking and personalized visits with
                our AI-powered multilingual chatbot, guiding you every step of
                the way.
              </p>

              <Button variant="yellow">Open Atithi Bot</Button>
            </div>
          </div>

          <img
            src="open-img.jpeg"
            alt="Photo of a man showing smartphone"
            className="w-[34rem] border border-solid border-[#B2AB9B]"
          />
        </section>

        {/**
         *     CAROUSEL 1
         *
         */}
        <section className="flex flex-col items-center gap-16 px-0 py-16">
          <div className="flex flex-col items-center justify-end gap-4 self-stretch px-16 py-0">
            <span className="text text-lg leading-7">
              Experience the Future of Ticket Booking with Atithi Assist!
            </span>

            <h2 className="text-[1.875rem] font-bold leading-[2.625rem]">
              Explore Cultural Treasures with Ease
            </h2>
          </div>
          <Carousel />
        </section>

        {/**
         *     CAROUSEL 2
         *
         */}
        <section className="flex flex-col items-center gap-16 px-0 py-16">
          <div className="flex flex-col items-center justify-end gap-4 self-stretch px-16 py-0">
            <span className="text text-lg leading-7">
              Your Multilingual Travel Companion Awaits!
            </span>

            <h2 className="text-[1.875rem] font-bold leading-[2.625rem]">
              Seamless Voice Booking in Any Language
            </h2>
          </div>
          <Carousel />
        </section>

        {/**
         *    FEATURE SECTION
         *
         */}
        <section className="flex flex-wrap content-center items-center gap-x-16 gap-y-11 p-16">
          <div className="flex flex-custom flex-col items-start gap-11">
            <h2 className="text-[1.875rem] font-bold leading-[2.625rem]">
              Explore Our Smart Ticketing Features
            </h2>

            <div className="flex flex-col items-start gap-5 self-stretch">
              <svg
                height="44"
                width="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="43"
                  height="43"
                  rx="11.5"
                  fill="#FEF4DE"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="43"
                  height="43"
                  rx="11.5"
                  stroke="#B2AB9B"
                />
                <g clipPath="url(#clip0_1_193)">
                  <mask
                    id="mask0_1_193"
                    // style="mask-type:luminance"
                    maskUnits="userSpaceOnUse"
                    x="10"
                    y="10"
                    width="24"
                    height="24"
                  >
                    <path d="M34 10H10V34H34V10Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_1_193)">
                    <path
                      d="M27.9102 12.5525C27.9102 12.3025 27.7402 12.0845 27.4979 12.0239L27.1996 11.9492C26.9007 11.8744 26.6278 11.7197 26.41 11.5017C26.1921 11.2836 26.0376 11.0104 25.9629 10.7113L25.8883 10.413C25.8277 10.1703 25.6099 10 25.36 10C25.1103 10 24.8926 10.17 24.8318 10.4124L24.7567 10.7113C24.6821 11.0103 24.5277 11.2835 24.31 11.5015C24.0923 11.7195 23.8196 11.8743 23.5209 11.9492L23.2226 12.0239C22.9803 12.0845 22.8103 12.3025 22.8103 12.5525C22.8103 12.8025 22.9803 13.0204 23.2226 13.0811L23.5209 13.1557C23.8197 13.2305 24.0927 13.3852 24.3105 13.6033C24.5283 13.8213 24.6829 14.0945 24.7576 14.3937L24.8322 14.6922C24.8927 14.9348 25.1105 15.1049 25.3602 15.1049C25.61 15.1049 25.8277 14.9348 25.8883 14.6922L25.9629 14.3937C26.0376 14.0945 26.1921 13.8213 26.41 13.6033C26.6278 13.3852 26.9007 13.2305 27.1996 13.1557L27.4979 13.0811C27.7402 13.0204 27.9102 12.8025 27.9102 12.5525Z"
                      fill="#1A1A1A"
                    />
                    <path
                      d="M34 17.5C34 17.1572 33.7667 16.8583 33.4341 16.7752L33.0247 16.6728C32.6145 16.5703 32.2399 16.3581 31.9409 16.0591C31.6419 15.7602 31.4298 15.3855 31.3272 14.9753L31.2248 14.5659C31.1417 14.2333 30.8428 14 30.5 14C30.1572 14 29.8584 14.2333 29.7752 14.5659L29.6728 14.9753C29.5703 15.3855 29.3581 15.7602 29.0591 16.0591C28.7602 16.3581 28.3855 16.5703 27.9753 16.6728L27.5659 16.7752C27.2333 16.8583 27 17.1572 27 17.5C27 17.8428 27.2333 18.1417 27.5659 18.2248L27.9753 18.3272C28.3855 18.4298 28.7602 18.6419 29.0591 18.9409C29.3581 19.2399 29.5703 19.6145 29.6728 20.0247L29.7752 20.4341C29.8584 20.7667 30.1572 21 30.5 21C30.8428 21 31.1417 20.7667 31.2248 20.4341L31.3272 20.0247C31.4298 19.6145 31.6419 19.2399 31.9409 18.9409C32.2399 18.6419 32.6145 18.4298 33.0247 18.3272L33.4341 18.2248C33.7667 18.1417 34 17.8428 34 17.5Z"
                      fill="#1A1A1A"
                    />
                    <path
                      d="M19.7135 14.5138C19.9838 13.8287 21.017 13.8287 21.2873 14.5138L23.2371 19.6693C23.322 19.8847 23.5031 20.6172 23.7328 20.6969L28.4521 22.7758C29.1826 23.0293 29.1826 23.9982 28.4521 24.2517L23.7328 25.8346C23.5031 25.9143 23.322 26.6468 23.2371 26.8622L21.2873 31.4862C21.017 32.1713 19.9838 32.1713 19.7135 31.4862L17.7637 26.8622C17.6788 26.6468 17.4977 25.9143 17.268 25.8346L12.5479 24.2517C11.8174 23.9982 11.8174 23.0293 12.5479 22.7758L17.268 20.6969C17.4977 20.6172 17.6788 19.8847 17.7637 19.6693L19.7135 14.5138Z"
                      fill="#1A1A1A"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1_193">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(10 10)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <div className="flex flex-col items-start gap-[0.625rem] self-stretch">
                <h3 className="text-lg font-semibold">Voice Booking</h3>

                <p className="text-base">
                  Easily book your tickets using our advanced AI-powered voice
                  recognition in multiple languages.
                </p>
              </div>

              <button className="text-lg font-semibold text-[#F3CE5E]">
                Discover Voice Booking
              </button>
            </div>

            <div className="flex flex-col items-start gap-5 self-stretch">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="43"
                  height="43"
                  rx="11.5"
                  fill="#FEF4DE"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="43"
                  height="43"
                  rx="11.5"
                  stroke="#B2AB9B"
                />

                <path
                  d="M18.9831 11.7253C18.9595 11.6232 18.9108 11.5285 18.8414 11.4498C18.772 11.371 18.6841 11.3107 18.5855 11.274L14.0043 10.5642L15.1655 3.76193C15.1922 3.62752 15.1749 3.48814 15.1162 3.36421C15.0576 3.24027 14.9605 3.13831 14.8394 3.07325C14.717 3.00848 14.5766 2.98578 14.44 3.00869C14.3033 3.03159 14.1781 3.09882 14.0838 3.1999L5.17593 12.6989C5.10294 12.7743 5.05012 12.8667 5.02233 12.9676C4.99454 13.0686 4.99266 13.1749 5.01686 13.2768C5.04176 13.3783 5.09091 13.4723 5.16015 13.5508C5.22938 13.6294 5.31665 13.6902 5.41453 13.728L9.99573 14.4378L8.83452 21.2401C8.80782 21.3745 8.82507 21.5139 8.88375 21.6378C8.94244 21.7617 9.03946 21.8637 9.16061 21.9288C9.25193 21.9746 9.35261 21.999 9.45489 22C9.54132 22.0004 9.6269 21.983 9.70628 21.9489C9.78565 21.9149 9.85711 21.8649 9.91619 21.8021L18.8241 12.3031C18.8971 12.2277 18.9499 12.1353 18.9777 12.0344C19.0055 11.9334 19.0073 11.8271 18.9831 11.7253Z"
                  fill="#1A1A1A"
                  transform="translate(10, 9)"
                />
              </svg>

              <div className="flex flex-col items-start gap-[0.625rem] self-stretch">
                <h3 className="text-lg font-semibold">QR Code Tickets</h3>

                <p className="text-base">
                  Receive instant QR code tickets for effortless entry and
                  personalized experiences at attractions.
                </p>
              </div>

              <button className="text-lg font-semibold text-[#F3CE5E]">
                Learn About QR Codes
              </button>
            </div>
          </div>

          <img
            src="feature-img.jpeg"
            alt="Photo of a man showing smartphone"
            className="h-[34rem] border border-solid border-[#B2AB9B]"
          />
        </section>

        {/**
         *   USER REVIEWS
         *
         */}
        <section className="flex flex-col items-center justify-center gap-16 p-16">
          <h2 className="text-3xl font-bold leading-[2.625rem]">
            What Our Users Are Saying
          </h2>

          <div className="content-start-start flex flex-wrap items-start justify-center gap-11 self-stretch">
            {reviews.map((review, id) => (
              <Card key={id} review={review} />
            ))}
          </div>

          <button className="h-11 rounded-xl border border-solid border-[#B2AB9B] px-4 py-0 text-lg font-semibold">
            Read More Reviews
          </button>
        </section>

        {/**
         *   FAQ
         *
         */}

        {/**
         *   JOIN SECTION
         *
         */}
      </main>

      <footer>{/* FOOTER */}</footer>
    </>
  );
}
