const isObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);

const createTree = (obj1, obj2) => {
        const keys = [...new Set([...Object.keys(obj1), ...Object.keys(obj2)])].sort();

        return keys.map((key) => {
            const val1 = obj1[key];
            const val2 = obj2[key];
        
            if (!obj2.hasOwnProperty(key)) {
              return { key, type: 'removed', value: val1 };
            }
        
            if (!obj1.hasOwnProperty(key)) {
              return { key, type: 'added', value: val2 };
            }
        
            if (isObject(val1) && isObject(val2)) {
              return { key, type: 'nested', children: createTree(val1, val2) };
            }
        
            if (val1 !== val2) {
              return { key, type: 'changed', oldValue: val1, newValue: val2 };
            }
        
            return { key, type: 'unchanged', value: val1 };
          });
        };
        
        export default createTree;