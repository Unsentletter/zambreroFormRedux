import React, { Component } from 'react';

class NameField extends Component {
    render() {
        return(
            <div>
                <label>Name:</label><br/>
                <input type="text" name="name"/>
            </div>
        )
    }
}

export default NameField;