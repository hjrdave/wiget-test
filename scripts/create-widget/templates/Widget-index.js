export const widgetIndexTemplate = (widgetName) => (`
import ${widgetName[0].toUpperCase() + widgetName.substring(1)} from './${widgetName[0].toUpperCase() + widgetName.substring(1)}';

export default ${widgetName[0].toUpperCase() + widgetName.substring(1)};
`);