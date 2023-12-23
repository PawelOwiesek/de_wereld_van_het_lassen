import { styled } from "styled-components";

export const Header = styled.h1`
  text-align: center;
  color: #008080;
`;
export const TopImage = styled.p`
  background-image: url("https://i.postimg.cc/65nfzmp9/download-1.jpg");
  height: 550px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
  margin-top: 50px;
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;
