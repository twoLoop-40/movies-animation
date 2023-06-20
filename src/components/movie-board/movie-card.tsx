import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { makeImagePath } from "../../api";
import { CardProps } from "../../types";

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
`;

const CardImg = styled(motion.img)`
  display: flex;
  object-fit: cover;
  border-radius: 1rem;
`;

const CardTitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
`;

const cardImageVariants = {
  normal: {
    scale: 1
  },
  hover: {
    scale: 1.1,
    y: -40,
    transition: {
      delay: 0.2,
      duaration: 0.2,
      type: "tween"
    }
  }
};

const cardVariants = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    transition: {
      delay: 0.2,
      duration: 0.3
    }
  },
  exit: { scale: 0, opacity: 0, transition: { delay: 0.3, duration: 0.2 } }
};

interface MovieCardProps {
  cardData: CardProps;
}

export default function MovieCard({ cardData }: MovieCardProps) {
  const navigate = useNavigate();
  const onImageClick = () => {
    navigate(cardData.id.toString());
  };
  return (
    <AnimatePresence>
      <Card
        key={cardData.id}
        onClick={onImageClick}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <CardImg
          whileHover="hover"
          variants={cardImageVariants}
          initial="normal"
          transition={{ type: "tween" }}
          src={makeImagePath(cardData.poster_path)}
        ></CardImg>
      </Card>
      <CardTitle>{cardData.title}</CardTitle>
    </AnimatePresence>
  );
}
