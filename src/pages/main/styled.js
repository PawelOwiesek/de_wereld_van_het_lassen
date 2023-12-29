import { styled } from "styled-components";

export const Header = styled.h1`
  text-align: center;
  color: #1f47a8;
`;
export const TopImage = styled.p`
  background-image: url("https://i.postimg.cc/65nfzmp9/download-1.jpg");
  height: 550px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    height: 300px;
  }
`;
export const Image = styled.img`
  max-width: 500px;
  max-height: 230px;
  width: 100%;
  @media (max-width: 1024px) {
    margin: 10px;
    max-width: 90vw;
  }
`;

export const Section = styled.section`
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SubHeader = styled.h2`
  grid-column: 1/4;
  text-align: center;
  margin-top: 40px;

  @media (max-width: 768px) {
    margin: 5px;
  }
`;

export const Paragraph = styled.p`
  grid-column: 1/4;
  padding: 20px;
  font-size: 20px;
  margin: 0;
  word-wrap: break-word;
`;

export const Span = styled.span`
  color: #1f47a8;
  font-weight: bold;
  margin-right: 5px;
`;

export const Link = styled.a`
  margin-left: 5px;
  color: #e50c0c;
  font-size: 18px;
  font-weight: bold;
`;
