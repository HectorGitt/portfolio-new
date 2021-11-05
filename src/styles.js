import styled from "styled-components";

//styled components
export const LayoutStyle = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 5rem;
  color: white;
`;
export const DescriptionStyle = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;
export const ImageStyle = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    margin-left: 20%;
    width: 70%;
    height: 80vh;
    object-fit: cover;
  }
`;
export const Hidden = styled.div`
  overflow: hidden;
`;
