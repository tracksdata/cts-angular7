console.log('-- execution context');

/*

Phases in Function Execution

Phase 1: Conetxt Creation Phase:
-> All the variables declared witg 'var' keyword will be hoisted (lifted up)
   to the top of the context

Phase 2: Execution Phase
-> All functions gets executed in a sequence



Notes:
--------
1. Every js has one global scope default
2. every function invocation itself crates a new scope.
3. If any funtion has child functions, then child function has its own scope, as well
   child functions global scope is parent function

*/

// Phase 1

var s1="Praveen";
//f1(); // before function created , I anm calling f1-> will execute
function f1(){ // named function
 console.log('Name is '+s1);   
}

//s2(); ==> produces ref error
var s2=function(){ // function expression
    console.log('Yor Name is James');
    return "James";
}

//s2(); // executes fine


var s5='Praveen';
console.log('Hello '+s5);
/*
    1. s5 variable gets created first
    2. s5 is assigned as undefined
    3. console.log() function gets called
    4. s5 is assigned with 'praveen'
*/

// Global scope
function teach(){ // has a global scope.  name of the teach scope is teach 
    var trainer="Praveen";
    console.log('Trainer '+trainer+ ' is teaching js' );

    function learn(){// child of teach
        console.log('--- Learning '+sub); 
    }

    learn();
    var sub='java Script';


}
teach();


