import styled from "styled-components";
import { ReactComponent as HorsePieceSVG } from "../../assets/noun-chess-1022883.svg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
  overflow: hidden
`;

export const Content = styled.div`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const HorsePiece = styled(HorsePieceSVG)`
  max-height: 300px;
`;

export const SoonText = styled.p`
  font-size: 2rem;
  margin-top: -20px;
  font-weight: 600;
`;

export const Footer = styled.p`
  text-align: center;
  font-size: 0.75rem;
  height: fit-content;
`;

export const FooterSubtext = styled.span`
  font-size: 0.625rem;
`;
