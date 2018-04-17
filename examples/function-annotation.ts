function execCallback(callback: (arg:string) => string ){
    console.log(callback("ok"));
}

var cb = (arg:string)=>{
    return arg + "!";
}

execCallback(cb);
