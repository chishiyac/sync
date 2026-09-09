export const mutation = {
  goDown: {
    animate: {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0
    },
    initial: {
      opacity: 0,
      y: -16
    }
  },
  goUp: {
    animate: {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0
    },
    initial: {
      opacity: 0,
      y: 16
    }
  },
  reveal: {
    animate: {
      filter: 'blur(0px)',
      opacity: 1
    },
    initial: {
      filter: 'blur(8px)',
      opacity: 0
    }
  },
  slideToLeft: {
    animate: {
      filter: 'blur(0px)',
      opacity: 1,
      x: 0
    },
    initial: {
      opacity: 0,
      x: -16
    }
  },
  slideToRight: {
    animate: {
      filter: 'blur(0px)',
      opacity: 1,
      x: 0
    },
    initial: {
      opacity: 0,
      x: 16
    }
  }
}
