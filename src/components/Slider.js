import styled from "styled-components";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { sliderItems } from "../data";
import { useState } from "react";
const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const ArrowContainer = styled.span`
  padding: 0.6rem;
  background-color: #d2d2d2;
  height: min-content;
  border-radius: 50%;
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  opacity: 0.8;
  z-index: 2000;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  width: fit-content;
  transition: 0.75s all ease-out;
  transform: translateX(-${(props) => props.slideIndex}00vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 1rem;
`;
const Title = styled.h2`
  font-weight: bold;
  font-size: 5rem;
`;
const Desc = styled.p`
  font-size: 1.5rem;
  letter-spacing: 0.25rem;
  max-width: 38rem;
  padding: 1rem 0;
`;
const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  padding: 0.75rem;
  font-size: 1rem;
  text-transform: uppercase;
`;

function Slider() {
  const [slideIndex, setslideIndex] = useState(1);

  const handleSliderCrtls = (dir) => {
    if (dir === "right") {
      return setslideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
    setslideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
  };

  return (
    <Container>
      <ArrowContainer
        direction={"right"}
        onClick={() => handleSliderCrtls("right")}
      >
        <ChevronRightIcon></ChevronRightIcon>
      </ArrowContainer>
      <ArrowContainer
        direction={"left"}
        onClick={() => handleSliderCrtls("left")}
      >
        <ChevronLeftIcon></ChevronLeftIcon>
      </ArrowContainer>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img}></Image>
            </ImgContainer>
            <InfoContainer>
              <Title> {item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button> Shop Now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
    </Container>
  );
}

export default Slider;
