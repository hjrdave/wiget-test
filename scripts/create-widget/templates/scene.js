export const sceneTemplate = (widgetName) =>  (`
    import React from 'react';
    import ${widgetName[0].toUpperCase() + widgetName.substring(1)} from '../../../widgets/components/organisms/${widgetName[0].toUpperCase() + widgetName.substring(1)}';

    interface Props{

    };

    export default function Scene({}: Props){

        return(
            <>
                <${widgetName[0].toUpperCase() + widgetName.substring(1)}/>
            </>
        )
    }
`);
