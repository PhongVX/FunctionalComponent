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
        return (
            <>
                <p>{name}: {count}</p>
            </>
        )
    }
}

export default ChildCounting;