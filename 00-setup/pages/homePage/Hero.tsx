export default function Hero() {
  return (
    <section className="text-white body-font ">
      <span className=" sr-only"> hero section</span>
      <div className="container mx-auto flex md:flex-row flex-col items-center rounded-2xl shadow-md lg:md:mt-20 mt-5  bg-brand-primary ">
        <div className="lg:flex-grow md:w-1/2 lg:md:p-16 p-8 lg:pr-24  md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
          <h1 className="title-font text-3xl mb-4   font-bold lg:md:text-5xl">
            Beyond the Horizon: Exceptional Marine Vessels for Every Explorer
            <br className="hidden lg:inline-block" />
            readymade gluten
          </h1>
          <p className="mb-8 leading-relaxed">
            Discover our exceptional range of marine vessels designed for every
            adventurer. Whether you seek luxury or performance, each boat is
            crafted with precision and durability. Embark on unforgettable
            journeys and experience the thrill of the open water with us today!
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-transparent  border-2 py-2 px-14 focus:outline-none hover:bg-brand-400 hover:border-brand-200 rounded text-lg">
              Button
            </button>
          </div>
        </div>
        <div className=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-2xl w-full h-full "
            alt="hero"
            src="https://dummyimage.com/600x700/e0e0e0/000000"
          />
        </div>
      </div>
    </section>
  );
}
