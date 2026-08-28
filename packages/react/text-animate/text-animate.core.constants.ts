import type { Variants } from 'motion/react'
import { motion } from 'motion/react'

import type {
  TextAnimateAnimationType,
  TextAnimateAnimationVariant
} from './text-animate.core'

const TEXT_ANIMATE_STAGGER_TIMINGS: Record<
  TextAnimateAnimationType,
  number
> = {
  character: 0.03,
  line: 0.06,
  text: 0.06,
  word: 0.05
}

const TEXT_ANIMATE_DEFAULT_CONTAINER_VARIANTS = {
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  },
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.05
    }
  }
}

const TEXT_ANIMATE_DEFAULT_ITEM_VARIANTS: Variants = {
  exit: {
    opacity: 0
  },
  hidden: { opacity: 0 },
  show: {
    opacity: 1
  }
}

const TEXT_ANIMATE_DEFAULT_ITEM_ANIMATION_VARIANTS: Record<
  TextAnimateAnimationVariant,
  { container: Variants; item: Variants }
> = {
  blurIn: {
    container: TEXT_ANIMATE_DEFAULT_CONTAINER_VARIANTS,
    item: {
      exit: {
        filter: 'blur(10px)',
        opacity: 0,
        transition: { duration: 0.3 }
      },
      hidden: { filter: 'blur(10px)', opacity: 0 },
      show: {
        filter: 'blur(0px)',
        opacity: 1,
        transition: {
          duration: 0.3
        }
      }
    }
  },
  blurInDown: {
    container: TEXT_ANIMATE_DEFAULT_CONTAINER_VARIANTS,
    item: {
      hidden: { filter: 'blur(10px)', opacity: 0, y: -20 },
      show: {
        filter: 'blur(0px)',
        opacity: 1,
        transition: {
          filter: { duration: 0.3 },
          opacity: { duration: 0.4 },
          y: { duration: 0.3 }
        },
        y: 0
      }
    }
  },
  blurInUp: {
    container: TEXT_ANIMATE_DEFAULT_CONTAINER_VARIANTS,
    item: {
      exit: {
        filter: 'blur(10px)',
        opacity: 0,
        transition: {
          filter: { duration: 0.3 },
          opacity: { duration: 0.4 },
          y: { duration: 0.3 }
        },
        y: 20
      },
      hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
      show: {
        filter: 'blur(0px)',
        opacity: 1,
        transition: {
          filter: { duration: 0.3 },
          opacity: { duration: 0.4 },
          y: { duration: 0.3 }
        },
        y: 0
      }
    }
  },
  fadeIn: {
    container: TEXT_ANIMATE_DEFAULT_CONTAINER_VARIANTS,
    item: {
      exit: {
        opacity: 0,
        transition: { duration: 0.3 },
        y: 20
      },
      hidden: { opacity: 0, y: 20 },
      show: {
        opacity: 1,
        transition: {
          duration: 0.3
        },
        y: 0
      }
    }
  },
  scaleDown: {
    container: TEXT_ANIMATE_DEFAULT_CONTAINER_VARIANTS,
    item: {
      exit: {
        opacity: 0,
        scale: 1.5,
        transition: { duration: 0.3 }
      },
      hidden: { opacity: 0, scale: 1.5 },
      show: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.3,
          scale: {
            damping: 15,
            stiffness: 300,
            type: 'spring'
          }
        }
      }
    }
  },
  scaleUp: {
    container: TEXT_ANIMATE_DEFAULT_CONTAINER_VARIANTS,
    item: {
      exit: {
        opacity: 0,
        scale: 0.5,
        transition: { duration: 0.3 }
      },
      hidden: { opacity: 0, scale: 0.5 },
      show: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.3,
          scale: {
            damping: 15,
            stiffness: 300,
            type: 'spring'
          }
        }
      }
    }
  },
  slideDown: {
    container: TEXT_ANIMATE_DEFAULT_CONTAINER_VARIANTS,
    item: {
      exit: {
        opacity: 0,
        transition: { duration: 0.3 },
        y: 20
      },
      hidden: { opacity: 0, y: -20 },
      show: {
        opacity: 1,
        transition: { duration: 0.3 },
        y: 0
      }
    }
  },
  slideLeft: {
    container: TEXT_ANIMATE_DEFAULT_CONTAINER_VARIANTS,
    item: {
      exit: {
        opacity: 0,
        transition: { duration: 0.3 },
        x: -20
      },
      hidden: { opacity: 0, x: 20 },
      show: {
        opacity: 1,
        transition: { duration: 0.3 },
        x: 0
      }
    }
  },
  slideRight: {
    container: TEXT_ANIMATE_DEFAULT_CONTAINER_VARIANTS,
    item: {
      exit: {
        opacity: 0,
        transition: { duration: 0.3 },
        x: 20
      },
      hidden: { opacity: 0, x: -20 },
      show: {
        opacity: 1,
        transition: { duration: 0.3 },
        x: 0
      }
    }
  },
  slideUp: {
    container: TEXT_ANIMATE_DEFAULT_CONTAINER_VARIANTS,
    item: {
      exit: {
        opacity: 0,
        transition: {
          duration: 0.3
        },
        y: -20
      },
      hidden: { opacity: 0, y: 20 },
      show: {
        opacity: 1,
        transition: {
          duration: 0.3
        },
        y: 0
      }
    }
  }
}

const TEXT_ANIMATE_MOTION_ELEMENTS = {
  article: motion.article,
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
  li: motion.li,
  p: motion.p,
  section: motion.section,
  span: motion.span
} as const

export {
  TEXT_ANIMATE_DEFAULT_CONTAINER_VARIANTS,
  TEXT_ANIMATE_DEFAULT_ITEM_ANIMATION_VARIANTS,
  TEXT_ANIMATE_DEFAULT_ITEM_VARIANTS,
  TEXT_ANIMATE_MOTION_ELEMENTS,
  TEXT_ANIMATE_STAGGER_TIMINGS
}
