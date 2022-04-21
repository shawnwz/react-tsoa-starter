/**
 * IMPORTS
 */

import { ComponentStyleConfig } from '@chakra-ui/react';

/**
* CORE
*/

const Checkbox: ComponentStyleConfig = {
  baseStyle: ({ colorScheme }) => ({
    control: {
      borderColor: colorScheme,
      background: 'white',
    },
    label: {
      textStyle: 'sm',
    },
    icon: {
      color: colorScheme,
    },
  }),
  sizes: {
    xl: {
      control: {
        w: 9,
        h: 9,
        borderRadius: '0.5rem',
      },
      icon: {
        fontSize: '2rem',
      },
    },
  },
  defaultProps: {
    size: 'xl',
    colorScheme: 'brand.purple',
  },
};

export default Checkbox;
