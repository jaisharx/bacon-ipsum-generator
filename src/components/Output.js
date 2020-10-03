import React, { Component } from 'react';

export class Output extends Component {
    render() {
        return <div className="mt-2">{this.props.value}</div>;
    }
}

export default Output;
