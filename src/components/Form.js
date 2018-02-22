import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { increaseCounter } from "../actions/index";
import ContactNumberField from './ContactNumberField';
import NameField from "./NameField";
import DateField from "./DateField";
import GenderField from "./Gender";
import GuardianConsentField from "./GuardianConsentField";
import GuardianDetails from "./GuardianDetails";

class Form extends Component {
    increaseCounter = () => {
        console.log("props", this.props.state.counter);
        this.props.increaseCounter();
    };

    render() {
        return (
            <div>
                <NameField/>
                <DateField/>
                <GenderField/>
                <ContactNumberField/>
                <GuardianConsentField/>
                <GuardianDetails/>
                <button onClick={this.increaseCounter}>Click</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {state}
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ increaseCounter }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);