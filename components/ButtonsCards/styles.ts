import styled from "styled-components";

import { motion } from "framer-motion";

export const ButtonCardStyles = styled(motion.a)`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  background-color: #000000bb;
  text-decoration: none;
  outline: #eaeaea solid 1px;
  border-radius: 10px;
  transition: all .1s linear;
  max-width: 300px;
  
  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    outline: #0070f3 solid 1px;
  }

  &:hover ~ :not(:hover),
  &:focus ~ :not(:focus),
  &:active ~ :not(:active) {
    filter: blur(3px);
    opacity: .3;
  }
`;

export const ButtonTitleStyles = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  z-index: 999;
`;

export const ButtonDescriptionStyles = styled.p`
  margin: 0;
  font-size: 1.25rem;
  z-index: 999;
  line-height: 1.5;
`;
