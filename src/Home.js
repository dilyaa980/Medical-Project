import React from 'react'
import Option from "./components/Option/Option";
import Directions from "./components/Directions/Directions";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


const Home = () => {
  return (
    <div>
      <Header />
      <Option />
      <Directions />
      <Footer />
    </div>
  );
}

export default Home