// compile & run commands:
// tsc --target ES6 .\async-await.ts
// node .\async-await.js
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function longTimeExecution() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.5 ? resolve("DONE") : reject("Error ... !");
        }, 2000);
    });
}
function callAwaitFunction() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Before await");
        try {
            let response = yield longTimeExecution(); // this is a waiting point but only inside this function
            console.log("RESPONSE: " + response);
        }
        catch (ex) {
            console.log("ERROR: " + ex);
        }
        console.log("After await");
    });
}
console.log("Starts execution ...");
callAwaitFunction();
console.log("... continue execution");
