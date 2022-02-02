import styled from "styled-components";

const Wrapper = styled.div`
  background-color: teal;
  text-align: center;
  padding: 0.5rem;
`;
const WrapperText = styled.p`
  font-weight: bold;
  color: white;
`;

function Announcement() {
  return (
    <Wrapper>
      <WrapperText>Super Deal! Free Shipping on Orders Over $50</WrapperText>
    </Wrapper>
  );
}

export default Announcement;
