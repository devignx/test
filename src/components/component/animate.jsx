import { motion } from "framer-motion";

const animationVariants = {
    hidden: {
        clipPath: "inset(0 0 100% 0)",
    },
    visible: {
        clipPath: "inset(0 0 0 0)",
        transition: {
            duration: 1,
            ease: [0.44, -0.01, 0, 0.99],
        },
    },
    exit: {
        clipPath: "inset(0 0 100% 0)",
        transition: {
            duration: 1,
            ease: [0.44, -0.01, 0, 0.99],
        },
    },
};

const Animated = ({ isVisible, children, className, ref }) => {
    return (
        <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            exit="exit"
            ref={ref}
            variants={animationVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default Animated;
