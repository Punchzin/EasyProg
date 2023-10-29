const ParentFade = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: { ease: 'easeInOut' },
    },
};

const ChildFade = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: { ease: 'easeInOut' },
    },
};

export default { ParentFade, ChildFade };
