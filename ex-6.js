let height = undefined;
let result;

function checkUndefined(height) {
    return height ?? "Height is not defined";
}
result = checkUndefined(height);
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
