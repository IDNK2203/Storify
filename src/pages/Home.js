import styled from "styled-components";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Category from "../components/Category";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Wrapper = styled.div``;

function Home() {
  return (
    <Wrapper>
      <Announcement></Announcement>
      <Header></Header>
      <Slider></Slider>
      <Category></Category>
      <Products></Products>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </Wrapper>
  );
}

export default Home;
