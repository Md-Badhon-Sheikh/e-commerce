import React from "react";
import g1 from "../../assets/gallery/g01.jpg"
import g2 from "../../assets/gallery/g02.jpg"
import g3 from "../../assets/gallery/g03.jpg"
import g4 from "../../assets/gallery/g04.jpg"
import g5 from "../../assets/gallery/g05.jpg"
import g6 from "../../assets/gallery/g06.jpg"

const Gallery = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto flex flex-wrap">
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2 ">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:scale-75 hover:translate-x-4 hover:skew-y-3 duration-500"
                  src={g1}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:scale-75 hover:translate-x-4 hover:skew-y-3 duration-500"
                  src={g2}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block hover:scale-75 hover:translate-y-4 hover:skew-x-3 duration-500"
                  src={g4}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block hover:scale-75 hover:translate-x-4 hover:skew-y-3 duration-500"
                  src={g3}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:scale-75 hover:translate-x-4 hover:skew-y-3 duration-500"
                  src={g5}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:scale-75 hover:translate-x-4 hover:skew-y-3 duration-500"
                  src={g6}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
