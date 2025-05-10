import plain from './plain.js';
import stylish from './stylish.js';

const format = (data, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylish(data);
    case 'plain':
      return plain(data);
    case 'json':
      return JSON.stringify(data);
    default:
      throw new Error(`Format name ${formatName} doesn't exist`);
  }
};

export default format;
