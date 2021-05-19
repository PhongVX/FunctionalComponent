import * as React from 'react';

interface ChildCountingProps {
    count: number,
    name: string,
};
const ChildCounting: React.FC<ChildCountingProps> = (props) => {
    const [countOdd, setCountOdd] = React.useState(0);
    const { name, count } = props;

    React.useEffect(()=>{
        console.log(count % 2);
        if (count % 2 != 0) {
            setCountOdd(count);
        }
    }, [count]);

    return (
        <>
            <p>{name}: {countOdd}</p>
        </>
    )
}

export default ChildCounting;