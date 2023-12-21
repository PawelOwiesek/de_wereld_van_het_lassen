import { styled } from "styled-components";

export const Header = styled.h1`
  text-align: center;
  color: #1f47a8;
  font-size: 42px;
  padding: 20px;
  text-shadow: 4px 4px 6px rgba(6, 6, 206, 1);
`;

export const SubHeader = styled.h2`
  text-align: center;
  color: #2649ac;
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
`;

export const Content = styled.section`
  background-color: #e5e5e5;
  display: grid;
  margin-bottom: 30px;
  border-radius: 25px;
  box-shadow: 3px 3px 24px 0px rgba(193, 193, 193, 1);
`;

export const List = styled.ul`
  list-style-type: square;
  font-size: 18px;
  margin: 0 100px;
  background-color: #fff;
  border-radius: 25px;
`;

export const ListItem = styled.li`
  margin: 15px;
  padding: 10px;
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
