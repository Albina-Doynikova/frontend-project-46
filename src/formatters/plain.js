const formatValue = (value) => {
    if (value === null) return 'null';
    if (typeof value === 'string') return `'${value}'`;
    if (typeof value === 'object') return '[complex value]';
    return String(value);
  };
  
  const plain = tree => {
    const iter = (node, path) => {
      return node.flatMap((item) => {
        const property = path ? `${path}.${item.key}` : item.key;
  
        switch (item.type) {
          case 'added':
            return `Property '${property}' was added with value: ${formatValue(item.value)}`;
          case 'removed':
            return `Property '${property}' was removed`;
          case 'changed':
            return `Property '${property}' was updated. From ${formatValue(item.oldValue)} to ${formatValue(item.newValue)}`;
          case 'nested':
            return iter(item.children, property);
          default:
            return [];
        }
      }).join('\n');
    };
    return iter(tree, '');
  };
  
  export default plain;