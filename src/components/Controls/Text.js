import React, { Component } from 'react';

export class Text extends Component {
    render() {
        return (
            <div>
                <input
                    min="1"
                    className="form-control"
                    type="number"
                    value={this.props.value}
                    onChange={(e) => this.props.changeType("paras", e.target.value)}
                />
            </div>
        );
    }
}

export default Text;
