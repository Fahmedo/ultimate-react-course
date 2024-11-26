import { useEffect } from 'react';
import PageTop from '../ui/PageTop';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Us';
  }, []);
  return (
    <>
      <PageTop>About Us</PageTop>

      <div className=" p-3 lg:md:p-0 ">
        <div className="flex lg:md:flex-row flex-col justify-between gap-20 py-6">
          <h1 className="text-3xl font-bold">
            Beyond the Horizon: Exceptional Marine Vessels for Every Explorer
          </h1>
          <p className="text-sm">
            Discover our exceptional range of marine vessels designed for every
            adventurer. Whether you seek luxury or performance, each boat is
            crafted with precision and durability. Embark on unforgettable
            journeys and experience the thrill of the open water with us today!{' '}
          </p>
        </div>
        <div className="">
          <img
            src=" https://dummyimage.com/1221x400/e0e0e0/000000"
            alt=""
            className=" object-cover w-auto"
          />
        </div>
        <p>
          Discover our exceptional range of marine vessels designed for every
          adventurer. Whether you seek luxury or performance, each boat is
          crafted with precision and durability. Embark on unforgettable
          journeys and experience the thrill of the open water with us today!
          Discover our exceptional range of marine vessels designed for every
          adventurer. Whether you seek luxury or performance, each boat is
          crafted with precision and durability. <br />
          <div className="pt-10">
            Discover our exceptional range of marine vessels designed for every
            adventurer. Whether you seek luxury or performance, each boat is
            crafted with precision and durability. Embark on unforgettable
            journeys and experience the thrill of the open water with us today!
            Discover our exceptional range of marine vessels designed for every
            adventurer. Whether you seek luxury or performance, each boat is
            crafted with precision and durability.
          </div>
        </p>
      </div>
    </>
  );
}
