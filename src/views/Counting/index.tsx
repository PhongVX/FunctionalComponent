import * as React from 'react';
import ButtonF from '../../components/Button/Functional';
import ChildCountingF from '../../components/ChildCounting/Functional';
import ChildCountingC from '../../components/ChildCounting/Class';

const Counting: React.FC<any> = (props) => {
    const [count, setCount] = React.useState(0);
    // 1. call everytime
    React.useEffect(() => {
        console.log('Call everytime');
    });
    // 2. call only on mount
    React.useEffect(() => {
        console.log('Call only on mount');
        return () => { 
            console.log('Call only on unmount');
        }
    },[]);
    // 3. listen certain variable changes
    React.useEffect(() => {
        console.log('Call only when a certain variable changes: Count=', count);
    },[count]);
    
    const handleCount = () => { 
        setCount(count+1);
    }

    return (
        <div className='wrapper-sample-components text-center'>
            <h1>{count}</h1>
            <ChildCountingF name='Child Counting Functional' count={count} />
            <ChildCountingC name='Child Counting Class' count={count} />
            <ButtonF color='secondary' onClick={handleCount}>Count</ButtonF>
        </div>
    )
}

export default Counting;