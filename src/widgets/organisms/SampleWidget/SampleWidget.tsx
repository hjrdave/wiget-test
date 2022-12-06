import React from 'react';
import styles from './SampleWidget.module.scss';

interface Props{
    message?: string;
};
export default function SampleWidget({message}: Props){

    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        setTimeout(() => {
            setCount(count + 1);
        }, 1000);
    },[count]);

    return(
        <>
            <div className={styles.compContainer}>
                <div style={{padding: '1rem'}}>
                <p>This is a Sample Widget</p>
                    <p>Message: {message}</p>
                    <p>Counter: {count}</p>
                </div>
            </div>
        </>
    )
}