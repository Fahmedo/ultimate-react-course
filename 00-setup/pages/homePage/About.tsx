export default function About() {
  return (
    <section className="text-gray-600 body-font">
      <span className="sr-only">about us section</span>
      <div className="container mx-auto flex px-5 lg:md:py-24 py-12 md:flex-row flex-col">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="text-center font-bold text-2xl"> About us</h1>

          <div className="mb-8 leading-relaxed">
            <p>
              Discover our exceptional range of marine vessels designed for
              every adventurer. Whether you seek luxury or performance, each
              boat is crafted with precision and durability. Embark on
              unforgettable journeys and experience the thrill of the open water
              with us today
            </p>

            <p className="my-10">
              Discover our exceptional range of marine vessels designed for
              every adventurer. Whether you seek luxury or performance, each
              boat is crafted with precision and durability. Embark on
              unforgettable journeys and experience the thrill of the open water
              with us today!
            </p>
          </div>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-brand-primary border-0 py-2 px-14 focus:outline-none hover:bg-brand-400 rounded text-lg">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
