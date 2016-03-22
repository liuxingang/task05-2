/**
 * Created by Administrator on 15-11-29.
 */
function count(x) {
    var oneNumber = document.getElementById("oneNumber").value - 0;//获取用户输入的值并转换成数字
    var twoNumber = document.getElementById("twoNumber").value - 0;//获取用户输入的值并转换成数字
    var result;
    if (isNaN(oneNumber) || isNaN(twoNumber)) {   //判断输入内容是否为数字，不是数字的话，进行错误提示。
        document.getElementById("warn").innerHTML = "输入内容不合法，请重新输入！"
        return;
    }
    //实现加减乘除算法
    switch (x) {
        case 1:
            result = oneNumber + twoNumber;
            break;
        case 2:
            result = oneNumber - twoNumber;
            break;
        case 3:
            result = oneNumber * twoNumber;
            break;
        case 4:
            if (twoNumber == 0) {   //判断分母是否为0
                document.getElementById("warn").innerHTML = "被除数不能为0！"
                return;
            }
            result = oneNumber / twoNumber;
            break;
    }
    document.getElementById("result").innerHTML = result;//显示计算结果
}
