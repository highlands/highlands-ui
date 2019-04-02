function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] });
  const iconName = componentName.name;

  return typeScriptTpl.ast`
    import React from 'react';

    const ${iconName} = (props) => ${jsx};

    export default ${iconName};
  `
}

module.exports = template
