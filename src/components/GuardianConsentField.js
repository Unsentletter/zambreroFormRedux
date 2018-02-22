import React, { Component } from 'react';

class GuardianConsentField extends Component {
    render() {
        return(
            <div>
                <label>Do you require guardian consent</label>
                <input name='consentRequired' type='checkbox' />
            </div>
        )
    }
}

export default GuardianConsentField;