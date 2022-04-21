/**
 * IMPORTS
 */

import colors from './colors';

/**
 * CORE
 */

const shadows: Record<string, unknown> = {
  outline: 'unset',
  brand: {
    purple: `0px 0px 6px ${colors.brand.purple}`,
    grey: '0px 4px 20px 0px rgb(0 0 0 / 25%)',
    'grey!': '0px 4px 20px 0px rgb(0 0 0 / 25%)!important',
  },
};

export default shadows;
