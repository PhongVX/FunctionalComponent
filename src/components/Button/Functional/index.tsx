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

const Button: React.FC<ButtonProps> = (props) => {
    const {children, className, style, color, disabled, onClick} = props;
    return (
        <button 
            style={{...style}}
            className={classNames('btn', className, (color || 'default'))}
            disabled={disabled} 
            onClick={onClick}>
            {children}
        </button>
    )
}


// function Button(props:ButtonProps){
//     const {childrens} = props;
//     return (
//         <button>{childrens}</button>
//     )
// }

export default Button;