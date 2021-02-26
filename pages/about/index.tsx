import Image from 'next/image';

import Shell from '~/components/Container';

const index = () => {
  return (
    <Shell>
      <div className="max-w-screen-sm mx-auto">
        <div className="text-center mb-24">
          <h3 className="text-indigo-500 font-bold">INTRODUCING</h3>
          <h1 className="text-4xl pb-2 font-bold">Quisp</h1>
        </div>
        <div>
          <h3 className="text-2xl font-bold pb-4">Our story</h3>
          <p className="pb-4">
            In 2013, I started working part-time at a bar/restaurant/bowling
            alley, where I quickly became accustomed to the process of the sign
            in. As a new computer science student, the process in which many
            bars and restaurants went about this process was “outdated” in my
            opinion. I was always looking for new and different ways that
            technology could solve problems. Specifically, I was focused on how
            software could help local people, businesses, etc. in my small
            Wisconsin town and surrounding areas.
          </p>
          <p>
            There have been multiple iterations of Quisp (although it wasn’t
            called that originally), from desktop applications, to old web
            applications, and finally the finished product that you are seeing.
          </p>
        </div>
        <div className="pt-16">
          <h3 className="text-2xl font-bold pb-4">What's happening</h3>
          <p>
            We’re currently looking for any bars, restaurants, bowling alleys,
            anyone that offers their customers a sign in to test our product.
            The product is currently being offered to test free of charge. With
            COVID-19 having a major impact on the bar and restaurant industry,
            it didn’t feel right to charge for this service in the present time.
          </p>
        </div>
      </div>
    </Shell>
  );
};

export default index;
