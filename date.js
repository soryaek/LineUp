//module.exports or exports can be used here
exports.getDate = function (){
  const today = new Date();
  const  options = {
      weekday: "long",
      day: "numeric",
      month: "long"
  };
  return today.toLocaleDateString("en-US", options);
}

exports.getDay = function (){
  module.exports.getDate = getDate;
  const today = new Date();
  const options = {
      weekday: "long",
  };
return today.toLocaleDateString("en-US", options);
}
