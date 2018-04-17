// compile & run commands:
// tsc --target ES6 .\async-await.ts
// node .\async-await.js

function longTimeExecution(): Promise<string>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.5  ? resolve("DONE") : reject("Error ... !");
        },2000)
    });
}

async function callAwaitFunction(){
    console.log("Before await");

    try{
        let response = await longTimeExecution(); // this is a waiting point but only inside this function
        console.log("RESPONSE: " + response);
    }catch(ex){
        console.log("ERROR: " + ex);
    }
    
    console.log("After await");
}

console.log("Starts execution ...");
callAwaitFunction();
console.log("... continue execution");