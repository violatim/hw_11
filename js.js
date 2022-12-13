function comparatorAB(a, b) {
    if(a<b){
        alert('a < b')
    }else if(a > b){
        alert('a > b')
    } else if (a === b){
        alert('a === b')
    } else if(a == b){
        alert('a == b')
    } else if (a === NaN){
        alert('NaN!')
    } else {
        alert('Nothing about'+a+' ' +b)
    }
}

function task_1(){
    var a = +prompt('Input a')
    var b = +prompt('Input b')
    comparatorAB(a,b)
}

function task_2(){
    var a = prompt('Input number')
    if( a === ''){
        console.log('false')
    } else if(a%10 === 0){
        console.log('true')
    }else {
        console.log('false')
    }
}

var k = 0
function task_3(){
    k++
    alert(k)
}

var b
function task_4(){
    if(b === undefined){
        b = +prompt('Input something')
        if(b){
            b = b + 1
            alert(b)
        }else{
            b = 1
            alert(b)
        }
    }else {
        b = b + 1
        alert(b)
    }
}