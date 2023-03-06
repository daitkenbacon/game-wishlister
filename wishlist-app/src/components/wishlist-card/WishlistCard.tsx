import "./WishlistCard.scss";

import { motion } from "framer-motion";

type WishlistCardProps = {
  name: string;
  released: string;
  background_image: string;
  id: number;
  selected: boolean;
};

export default function WishlistCard(props: WishlistCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.99,
        transition: { duration: 0.1 },
      }}
    >
      <div
        key={props.id}
        className={`card-container 
                ${props.selected ? "selected" : ""}
                `}
      >
        <img src={props.background_image} alt={props.name} />
        <div className="card-footer">
          <p className="title">{props.name}</p>
          <p className="released">{props.released}</p>
        </div>
      </div>
    </motion.div>
  );
}
