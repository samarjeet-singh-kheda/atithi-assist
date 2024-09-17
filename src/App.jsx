import Header from "./components/Header";
import Button from "./components/Button";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <section className="flex flex-wrap content-center items-center gap-x-11 gap-y-16 bg-[#FEF4DE] p-16">
          <div className="flex flex-custom flex-col items-start gap-8">
            <div className="flex flex-col items-start gap-3 self-stretch">
              <h2 className="text-[1.875rem] font-bold leading-[2.625] text-black">
                Unlock Your Adventure with Atithi Assist!
              </h2>

              <p className="text-[ 1.125rem] font-normal leading-7 text-black">
                Experience seamless ticket booking and personalized visits with
                our AI-powered multilingual chatbot, guiding you every step of
                the way.
              </p>

              <Button variant="yellow">Open Atithi Bot</Button>
            </div>
          </div>

          <img
            src="img-open.png"
            alt="Photo of a man showing smartphone"
            className="h-[32.75rem] min-w-[31.5rem]"
          />
        </section>

        {/* CAROUSEL 1 */}
        {/* CAROUSEL 2 */}

        {/* SECTION 2 */}

        {/* USER REVIEWS */}

        {/* FAQ */}

        {/* JOIN SECTION */}
      </main>

      <footer>{/* FOOTER */}</footer>
    </>
  );
}
