import { curve, translate } from "@/utils/animations";
import { motion } from "framer-motion";

export const SVG = ({ height, width }: { height: number; width: number }) => {
  const initialPath = `
      M0 300 
      Q${width / 2} 0 ${width} 300
      L${width} ${height + 300}
      Q${width / 2} ${height + 600} 0 ${height + 300}
      L0 300
  `;

  const targetPath = `
      M0 0
      Q${width / 2} 0 ${width} 0
      L${width} ${height}
      Q${width / 2} ${height + 600} 0 ${height + 300}
      L0 0
  `;

  const finalPath = `
      M0 0
      Q${width / 2} 0 ${width} 0
      L${width} ${height}
      Q${width / 2} ${height} 0 ${height}
      L0 0
  `;

  return (
    <motion.svg
      className="curve"
      variants={translate}
      initial="initial"
      animate="enter"
      exit="exit">
      <motion.path
        variants={curve({ initialPath, targetPath, finalPath })}
        initial="initial"
        animate="enter"
        exit="exit"
      />
    </motion.svg>
  );
};
