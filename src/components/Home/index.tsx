import {
  Container,
  Title,
  TitleWrapper,
  SubtitleWrapper,
  Subtitle,
  NameWrapper,
} from "./styles";

export default function Home() {
  const variantsTitle = {
    hidden: { x: -100, rotate: -90 },
    show: {
      x: 0,
      rotate: 0,
    },
  };

  return (
    <Container>
      <SubtitleWrapper>
        <Subtitle>Hi, I'm</Subtitle>
        <NameWrapper
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
        >
          <Subtitle className="name">Ruan</Subtitle>
        </NameWrapper>
      </SubtitleWrapper>
      <TitleWrapper variants={variantsTitle} initial="hidden" animate="show">
        <Title>FullStack Developer</Title>
      </TitleWrapper>
    </Container>
  );
}
