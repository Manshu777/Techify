import React from "react";

function Testimonials() {

    const data=[
        {
          img: "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/testi_3_1.jpg",
          name: "David Farnandes",
          designation: "CEO at Anaton",
          feedback:
            "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration. Globally synergize resource sucking value via cutting-edge.",
        },
        {
          img: "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/testi_3_2.jpg",
          name: "Jackline Techie",
          designation: "CEO at Kormola",
          feedback:
            "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration. Globally synergize resource sucking value via cutting-edge.",
        },
        {
          img: "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/testi_3_3.jpg",
          name: "Abraham Khalil",
          designation: "CEO at Anatora",
          feedback:
            "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration. Globally synergize resource sucking value via cutting-edge.",
        },
      ]
  return (
    <section className="py-12 px-5 md:px-14 xl:px-32 relative">
         <div className="absolute inset-0 bg-[url('/testimonial/testi_bg.webp')] bg-cover bg-center bg-no-repeat bg-opacity-70"></div>
      <div className="container relative mx-auto">
        {/* Title Section */}
        <div className="text-center mb-10">
          <div className="absolute text-gray-200 font-bold text-8xl opacity-10 -z-10">
            TESTIMONIALS
          </div>
          <div className="flex justify-center items-center mb-4">
            <img
              src="https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/title_shape_2.svg"
              alt="Icon"
              className="w-6 h-6 mr-2"
            />
            <span className="text-indigo-600 font-semibold">
              CUSTOMER FEEDBACK
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Happy Clients Say <br />
            <span className="text-indigo-600">About Us?</span>
          </h2>
        </div>

        {/* Testimonials Section */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial Item */}
            {data.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-start text-left"
              >
                <div className="relative mb-4">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="rounded-full w-24 h-24 object-cover"
                  />
                  
                  <div className="absolute bg-[#684df4] -bottom-4 left-8 p-2 rounded-full">
                    <img
                      src="/testimonial/quote_left.svg"
                      alt="Quote Icon"
                      className="w-5 h-5"
                    />
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className="fa-solid fa-star text-yellow-400 text-lg mr-1"
                    ></i>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.feedback}</p>
                <h3 className="text-lg font-bold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500">{testimonial.designation}</p>
              </div>
            ))}
          </div>
         
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
