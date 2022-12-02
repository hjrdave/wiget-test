import React from 'react';

interface Props{
    message?: string;
    el?: any;
};
export default function SampleWidget({message, el}: Props){

    const param = document.getElementById('root')?.getAttribute('data-param');

    React.useEffect(() => {
        console.log(param)
    },[param]);

    return(
        <>
            <p>This is a Sample Widget</p>
            <p>Message: {message}</p>
            <button onClick={() => {
                const param = document.getElementById('root')?.getAttribute('data-param');
                //console.log(param)
            }}>Show Message in React</button>
        </>
    )
}