import React from 'react';
import './index.scss';
import {connect} from 'react-redux';
import * as actions from '../action'; 
import { bindActionCreators } from 'redux';
class Step3 extends React.Component {
	constructor(props) {
		super(props);

	}

 
	render() {
		return (
			<div>
                cccccccc
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	state: state.uploadInformationReducer
})
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Step3);