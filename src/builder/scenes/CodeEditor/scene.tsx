
import React from 'react';
import CodeEditor from '../../../widgets/components/organisms/CodeEditor';
import ContentBlock from '../../../widgets/components/organisms/ContentBlock';

interface Props {

};

export default function Scene({ }: Props) {

    const [codeString, setCodeString] = React.useState('');
    const data = {
        firstName: 'Chuck',
        lastName: 'Norris',
        title: 'Ninja Cowboy'
    }

    return (
        <>
            <CodeEditor onChange={(value) => setCodeString((value) ? value : '')} />
            <div style={{ border: '1px solid grey', width: '100%' }} className={'mt-2 p-2'}>
                <ContentBlock
                    type={'html'}
                    content={codeString}
                    bindData={data}
                />
            </div>
        </>
    )
}
