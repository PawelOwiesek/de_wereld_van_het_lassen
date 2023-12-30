import { styled } from "styled-components";

export const Header = styled.h1`
  text-align: center;
  color: #1f47a8;
  font-size: 42px;
  padding: 20px;
  text-shadow: 4px 4px 6px rgba(6, 6, 206, 1);

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

export const SubHeader = styled.h2`
  text-align: center;
  color: #2649ac;
  @media (max-width: 500px) {
    font-size: 18px;
    max-width: 80vw;
    margin: 10px auto;
  }
`;

export const ContentTitle = styled(SubHeader)`
  color: #2196f3;
`;

export const InleidingParagraph = styled.p`
  font-size: 20px;
  padding: 10px;
  margin-left: 25px;
`;

export const List = styled.ul`
  list-style: square;
  font-size: 18px;
  margin: 0 100px;
  background-color: #fff;
  border-radius: 25px;
  li::marker {
    color: #1f47a8;
    font-size: 30px;
  }
  @media (max-width: 500px) {
    margin: 5px;
    padding: 5px;
    font-size: 16px;
  }
`;

export const ListItem = styled.li`
  margin: 5px 0;
  padding: 5px;
  color: #000;
  line-height: 1.1;
  @media (max-width: 768px) {
    margin: 5px 35px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Divider = styled.div`
  height: 2px;
  background-color: grey;
  width: 100%;
  margin: 10px 0;
`;
