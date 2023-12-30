import { styled } from "styled-components";

export const Content = styled.section`
  background-color: #e5e5e5;
  display: grid;
  margin-bottom: 30px;
  border-radius: 25px;
  box-shadow: 3px 3px 24px 0px rgba(193, 193, 193, 1);

  @media (max-width: 1024px) {
    word-break: break-all;
  }
  @media (max-width: 500px) {
    word-break: none;
  }
`;

export const Image = styled.img`
  max-width: 500px;
  max-height: 350px;
  width: 100%;
  padding: 10px;
  margin: 50px;

  @media (max-width: 1024px) {
    margin: 10px;
    max-width: 90vw;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.3;
  padding: 20px;
  margin: 0 30px;
`;

export const SubParagraph = styled(Paragraph)`
  font-size: 20px;
  color: black;
`;

export const Inleiding = styled.div`
  background-color: #e5e5e5;
  display: grid;
  grid-template-columns: 600px auto;
  align-items: center;
  gap: 50px;
  margin-bottom: 50px;
  border-radius: 25px;
  box-shadow: 3px 3px 24px 0px rgba(193, 193, 193, 1);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    word-break: break-all;
  }
`;
