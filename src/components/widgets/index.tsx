/**
 * This index is used as an entry point into library bundle
 * based on https://ohsnail.com/building-a-react-app-as-a-widget-using-webpack/ 
 */

 import React from 'react';
 import { createRoot } from 'react-dom/client';
 import {default as SampleWidgetComp} from './organisms/SampleWidget';

interface Init{
    selector: string;
    message: string;
}
export const SampleWidget = (init: Init) => {
    const el = document.querySelector(init.selector);
    if(el !== null && el !== undefined){
        const root = createRoot(el);
        return root.render(<SampleWidgetComp message={init.message} el={el}/>);
    }
    return console.warn('ReactWidget: Target Selector does not exist.');
}
