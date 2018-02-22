import React, { Component } from 'react';

class ContactNumberField extends Component {
    render() {
        return(
            <div>
                <label>Contact Number</label><br/>
                <input type="text"name="contactNumber.home"/><br/>
                <input type="text"name="contactNumber.work"/><br/>
                <input type="text"name="contactNumber.mobile"/><br/>
            </div>
        )
    }
}

export default ContactNumberField;