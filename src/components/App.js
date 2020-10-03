import React, { Component } from 'react';
import axios from 'axios';

import Output from './Output';
import SelectType from './Controls/SelectType';
import SelectFormat from './Controls/SelectFormat';
import Text from './Controls/Text';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paras: 4,
            type: 'all-meat',
            format: 'html',
            text: '',
        };
    }

    componentDidMount() {
        this.getSampleText();
    }

    getSampleText() {
        const { paras, type, format } = this.state;
        axios
            .get(
                `https://baconipsum.com/api/?type=${type}&paras=${paras}&format=${format}`
            )
            .then((res) => {
                this.setState({
                    text: res.data,
                });
            })
            .catch((err) => console.log(err));
    }

    changeType = (type, val) => {
        this.setState(
            {
                [type]: val,
            },
            this.getSampleText
        );
    };

    render() {
        return (
            <div className="container container mt-4">
                <h1>Bacon Ipsum Text Generator</h1>
                <hr />
                <form className="form-inline">
                    <div className="form-group">
                        <label className="mr-2">Type:</label>
                        <SelectType
                            type="type"
                            value={this.state.type}
                            changeType={this.changeType}
                        />
                    </div>

                    <div className="form-group ml-3">
                        <label className="mr-2">Format:</label>
                        <SelectFormat
                            type="format"
                            value={this.state.format}
                            changeType={this.changeType}
                        />
                    </div>

                    <div className="form-group ml-3">
                        <label className="mr-2">Paras:</label>
                        <Text
                            value={this.state.paras}
                            changeType={this.changeType}
                        />
                    </div>
                </form>
                <Output value={this.state.text} />
            </div>
        );
    }
}

export default App;
