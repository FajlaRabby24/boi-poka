import React from "react";
import BookContainer from "../../components/BookContainer/BookContainer";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <BookContainer></BookContainer>
    </div>
  );
};

export default Home;
