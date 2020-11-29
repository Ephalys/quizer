export const EntryWrapperVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2
    }
  },
};

export const EntryItemVariants = {
  hidden: {
    y: -50,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  }
};