const getIndent = (depth, spacesCount = 4) => ' '.repeat(depth * spacesCount - 2);
const getBracketIndent = (depth, spacesCount = 4) => ' '.repeat(depth * spacesCount - spacesCount);

const stringify = (value, depth) => {
  if (typeof value !== 'object' || value === null) {
    return String(value);
  }

  const entries = Object.entries(value);
  const lines = entries.map(
    ([key, val]) => `${getIndent(depth + 1)}  ${key}: ${stringify(val, depth + 1)}`
  );

  return `{\n${lines.join('\n')}\n${getBracketIndent(depth + 1)}}`;
};

const stylish = (tree, depth = 1) => {
  const lines = tree.map((node) => {
    const indent = getIndent(depth);
    const {
      key, type, value, oldValue, newValue, children,
    } = node;

    switch (type) {
      case 'added':
        return `${indent}+ ${key}: ${stringify(value, depth)}`;
      case 'removed':
        return `${indent}- ${key}: ${stringify(value, depth)}`;
      case 'unchanged':
        return `${indent}  ${key}: ${stringify(value, depth)}`;
      case 'changed':
        return [
          `${indent}- ${key}: ${stringify(oldValue, depth)}`,
          `${indent}+ ${key}: ${stringify(newValue, depth)}`,
        ].join('\n');
      case 'nested':
        return `${indent}  ${key}: ${stylish(children, depth + 1)}`;
      default:
        throw new Error(`Unknown node type: ${type}`);
    }
  });

  return `{\n${lines.join('\n')}\n${getBracketIndent(depth)}}`;
};

export default stylish;
