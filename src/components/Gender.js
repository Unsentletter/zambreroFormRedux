import React, { Component } from 'react';

class GenderField extends Component {
    render() {
        return(
            <div>
                <label>Gender</label>
                <select name='gender'>
                    <option value='0'>Male</option>
                    <option value='1'>Female</option>
                </select>
            </div>
        )
    }
}

export default GenderField;