import * as React from 'react';

interface ChildCountingProps {
    count: number,
    name: string,
};
const ChildCounting: React.FC<ChildCountingProps> = React.memo((props) => {
    const {count, name} = props;
    console.log('Render: ', name)
    return (
        <>
            <p>{name}: {count}</p>
        </>
    )
})

export default ChildCounting;