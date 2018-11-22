import React from 'react';
// import './index.scss';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import LearnHome from './learnHome/index';
import {Dialog,Button} from 'qnui';
class Mood extends React.Component {

	render() {
		const popupCustomize = () => {
			const dialog = Dialog.alert({
				// 这个needWrapper是控制图标是否出现
				needWrapper: false,
				content: '测试Dialog',
				title: '测试',
				// 我主要测试的元原因是 : 它的关闭是调用了 dialog.hide()
				footer: <Button type="primary" onClick={() => dialog.hide()}>关闭-dialog.hide()</Button>
			});
		};
		return (
			<div>
				{/* <Button onClick={popupCustomize}>Customize content & button</Button>
				<Button>千牛UI的按钮</Button>
				<Button>视频播放可以使用:react-h5-video</Button> */}
				{/* <video   controls="controls" autoplay src="http://supermanbin.oss-cn-beijing.aliyuncs.com/1-1%20%E8%AF%BE%E7%A8%8B%E4%BB%8B%E7%BB%8D.mp4"></video> */}
				{/* <video   controls="controls" autoplay src="http://supermanbin.oss-cn-beijing.aliyuncs.com/Pexels%20Videos%201502318.mp4"></video> */}
				{/* <video   controls="controls" autoplay src="http://supermanbin.oss-cn-beijing.aliyuncs.com/%E6%88%91%E7%9A%84%E5%B0%8F%E5%BD%A4%E5%BD%A4-cut.mp4"></video> */}
				<LearnHome/>
			</div>
		) 
	} 
}




// const mapStateToProps = (state) => ({
// 	state: state.SmallToolsReducer
// })
// const mapDispatchToProps = (dispatch) => {
// 	return bindActionCreators({},dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Learn);

export default Mood;