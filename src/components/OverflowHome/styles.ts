import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    z-index: 100;
    /* overflow: hidden; */
    position: absolute;
    left: 0;
    padding: 0;
    pointer-events: none;
`;

export const CoverUl = styled.ul`
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const CoverLi = styled.li`
    display: flex;
    width: 100%;
    height: 100%;
    flex: 1;
    background: red;
`;

export const InteractArea = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`;