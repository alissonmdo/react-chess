import {
  Container,
  Content,
  Footer,
  FooterSubtext,
  HorsePiece,
  SoonText,
} from "./styles";

export function Soon() {
  return (
    <Container>
      <Content>
        <HorsePiece />
      <SoonText>Soon.</SoonText>
      </Content>
      <Footer>
        Made with 💗 by Alisson & Larissa<br/>
        <FooterSubtext>Chess by Yo! Baba from NounProject.com</FooterSubtext>
      </Footer>
    </Container>
  );
}
