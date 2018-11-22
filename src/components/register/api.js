import React from 'react';
import ReactDom from 'react-dom';
import UserRegister from './index';

/**
 * @description     用户注册弹窗
 * @author Bin
 * @date 2018-11-20     
 * @export
 */
export default function showRegisater() {
    let func = () => {
        let element = document.getElementById('userRegister');
        if(element) element.parentNode.removeChild(element);
    }
    let div = document.createElement('div');
    div.id = 'userRegister';
    document.getElementById('content').appendChild(div);

    ReactDom.render(
        <UserRegister
            onClose = {func}
        >
        </UserRegister>,
        document.getElementById('userRegister')
    );
}