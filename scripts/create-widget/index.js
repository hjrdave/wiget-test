import fs from 'fs';
import promptSync from 'prompt-sync';
import {widgetTemplate as createWidgetTemplate} from './templates/Widget.js';
import {widgetIndexTemplate as createWidgetIndexTemplate} from './templates/Widget-index.js';
import {sceneTemplate as createSceneTemplate} from './templates/scene.js';
import {Navigation as NavigationData} from '../../src/builder/Navigation.js';

promptSync();
const prompt = promptSync({sigint: true});
const widgetName = prompt("Name of new widget? ").toString().toLowerCase();

//template path
const templateInputPath = './scripts/create-widget/templates';

//Scene Templates and Paths
const sceneOutputPath = `./src/builder/scenes/${widgetName[0].toUpperCase() + widgetName.substring(1)}`;
const sceneTemplate = createSceneTemplate(widgetName);
const sceneIndexTemplate = fs.readFileSync(`${templateInputPath}/scene-index.tsx`, "utf8");

//Widget Templates and Paths
const widgetOutputPath = `./src/widgets/components/organisms/${widgetName[0].toUpperCase() + widgetName.substring(1)}`;
const widgetTemplate = createWidgetTemplate(widgetName);
const widgetIndexTemplate = createWidgetIndexTemplate(widgetName);
const widgetStyleTemplate = fs.readFileSync(`${templateInputPath}/Widget.module.scss`, "utf8");

//creates base Scene files and outputs them to builder/scenes/[widgetName] dir
const generateSceneFiles = () => {
    fs.writeFile(`${sceneOutputPath}/scene.tsx`, sceneTemplate, function (err) {
      if (err) throw err;
      console.log(`${sceneOutputPath}/scene.tsx`);
    });

    fs.writeFile(`${sceneOutputPath}/index.tsx`, sceneIndexTemplate, function (err) {
      if (err) throw err;
      console.log(`${sceneOutputPath}/index.tsx`);
    });
}

//creates base Widget files and outputs them to widgets/components/organisms/[widgetName] dir
const generateWidgetFiles = () => {
  fs.writeFile(`${widgetOutputPath}/${widgetName[0].toUpperCase() + widgetName.substring(1)}.tsx`, widgetTemplate, function (err) {
    if (err) throw err;
    console.log(`${widgetOutputPath}/${widgetName[0].toUpperCase() + widgetName.substring(1)}.tsx`);
  });

  fs.writeFile(`${widgetOutputPath}/index.tsx`, widgetIndexTemplate, function (err) {
    if (err) throw err;
    console.log(`${widgetOutputPath}/index.tsx`);
  });

  fs.writeFile(`${widgetOutputPath}/${widgetName[0].toUpperCase() + widgetName.substring(1)}.module.scss`, widgetStyleTemplate, function (err) {
    if (err) throw err;
    console.log(`${widgetOutputPath}/${widgetName[0].toUpperCase() + widgetName.substring(1)}.module.scss`);
  });
}

//update navigation data file in App
const updateAppNavigationData = () => {
  const nav = [...NavigationData, {text: widgetName[0].toUpperCase() + widgetName.substring(1), path: `widget/${widgetName}`}];
  fs.writeFile(`./src/builder/Navigation.js`, `export const Navigation = ${JSON.stringify(nav)}`, function (err) {
    if (err) throw err;
    console.log(`App navigation data updated.`);
  });
}

//Start Widget creation
fs.access(widgetOutputPath, (error) => {
  if (error) {
    fs.mkdir(widgetOutputPath, (error) => {
      if (error) {
        console.log(error);
      } 
    });
    generateWidgetFiles();
  } 
  else {
    generateWidgetFiles();
  }
});

//Start Scene creation
fs.access(sceneOutputPath, (error) => {
  if (error) {
    fs.mkdir(sceneOutputPath, (error) => {
      if (error) {
        console.log(error);
      }
    });
    generateSceneFiles();
  } 
  else {
    generateSceneFiles();
  }
});

//update navigation data
updateAppNavigationData();




 
