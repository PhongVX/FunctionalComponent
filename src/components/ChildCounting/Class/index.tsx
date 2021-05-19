import * as React from 'react';

interface ChildCountingProps {
    count: number,
    name: string,
};

class ChildCounting extends React.PureComponent<ChildCountingProps, any> {
    constructor(props: ChildCountingProps) {
        super(props);
    }
    render() {
        const { count, name } = this.props
        console.log('Render: ', name)
        return (
            <>
                <p>{name}: {count}</p>
            </>
        )
    }
}

export default ChildCounting;