import React from "react";
import heroImg from "../../assets/images/heroImg.png";

const Hero = () => {
  return (
    <div className="hero bg-base-200 h-[70vh]">
      <div className="hero-content flex-col  lg:flex-row-reverse  justify-evenly">
        <img src={heroImg} className="max-w-2/3 " />
        <div className="max-w-1/2">
          <h1 className="text-5xl font-bold">
            Books to freshen up your bookshelf
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">view the List</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
