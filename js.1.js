var bmi = weight/(height*height);
var result='';
if(isNaN(bmi)){
    result='请输入正确的身高体重';
}else if(bmi<18.5){
    result='过轻';
}else if(bmi<25){
    result='正常';
}else if(bmi<28){
    result='过重';
}else if(bmi<32){
    result='肥胖';
}else {
    result='严重肥胖';
}
console.log(身高:${height},体重:${weight},BMI指数:${bmi},${result});