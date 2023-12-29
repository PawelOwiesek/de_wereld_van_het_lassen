import { styled } from "styled-components";

export const Header = styled.h1`
  text-align: center;
  color: #1f47a8;
`;
export const SubHeader = styled.h2`
  grid-column: 1/4;
  text-align: center;
  margin-top: 40px;
`;

export const Methoden = styled.div`
  background-color: #e5e5e5;
  display: grid;
  grid-template-columns: auto;
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
