console.log('-- functions');


function teach(){
    var s1='Praveen';
    function learn(){
        var s1='James'; // preferance for local variables
        console.log('-- learn : '+s1);
    }
    learn();
    console.log('-- teach: '+s1);
}

//teach();

// problems with var keyword

//1.  Context Creation phase
console.log('a is '+a);
var a=100;

// 2. No blocked  scope

var x=100;
{
    var x=200;
}

console.log("X is "+x);

// 3. can repeat var more than once to the same variable

var s1=100;
var s1=200;
var s1=300;

// To over come all these issues use 'let' keyword -> ES-6


let s2=100;
//let s2=300;
let s3=100;
{
    let s3=400;
}
console.log(' s3: '+s3);

console.log('s4: '+s4); // error
let s4=500;
