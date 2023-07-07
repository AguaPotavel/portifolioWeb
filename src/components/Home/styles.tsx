import { styled } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.shape.main};
  color: ${(props) => props.theme.colors.text.main};
`;

export const TitleWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  overflow: hidden;
`;

export const Title = styled.h1`
  font-size: 8rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text.main};
  font-family: ${(props) => props.theme.fonts.primary};
  pointer-events: none;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 5rem;
  }
`;

export const Subtitle = styled.h2``;
