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

export const InleidingParagraph = styled.p`
  font-size: 20px;
  padding: 10px;
  margin-left: 25px;
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
  }
`;

export const ListItem = styled.li`
  font-size: 18px;
  margin: 5px 0;
  padding: 5px;
  color: #000;
  line-height: 1.1;
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
