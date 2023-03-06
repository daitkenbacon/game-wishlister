import "../wishlist-card/WishlistCard.scss";

import { motion } from "framer-motion";

type SkeletonCardProps = {
  name: string;
  released: string;
  background_image: string;
  id: number;
  selected: boolean;
};

export default function SkeletonCard(props: SkeletonCardProps) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div key={props.id} className={`card-container`}>
        <img src={props.background_image} alt={""} />
        <div className="card-footer">
          <p className="title">{props.name}</p>
          <p className="released">{props.released}</p>
          <div className="loader"></div>
        </div>
      </div>
    </motion.div>
  );
}
