function a() {
  return "hello";
}

function b(text, callback) {
  if(typeof text === "string" && typeof callback === "function"){
    console.log(typeof callback);
    return text + callback();
  }
}

console.log(b('yeho ', a));