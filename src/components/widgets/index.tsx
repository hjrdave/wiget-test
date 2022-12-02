/**
 * This index is used as an entry point into library bundle
 * based on https://ohsnail.com/building-a-react-app-as-a-widget-using-webpack/ 
 */

 import {default as SampleWidgetComp} from './organisms/SampleWidget';
 import Widget from '../../utils/create-widget';

interface Init{
    selector: string;
    message: string;
}
export const initSampleWidget = (init: Init) => (new Widget({selector: init.selector, component: SampleWidgetComp, message: init.message}));

