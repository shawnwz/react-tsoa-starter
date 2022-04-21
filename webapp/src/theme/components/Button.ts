/**
 * IMPORTS
 */

import { ComponentStyleConfig } from '@chakra-ui/react';

/**
 * CORE
 */

const Button: ComponentStyleConfig = {
  variants: {
    solid: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      borderRadius: '2rem',
      fontFamily: 'Gotham',
      boxShadow: 'brand.grey',
      iconSpacing: '0.5rem',
      _focus: {
        boxShadow: 'brand.grey!',
      },
    },
  },
  defaultProps: {
    size: 'lg',
  },
};

export default Button;
