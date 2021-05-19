import * as React from 'react';
import ButtonF from '../../components/Button/Functional';
import ButtonC from '../../components/Button/Class';
import TextFieldF from '../../components/TextField/Functional';
import TextFieldC from '../../components/TextField/Class';

import './styles.scss';

const SampleComponents: React.FC<any> = (props) => {
    const sayHello = () => {
        alert('Hello World');
    }
    const handleOnChangeTextField = (e: any) => {
        console.log(e.target.value);
    }
    return (
        <div className='wrapper-sample-components'>
            <br />
            <br />
            <ButtonF className='element-100-percent-width' color='primary' onClick={sayHello}>FunctionalComponent Button</ButtonF>
            <br />
            <br />
            <ButtonC className='element-100-percent-width' color='secondary' onClick={sayHello}>ClassComponent Button</ButtonC>
            <br />
            <br />
            <ButtonF className='element-100-percent-width' disabled onClick={sayHello}>FunctionalComponent Disabled Button</ButtonF>
            <br />
            <br />
            <ButtonC className='element-100-percent-width' disabled onClick={sayHello}>ClassComponent Disabled Button</ButtonC>
            <br />
            <br />
            <TextFieldF className='element-100-percent-width' placeHolder='Sample Functional TextField' onChange={handleOnChangeTextField} />
            <br />
            <br />
            <TextFieldF className='element-100-percent-width' disabled placeHolder='Sample Functional TextField Disabled' onChange={handleOnChangeTextField} />
            <br />
            <br />
            <TextFieldC className='element-100-percent-width' placeHolder='Sample Class TextField' onChange={handleOnChangeTextField} />
            <br />
            <br />
            <TextFieldC className='element-100-percent-width' disabled placeHolder='Sample Class Disabled' onChange={handleOnChangeTextField} />
        </div>
    )
}

export default SampleComponents;