import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useMatch, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { makeBgPath } from "../api";
import { MovieDetailProps } from "../types";
import { matchOnCondition } from "../utils";
import { XCircleIcon } from "./icons";

const ModalWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const ModalBoard = styled(motion.div)`
  position: absolute;
  max-width: 60vw;
  min-height: 80vh;
  top: 8rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  overflow: auto;
  opacity: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  opacity: 1;
  background-color: ${(props) => props.theme.black.darker};
  color: ${(props) => props.theme.white.darker};
  padding: 1rem;
`;

const ModalImg = styled(motion.img)`
  display: flex;
  object-fit: cover;
  border-radius: 1rem;
`;

const ModalTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem;
`;

const ModalDescription = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  padding: 1rem;
`;

const ModalAttribute = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const ModalIcon = styled.svg`
  cursor: pointer;
  display: flex;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  width: 2.25rem;
  height: 2.25rem;
`;

const ModalBoardVariants = {
  initial: { scale: 0.5 },
  animate: {
    scale: 1,
    transition: { delay: 0.3, duration: 0.3 }
  },
  exit: { scale: 0, transition: { duaration: 0.2 } }
};

export default function MovieModal({
  movieDetail
}: {
  movieDetail: MovieDetailProps;
}) {
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const matchShort = useMatch("/:movieId");
  const matchLong = useMatch("/:movieType/:movieId");
  const params = useParams();

  const isMovieIdMatch = matchOnCondition(
    matchShort,
    matchLong,
    (match1, match2) =>
      match1?.params.movieId === params.movieId ||
      match2?.params.movieId === params.movieId
  );

  const onGoBackClick = () => {
    if (matchShort?.params.movieId) {
      navigate("/");
    }
    if (matchLong?.params.movieId) {
      navigate(`/${matchLong.params.movieType}`);
    }
  };
  return (
    <AnimatePresence>
      {isMovieIdMatch ? (
        <ModalWrapper
          exit={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.1, duration: 0.5 }
          }}
        >
          <ModalBoard
            style={{ top: scrollY.get() + 100 }}
            layoutId={matchShort?.params.movieId || matchLong?.params.movieId}
            variants={ModalBoardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <ModalIcon onClick={onGoBackClick}>
              <XCircleIcon />
            </ModalIcon>
            <ModalImg src={makeBgPath(movieDetail.backdrop_path)} />
            <ModalTitle>{movieDetail.title}</ModalTitle>
            <ModalDescription>{movieDetail.overview}</ModalDescription>
            <ModalAttribute>Budget: ${movieDetail.budget}</ModalAttribute>
            <ModalAttribute>Revenue: ${movieDetail.revenue}</ModalAttribute>
            <ModalAttribute>Hompage: {movieDetail.homepage}</ModalAttribute>
            <ModalAttribute></ModalAttribute>
          </ModalBoard>
        </ModalWrapper>
      ) : null}
    </AnimatePresence>
  );
}
