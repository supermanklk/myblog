var Tools = {
    // 验证手机号的有效性,可以接受 Number 也可以接受 字符串
    isPhone(phone) {
        if(!(/^1[34578]\d{9}$/.test(phone))){ 
            return false; 
        }else{
            return true;
        } 
    }
}

export const isPhone = Tools.isPhone.bind(Tools);