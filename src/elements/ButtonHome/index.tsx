import { Container } from "./styles";
import { ComponentPropsWithoutRef } from "react";

interface ButtonHomeProps extends ComponentPropsWithoutRef<"button"> {
  children: any;
  color: string;
  onClick: () => void;
}

export default function ButtonHome({
  children,
  color,
  onClick,
}: ButtonHomeProps) {
  const variantsButton = {
    hidden: { scale: 0, rotate: -90 },
    show: {
      scale: 1,
      rotate: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  return (
    <Container
      background={color}
      onClick={onClick}
      variants={variantsButton}
      initial="hidden"
      animate="show"
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
    >
      {children}
    </Container>
  );
}
