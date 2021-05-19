import * as React from 'react';
import classNames from 'classnames';

interface ButtonProps {
    onChange?: (event: any) => void
    onInput?: (event: any) => void
    onKeyPress?: (event: any) => void
    onKeyDown?: (event: any) => void
    placeHolder?: string
    value?: string
    defaultValue?: string
    type?: string
    style?: object
    disabled?: boolean
    className?: string
}

const TextField: React.FC<ButtonProps> = (props) => {
    const {style, type, disabled, className, ...restProps} = props;
    return (
        <input
            {...restProps}
            style={{...style}} 
            type={type || 'text'}
            disabled={disabled} 
            className={classNames('text-field', className)}
        />
    )
}

export default TextField;