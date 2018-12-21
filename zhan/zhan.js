
var Stack = function (){
    //定义栈
    let items = [];
    //获取栈
    this.getItems = function (){
        return items;
    }
    //入栈
    this.push = function (element){
        items.push(element);
    }
    //出栈
    this.pop = function (){
        return items.pop();
    }
    //获取栈顶元素
    this.peek = function (){
        return items[items.length - 1];
    }
    //清空栈
    this.clear = function (){
        items = [];
    }
    //检查栈是否为空
    this.isEmpty = function (){
        return items.length === 0;
    }
    //获取栈的大小
    this.size = function (){
        return items.length;
    }
}