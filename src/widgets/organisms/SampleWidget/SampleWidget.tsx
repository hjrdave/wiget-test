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
                <div className={`p-3 d-flex flex-column align-items-center`}>
                    <h4>Counter Widget</h4>
                    <p><strong>Message:</strong> {message}</p>
                    <p className={styles.count}>{count}</p>
                </div>
            </div>
        </>
    )
}