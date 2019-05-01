function takeANumber(array,name){
  array.push(name);
  var arrayLength=array.length;
  return "Welcome, " + name +  ". You are number " + arrayLength + " in line.";
}

function nowServing(array){
  var serving = "";
  if (array.length==0){
    return "There is nobody waiting to be served!"
  }else{
    serving =  "Currently serving " + array[0] + ".";
    array.shift();
    return serving;
  }
}

function currentLine(line){
  var lineMembers = "The line is currently: ";
  if (line.length==0){
    return "The line is currently empty."
  }else{
    for(var i=0;i<line.length;i++){
      lineMembers =
    }
  }
}
