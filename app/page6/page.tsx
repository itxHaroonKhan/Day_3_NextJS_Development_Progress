import React from 'react';

const Page6 = () => (
  <div>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-5xl text-2xl font-bold text-gray-900 mb-2">
            Questions Look Here
          </h1>
          <p className="lg:w-full w-full text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {[
            "What types of chairs do you offer?",
            "How can we get in touch with you?",
            "Do your chairs come with a warranty?",
            "What will be delivered? And When?",
            "Can I try a chair before purchasing?",
            "How do I clean and maintain my Comforty chair?",
          ].map((title, index) => (
            <div className="xl:w-1/2 md:w-1/2 p-4" key={index}>
              <div className="border p-6 bg-[#F7F7F7]">
                <h2 className="text-lg text-gray-900 font-bold mb-2 flex justify-between items-center">
                  {title}
                  <span className="ml-auto text-gray-700 font-bold text-xl">+</span>
                </h2>
                <p className="leading-relaxed text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Page6;
