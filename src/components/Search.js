import React, {Component} from 'react';
import {AutoComplete} from 'antd';

class Search extends Component {
    onSelect = (value) => {
        console.log('onSelect', value);
    };

    handleSearch = (inputValue, option) => {
        return option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    };

    render() {
        const {dataSource, handleSelect} = this.props;
        return (
            <AutoComplete
                dataSource={dataSource}
                style={{width: 200}}
                onSelect={handleSelect}
                placeholder="input here"
                filterOption={this.handleSearch}
            />
        );
    }
}

export default Search
