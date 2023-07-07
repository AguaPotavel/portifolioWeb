import { motion } from 'framer-motion';
import styled from 'styled-components';

export interface IContainerProps {
    background: string;
}

export const Container = styled(motion.div)<IContainerProps>`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    background-color: ${({ background }) => background};
    z-index: 100;
    overflow: hidden;
    cursor: pointer;
`;