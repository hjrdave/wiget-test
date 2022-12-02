/**
 * Widget class for creating widget instances for library
 */
import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import {IWidget} from './interfaces';


export default class Widget<P>{

    //private properties
    private Component: (props: React.ComponentProps<any>) => JSX.Element;
    private selector: string;
    private props: React.ComponentProps<any>;
    private target: Element | null;
    private root: Root | null;

    //renders component
    private render(): JSX.Element | void {
        if(this.root !== null){
            const Component = this.Component;
            console.log('Mounted');
            return this.root.render(<Component {...this.props}/>);
        }
        console.warn('ReactWidget: Target Selector does not exist.');
    } 

    //unmounts component
    public unMount(): void {
        this.root?.unmount();
        console.log('unMounted');
    }

    //sets component props
    public setProps(props: React.ComponentProps<any>): void {
        this.props = {...this.props, ...props};
        this.render();
    }

    //instanciates widget
    public constructor({component, selector, props}: IWidget.Init){
        this.Component = component;
        this.selector = selector;
        this.props = props;
        this.target = document.querySelector(this.selector);
        this.root = (this.target !== null && this.target !== undefined) ? createRoot(this.target) : null;
        this.render();
    }
    
}
