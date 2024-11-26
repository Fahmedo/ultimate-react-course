import { useEffect } from 'react';
import PageTop from '../ui/PageTop';
interface datasI {
  no: number;
  heading: string;
  imgUrl: string;
  description: string;
}
export default function ServicesPage() {
  const datas: datasI[] = [
    {
      no: 1,
      heading: 'Service one heading',
      imgUrl: 'https://dummyimage.com/720x600',
      description:
        '  Discover our exceptional range of marine vessels designed for every adventurer. Whether you seek luxury or performance, each  boat is crafted with precision and durability. Embark on unforgettable journeys and experience the thrill of the open water with us today! Discover our exceptional range of marine vessels designed for every adventurer. Whether you seek luxury or performance, each boat is crafted with precision and durability.',
    },
    {
      no: 2,
      heading: 'Service one heading',
      imgUrl: 'https://dummyimage.com/720x600',
      description:
        '  Discover our exceptional range of marine vessels designed for every adventurer. Whether you seek luxury or performance, each  boat is crafted with precision and durability. Embark on unforgettable journeys and experience the thrill of the open water with us today! Discover our exceptional range of marine vessels designed for every adventurer. Whether you seek luxury or performance, each boat is crafted with precision and durability.',
    },
    {
      no: 3,
      heading: 'Service one heading',
      imgUrl: 'https://dummyimage.com/720x600',
      description:
        '  Discover our exceptional range of marine vessels designed for every adventurer. Whether you seek luxury or performance, each  boat is crafted with precision and durability. Embark on unforgettable journeys and experience the thrill of the open water with us today! Discover our exceptional range of marine vessels designed for every adventurer. Whether you seek luxury or performance, each boat is crafted with precision and durability.',
    },
    {
      no: 4,
      heading: 'Service one heading',
      imgUrl: 'https://dummyimage.com/720x600',
      description:
        '  Discover our exceptional range of marine vessels designed for every adventurer. Whether you seek luxury or performance, each  boat is crafted with precision and durability. Embark on unforgettable journeys and experience the thrill of the open water with us today! Discover our exceptional range of marine vessels designed for every adventurer. Whether you seek luxury or performance, each boat is crafted with precision and durability.',
    },
    {
      no: 5,
      heading: 'Service one heading',
      imgUrl: 'https://dummyimage.com/720x600',
      description:
        '  Discover our exceptional range of marine vessels designed for every adventurer. Whether you seek luxury or performance, each  boat is crafted with precision and durability. Embark on unforgettable journeys and experience the thrill of the open water with us today! Discover our exceptional range of marine vessels designed for every adventurer. Whether you seek luxury or performance, each boat is crafted with precision and durability.',
    },
  ];
  useEffect(() => {
    document.title = 'Our Services';
  }, []);
  return (
    <>
      <PageTop>Services</PageTop>
      <section className="text-gray-600 body-font px-5 py-10">
        {datas.map((data: datasI) => (
          <div className="container mx-auto flex  md:flex-row flex-col items-center lg:md:border-t-2 lg:md:odd:flex-row-reverse justify-between ">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={data.imgUrl}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2   lg:px-16 flex flex-col md:items-start md:text-left items-center text-center">
              <div className="flex gap-8">
                <div className=" text-5xl">
                  {data.no <= 9 ? '0' + data.no : data.no}
                </div>
                <div>
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    {data.heading}
                  </h1>
                  <p className="mb-8 leading-relaxed">{data.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
