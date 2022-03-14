
// console.log(module);

exports.getDate = function(){
  const today = new Date();
  // let week = today.getDay();
  const options = {
    day: "numeric",
    weekday: "long",
    month: "long",
  }
  return today.toLocaleDateString("en-US", options);
}

exports.hinDate = function(){
  const today = new Date();
  // let week = today.getDay();
  const options = {
    day: "numeric",
    weekday: "long",
    month: "long",
  }
  return today.toLocaleDateString("hin-IN", options);
}
