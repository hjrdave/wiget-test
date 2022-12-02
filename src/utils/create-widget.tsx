import React from 'react';
import { createRoot, Root } from 'react-dom/client';
interface Init{
    component: (props: React.ComponentProps<any>) => JSX.Element;
    props?: React.ComponentProps<any>;
    selector: string;
    message: string;
}

export default class Widget{
    private Component: (props: React.ComponentProps<any>) => JSX.Element;
    private selector: string;
    private message: string;
    private props: React.ComponentProps<any>;
    private el: Element | null;
    private root: Root | null;
    private render(): JSX.Element | void {
        if(this.root !== null){
            const Component = this.Component;
            return this.root.render(<Component {...this.props}/>);
        }
        console.warn('ReactWidget: Target Selector does not exist.');
    } 

    public unMount(): void {
        console.log('unMounted')
    }

    public setProps(props: React.ComponentProps<any>): void {
        this.props = props;
        this.render();
    }

    public constructor({component, selector, message, props}: Init){
        this.Component = component;
        this.selector = selector;
        this.message = message;
        this.props = props;
        this.el = document.querySelector(this.selector);
        this.root = (this.el !== null && this.el !== undefined) ? createRoot(this.el) : null;
        this.render();
    }
    
}
