import * as React from 'react';
import classNames from 'classnames';

type Color = 'primary' | 'secondary' | 'default';

interface ButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    style?: any
    children?: any
    color?: Color
    disabled?: boolean,
    className?: string
}

class Button extends React.Component<ButtonProps, any> {
    constructor(props:ButtonProps){
        super(props);
    }
    render(){
        const {children, className, style, color, disabled, onClick} = this.props
        return (
            <button 
                disabled={disabled} 
                onClick={onClick}
                style={{...style}}
                className={classNames('btn', className, (color || 'default'))}
                >
                {children}
            </button>
        )
    }
}

export default Button;