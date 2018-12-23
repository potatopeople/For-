var list = [1,2,3,4,5,6,7,8,9,7,4,14,41];
var set = new Set();//Set可以去除掉重复的数
 //双重循环遍历,减少遍历数据的时间   
for(
    var i = 0,j = 1;
    i < list.length && j < list.length;
    i+=2,j+=2
){
    console.log(list[i]);
    console.log(list[j]);
    set.add(list[i]);
    set.add(list[j]);
}
//Array的from方法转换为数组
console.log(set = Array.from(set));

//for in/of遍历list2数组中的元素
var list2 = [1,2,3,4,5,6,7];
for(x in list2){
    console.log(list[x]);
}
for(x of list2){
    console.log(x)
}
//for in/of遍历list3对象中的元素
var list3 = {
    name:"夜雨",
    age:"21",
    sex:"女"
}
for(x in list3){
    console.log(list3[x]);
}
//for of 遍历会出错，不知什么问题导致！
for(x of list3){
    console.log(x);
}