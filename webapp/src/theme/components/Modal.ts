/**
 * IMPORTS
 */

import { ComponentStyleConfig } from '@chakra-ui/react';

/**
 * CORE
 */

const Modal: ComponentStyleConfig = {
  parts: ['dialog'],
  baseStyle: {
    dialog: {
      borderRadius: '2rem',
      px: '2rem',
    },
  },
};

export default Modal;
