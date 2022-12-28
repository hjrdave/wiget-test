import React from 'react';
import DesignViewFrame from '../../atoms/DesignViewFrame';
import CodeOutput from '../../organisms/CodeOutput';
import { TRawCSSImport } from '../../../hooks/use-css';
import styles from './CompBuilder.module.scss';

interface Props {
    children?: JSX.Element | JSX.Element[];
    compProps: { [key: string]: any };
    rawCssString: TRawCSSImport;
    cssNameSpaces: TRawCSSImport;
    CompToStaticHTML: (props: any) => JSX.Element;
};

export default function CompBuilder({ children, compProps, rawCssString, cssNameSpaces, CompToStaticHTML }: Props) {

    return (
        <>
            <div className='d-flex justify-content-between w-100 pb-3'>
                <div></div>
                <CodeOutput
                    compProps={compProps}
                    rawCssString={rawCssString}
                    cssNameSpaces={cssNameSpaces}
                    CompToStaticHTML={CompToStaticHTML}
                />
            </div>

            {/* Design View */}
            <DesignViewFrame>
                {children}
            </DesignViewFrame>
        </>
    )
}