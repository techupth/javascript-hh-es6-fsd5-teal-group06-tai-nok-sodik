let height = undefined;
let result=  (height) => height ?? "Height is not defined"   ;
//(null || undefined) ?? "foo";
//let result = (height || null) ?? "555"

console.log(result(height)); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
