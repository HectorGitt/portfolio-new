import styled from "styled-components";
import { motion } from "framer-motion";

//styled components
export const LayoutStyle = styled(motion.div)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 5rem;
  color: white;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    height: fit-content;
    text-align: center;
    width: 100%;
  }
  a {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: #ffffff;
    transition: all 0.5s ease;
    font-family: "Inter", sans-serif;
    text-decoration: none;
    &:hover {
      background-color: #23d997;
      color: #fff;
    }
  }
`;
export const DescriptionStyle = styled.div`
  flex: 1;
  z-index: 2;
  padding-right: 5rem;
  @media (max-width: 900px) {
    padding: 0;
    flex-direction: column;
    align-items: center;
    justify-items: center;
  }

  h2 {
    font-weight: lighter;
  }
`;
export const ImageStyle = styled.div`
  flex: 1;
  z-index: 2;
  overflow: hidden;
  img {
    margin-left: 20%;
    width: 70%;
    height: 80vh;
    object-fit: cover;
    @media (max-width: 900px) {
      margin: 0;
    }
  }
`;
export const Hidden = styled.div`
  overflow: hidden;
`;
