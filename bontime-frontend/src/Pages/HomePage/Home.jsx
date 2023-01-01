
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Landing from '../../components/Landing/Landing';
import { useMediaQuery } from "@chakra-ui/react";
import React from "react";
import Hamburgur from "../../components/Navbar/homeburger";


const Home = () => {
  const [ismobileScreen] = useMediaQuery(`(max-width: 480px)`);
  return (
    <>
      {ismobileScreen ? <Hamburgur /> : <Navbar />}
      <Landing />
      <Footer />
    </>
  );
};

export default Home;