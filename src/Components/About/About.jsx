import React from "react";
import signup from "../../assets/gallery/g03.jpg";
const About = () => {
  return (
    <div className="mt-24 bg-white">
      <div className="relative">
        <img
          src={signup}
          alt=""
          className="object-cover w-full object-center h-[200px]"
        />
        <div className="w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]"></div>
        <h2 className="absolute top-[50%] left-[10%] text-white font-semibold text-3xl md:text-5xl">
          Sell Online with Ocean
        </h2>
      </div>

      {/* about blogs  */}
      <div className="max-w-6xl mx-auto">
        <section className="text-gray-600 body-font ">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={`https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/images/group_1000001236.webp`}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Receive Payments
                <br className="hidden lg:inline-block" />
              </h1>
              <p className="mb-8 leading-relaxed text-justify">
                With a customer base of over 45 crore+ on Flipkart, you can
                expect orders from customers across India. To ensure your
                convenience, Flipkart ensures timely payments directly into your
                registered bank account, which you provided during the Flipkart
                account creation process. You can receive your payments as fast
                as 7 days* from the date of dispatch, enabling you to manage
                your cash flow efficiently and focus on growing your business.
              </p>
              <div className="flex justify-center"></div>
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font ">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-between">
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Help & Support
                <br className="hidden lg:inline-block" />
              </h1>
              <p className="mb-8 leading-relaxed text-justify">
                What sets us apart is our exceptional Flipkart seller support
                assistance. We prioritise your needs and are committed to
                providing you with prompt assistance, whether you have
                questions, doubts, or require any kind of support for your
                business. Our dedicated team is here to help you every step of
                the way, ensuring that you have a smooth and successful selling
                experience on Flipkart. Feel free to reach out to us whenever
                you need assistance - we're always here to support you.
              </p>
              <div className="flex justify-center"></div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={`https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/images/untitled_15_04_1.webp`}
              />
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font ">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={`https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/images/group_1000001236.webp`}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Grow Faster
                <br className="hidden lg:inline-block" />
              </h1>
              <p className="mb-8 leading-relaxed text-justify">
                At Flipkart, we recognize that there may be times when you
                require additional assistance for your online business. That's
                why, with your Flipkart seller account, you gain access to a
                diverse range of tools and support functions designed to foster
                business growth. These include:
              </p>
              <ul style={{ listStyleType: "square" }}>
                <li>
                  Price Recommendation Tool : Helps you determine optimal
                  pricing for your products.
                </li>
                <li>
                  Flipkart Ads : Enables you to advertise your products and
                  reach a larger customer base.
                </li>
                <li>
                  Shopping Festivals and more : Participate in exciting sales
                  events and promotional campaigns.
                </li>
              </ul>
              <div className="flex justify-center"></div>
            </div>
          </div>
        </section>
        {/* video  */}

        <section>
          <h2 className="ml-24 text-xl font-medium mb-5">Listing on Flipkart can be done in 2 different ways:</h2>
          <div className="flex gap-12 justify-center">
            <div>
              <h3 className="text-lg mb-2">1. Match with existing products</h3>
              <iframe
                width="450"
                height="300"
                className="rounded-lg"
                src="https://www.youtube.com/embed/ZroVeZ9-NT4?si=lyNn78K5d3_CMp1E"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <h5 className="text-justify max-w-[450px] my-5">If your product is already available on Flipkart, you have the option to seamlessly link or 'Latch' onto the existing product listing. This allows you to make your product live on the platform without the need to create a separate listing.</h5>
            </div>
            <div>
              <h3 className="text-lg mb-2">2. New product</h3>
              <iframe
                width="450"
                height="300"
                className="rounded-lg"
                src="https://www.youtube.com/embed/-pjr2E01NAw?si=Zj56OlhXPVl21h3n"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
               <h5 className="text-justify max-w-[450px] my-5">If your product is already available on Flipkart, you have the option to seamlessly link or 'Latch' onto the existing product listing. This allows you to make your product live on the platform without the need to create a separate listing.</h5>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
