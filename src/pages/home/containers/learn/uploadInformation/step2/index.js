import React from 'react';
import './index.scss';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../action'; 
// import { bindActionCreators } from 'redux';
class Step2 extends React.Component {
	constructor(props) {
		super(props);

	}

 
	render() {
		return (
			<div>
                bbbbbbb
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Step2);