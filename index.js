function takeANumber(currentLine, newPerson){
   //let currLi = currentLine.slice(0)
  currentLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`
}

function nowServing(arr){
  if (arr.length >0){

    return `Currently serving ${arr.shift()}.`
  }else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(lineArr){
  if(lineArr.length > 0){
    for (let i = 0; i < lineArr.length; i++){
      return `The line is currently: 1.${lineArr.join((i+1).)}`
    }
  }else{
    return "The line is currently empty."
  }
}
