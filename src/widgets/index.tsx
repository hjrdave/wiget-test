/**
 * This index is used as an entry point into library bundle
 * based on https://ohsnail.com/building-a-react-app-as-a-widget-using-webpack/ 
 */
import React from 'react';
 import {default as SampleWidgetComp} from './organisms/SampleWidget';
 import Widget from './Widget';
 import {default as FooterWidget} from './organisms/Footer';
 import {IWidget} from './interfaces';


type SampleWidgetProps = {} | IWidget.Props;
export const initSampleWidget = (init: IWidget.Init<SampleWidgetProps>) => (
    new Widget<SampleWidgetProps>({
        selector: init.selector, 
        component: SampleWidgetComp, 
        props: init.props
    })
);

type FooterWidgetProps = {} | IWidget.Props;
export const initFooter = (init: IWidget.Init<FooterWidgetProps>) => (
    new Widget<FooterWidgetProps>({
        selector: init.selector, 
        component: FooterWidget, 
        props: init.props
    })
);

