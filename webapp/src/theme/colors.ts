/**
 * CORE
 */

type ColorName =
  | 'darkGrey'
  | 'grey'
  | 'lightGrey'
  | 'black'
  | 'blue'
  | 'darkBlue'
  | 'green'
  | 'orange'
  | 'purple';

type BrandColors = {
  brand: Record<ColorName, string>
};

const colors: BrandColors = {
  brand: {
    darkGrey: '#545757',
    grey: '#A9A9A9',
    lightGrey: '#E6E7E8',
    black: '#000000',
    blue: '#0096D7',
    darkBlue: '#2D46A5',
    green: '#4DAF37',
    orange: '#FF5541',
    purple: '#7828B9',
  },
};

export default colors;
