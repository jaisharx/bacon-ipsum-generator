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
                    <option value="all-meat">Meat Only</option>
                    <option value="meat-and-filler">Meat Mixed</option>
                </select>
            </div>
        );
    }
}

export default Select;
