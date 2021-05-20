import * as React from 'react';
import ButtonF from '../../../components/Button/Functional';
import Counting from '../../Counting';

const ParentCounting: React.FC<any> = (props) => {
    const countingRef = React.useRef() as any;
    const handleParentClickCount = () => {
        countingRef.current.onCount();
    }
    return (
        <div className='wrapper-sample-components text-center'>
            <h1>This is Parent Counting</h1>
            <ButtonF color='secondary' onClick={handleParentClickCount}>Click To Count</ButtonF>
            <hr/>
            <Counting ref={countingRef}/>
        </div>
    )
}

export default ParentCounting;