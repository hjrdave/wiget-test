import React from 'react';
import useHTML from '../../../hooks/use-html';

interface Props {
    content?: string;
    type?: 'html' | 'javascript' | 'text'
    bindData?: {
        [key: string]: string;
    }
};

export default function ContentBlock({ content, bindData, type }: Props) {

    const html = useHTML();

    return (
        <>
            {
                (type === 'html') ?
                    html.htmlFrom((content) ? content : '', { bindData: bindData })
                    : null
            }
        </>
    )
}