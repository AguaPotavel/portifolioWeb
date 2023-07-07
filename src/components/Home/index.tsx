import {
  Container,
  Title,
  TitleWrapper,
  SubtitleWrapper,
  Subtitle,
  NameWrapper,
  ButtonWrapper,
} from "./styles";

import ButtonHome from "../../elements/ButtonHome";
import OverflowHome from "../OverflowHome";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useState } from "react";

export default function Home() {
  const variantsTitle = {
    hidden: {
      x: -100,
      rotate: -90,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
    show: {
      x: 0,
      rotate: 0,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <TitleWrapper variants={variantsTitle} initial="hidden" animate="show">
        <SubtitleWrapper>
          <Subtitle>Hi, I'm</Subtitle>
          <NameWrapper>
            <Subtitle className="name">Ruan</Subtitle>
          </NameWrapper>
        </SubtitleWrapper>
        <Title>FullStack Developer</Title>
        <ButtonWrapper
          animate={{
            transition: { delayChildren: 0.2, staggerChildren: 0.4 },
          }}
        >
          <ButtonHome
            color="#333"
            onClick={() => console.log("teste")}
            onMouseEnter={() => console.log("entrou")}
          >
            <AiFillGithub size={24} color={"#fff"} />
          </ButtonHome>
          <ButtonHome
            color="#0e76a8"
            onClick={() => console.log("teste")}
            onMouseEnter={() => console.log("entrou")}
          >
            <AiFillLinkedin size={24} color={"#fff"} />
          </ButtonHome>
        </ButtonWrapper>
      </TitleWrapper>
      <OverflowHome isOpen={isOpen} />
    </Container>
  );
}
