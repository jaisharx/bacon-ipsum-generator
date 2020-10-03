import React, { Component } from 'react';

export class Select extends Component {
    render() {
        return (
            <div>
                <select
                    className="form-control"
                    onChange={(e) =>
                        this.props.changeType(this.props.type, e.target.value)
                    }
                >
                    <option value="json">JSON</option>
                    <option value="html" selected>HTML</option>
                    <option value="text">TEXT</option>
                </select>
            </div>
        );
    }
}

export default Select;
