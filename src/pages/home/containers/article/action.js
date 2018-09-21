const TYPE = 'TYPE'

/**
 * Author : Bin
 * date : 2018/9/21
 */

export function demo() {
    let data = 'demo'
    return (dispatch,getState) => {
        // 说明：此时article组件已经与redux配合了，组件内已经有 state属性与demo属性。已经在组件index内打印出来，可以查看后台。
        // 具体流程就是： 在index.js调用 this.props.demo 
        // 触发dispatch 携带数据到reducer，根据dispatch的type做数据处理，并返回给index组件页面. 
        // 只要触发了action 没问题的情况下页面的this.props就会有新的值
        dispatch({
            type : TYPE,
            payload : data  
        })
    }
}