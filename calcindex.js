var it = document.getElementById('text-input');
var input = '';
it.addEventListener('input', function(e){
    input = e.target.value;
})

var s = ['+', '-', '*', '/'];

function calc_value() {
    if(input.length === 0){
        alert("please enter the expression")
    }else if(s.indexOf(input[input.length-1]) > -1){
        alert('Please enter a valid expression')
    }else if (input[0] == '*' || input[0] == '/'){
        alert('please enter a valid expression')
        it.value = '';
    }else{
        for(var i = 0; i < input.length; i++){
            if((i != 0) && (s.indexOf(input[i]) > -1) && (s.indexOf(input[i-1]) > -1)){
                alert('please enter a valid expression');
                it.value = '';
                return;
            }
        }
        var ans = eval(input);
        it.value = ans;
        return;
    }
}

var keycodes = [189, 187, 191, 16, 8];
var symbolkey = [189, 187, 191];
var prev = -1;
it.addEventListener('keydown', function(e){
    if(e.keyCode === 13){
        calc_value()
        e.preventDefault();
    }else if(((prev == -1) || (prev != 16)) && e.keyCode === 187){
        calc_value()
        e.preventDefault()
    }else if ((prev != -1) && symbolkey.indexOf(e.keyCode) > -1 && (prev == e.keyCode)){
        alert("Please enter a vaild expression");
        e.preventDefault()
    }
    else if ((keycodes.indexOf(e.keyCode) > -1) || ((e.keyCode >= 48) && (e.keyCode <= 57))) {
        // do nothing
    }
    else{
        alert("please enter a valid number");
        e.preventDefault()
    }
    prev = e.keyCode;
})

var tuf = document.querySelectorAll('.ait p');

for(var i = 0; i < tuf.length; i++){
    tuf[i].addEventListener('click', function(e) {
        var x = e.target;
        it.value = input + x.innerHTML;
        input = it.value;
    }, false)
}

var res = document.getElementById('equal');
res.addEventListener('click',function(){
    calc_value();
    input = '';
})

var clear = document.getElementById('clear');
clear.addEventListener('click', function(){
    it.value = '';
    input = '';
})


