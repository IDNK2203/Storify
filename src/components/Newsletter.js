import styled from "styled-components";
import SendSharpIcon from "@mui/icons-material/SendSharp";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: max(25rem, 60vh);
  background-color: #f5f1f1;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 20px;
`;
const Desc = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  margin: 1rem 0;
`;
const InputContainer = styled.div`
  width: min(90%, 20rem);
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  border: none;
  flex: 4;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

function Newsletter() {
  return (
    <Section>
      <Title> Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email"></Input>
        <Button>
          <SendSharpIcon />
        </Button>
      </InputContainer>
    </Section>
  );
}

export default Newsletter;
