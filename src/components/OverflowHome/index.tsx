import { Container, CoverUl, CoverLi } from "./styles";
import { useAnimate, stagger, motion } from "framer-motion";
import { useState, useEffect } from "react";

interface OverflowHomeProps {
  Text?: any;
  color?: string;
  onClick?: () => void;
  goBack?: () => void;
  isOpen?: boolean;
}

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useAnimation(isOpen: boolean = false) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "ul",
      {
        opacity: isOpen ? 1 : 0,
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)", y: "0" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)", y: "-100vh" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen]);

  return scope;
}

export default function OverflowHome({ isOpen }: OverflowHomeProps) {
  const scope = useAnimation(isOpen);

  return (
    <>
      <Container ref={scope}>
        <CoverUl>
          <CoverLi></CoverLi>
          <CoverLi></CoverLi>
          <CoverLi></CoverLi>
          <CoverLi></CoverLi>
          <CoverLi></CoverLi>
          <CoverLi></CoverLi>
          <CoverLi></CoverLi>
          <CoverLi></CoverLi>
          <CoverLi></CoverLi>
        </CoverUl>
      </Container>
    </>
  );
}
