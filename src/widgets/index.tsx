/**
 * This index is used as an entry point into library bundle
 * based on https://ohsnail.com/building-a-react-app-as-a-widget-using-webpack/ 
 */
import React from 'react';
 import {default as SampleWidgetComp} from './organisms/SampleWidget';
 import Widget from './Widget';
 import {IWidget} from './interfaces';


type SampleWidgetProps = {message: string} | IWidget.Props;
export const initSampleWidget = (init: IWidget.Init<SampleWidgetProps>) => (
    new Widget<SampleWidgetProps>({
        selector: init.selector, 
        component: SampleWidgetComp, 
        props: init.props
    })
);

