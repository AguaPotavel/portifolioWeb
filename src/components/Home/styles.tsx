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
  overflow: hidden;
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
  line-height: 6rem;

  @media (max-width: 768px) {
    font-size: 5rem;
  }
`;

export const SubtitleWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: fit-content;
  max-width: 80vw;
  overflow: hidden;
`;

export const NameWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: fit-content;
  overflow: visible;
  position: relative;

  &:hover {
    .name {
      color: ${(props) => props.theme.colors.text.dark};
      z-index: 1;
    }

    &:before {
      width: 100%;
    }
  }

  &:before {
    content: "";
    position: absolute;
    width: 1%;
    height: 100%;
    left: 0;
    background-color: ${(props) => props.theme.colors.primary.main};
    transition: all 0.5s ease-in-out;
  }
`;

export const Subtitle = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text.main};
  font-family: ${(props) => props.theme.fonts.primary};
  pointer-events: none;
  user-select: none;
  line-height: 1rem;
  margin-right: 1rem;

  &.name {
    color: ${(props) => props.theme.colors.primary.main};
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
