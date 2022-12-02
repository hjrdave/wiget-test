/**
 * This index is used as an entry point into library bundle
 * based on https://ohsnail.com/building-a-react-app-as-a-widget-using-webpack/ 
 */

 import React from 'react';
 import ReactDOM from 'react-dom';
 import SampleWidget from './organisms/SampleWidget';

interface Init{
    selector: string;
}

 const ReactWidget = {
    sampleWidget: (init: Init) => (
        ReactDOM.render(<SampleWidget />, document.querySelector(init.selector))
    )
 }
 
 export default ReactWidget;
