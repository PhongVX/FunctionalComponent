import * as React from 'react';
import { Color as AlertColorType } from '@material-ui/lab/Alert';
import ButtonF from '../../../components/Button/Functional';
import Counting from '../../Counting';

class ParentCounting extends React.PureComponent<any, any> {
    private  countingRef = React.createRef() as any;
    constructor(props: any) {
        super(props);
    }
    handleParentClickCount = () => {
        this.countingRef.current.onCount();
    }
    render() {
        return (
            <div className='wrapper-sample-components text-center'>
            <h1>This is Parent Counting</h1>
            <ButtonF color='secondary' onClick={this.handleParentClickCount}>Click To Count</ButtonF>
            <hr/>
            <Counting ref={this.countingRef}/>
        </div>
        )
    }

}

export default ParentCounting;