function execCallback(callback) {
    console.log(callback("ok"));
}
var cb = function (arg) {
    return arg + "!";
};
execCallback(cb);
