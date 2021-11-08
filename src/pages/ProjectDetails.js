import styled from "styled-components";
import { useState, useEffect } from "react";

//import usehistory
import { useHistory } from "react-router-dom";

import { MovieState } from "../movieState";

//ANIMATION
import { motion } from "framer-motion";
import { pageAnime } from "../animation";

const ProjectDetails = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details
          variants={pageAnime}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Head>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="mproject" />
          </Head>
          <Awards>
            {movie.awards.map((award) => (
              <Award award={award} key={award.title} />
            ))}
          </Awards>
          <ImageStyle>
            <img src={movie.secondaryImg} alt="movie" />
          </ImageStyle>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
`;
const Head = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 5rem;
  align-items: center;
  justify-content: space-around;
`;
const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0;
  }
  p {
    padding: 2rem 0;
  }
`;
const ImageStyle = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
// Award Component
const Award = ({ award }) => {
  return (
    <AwardStyle>
      <h3>{award.title}</h3>
      <div className="line"></div>
      <p>{award.description}</p>
    </AwardStyle>
  );
};
export default ProjectDetails;
