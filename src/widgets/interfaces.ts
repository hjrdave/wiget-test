import React from 'react';

export declare namespace IWidget{
    type Props = any;
    interface Init<P = {[key:string]: any}>{
        component: (props: P) => JSX.Element;
        props?: P;
        selector: string;
    }
}