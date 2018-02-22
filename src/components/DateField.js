import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';

class DateField extends Component {
    render() {
        return(
            <div>
                <label>Date Of Birth</label>
                <DayPickerInput/>
            </div>
        )
    }
}

export default DateField;