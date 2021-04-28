
function superbowlWin(array) {
   let win =  array.find( function(w) {return w.result === "W" })
   if (win){ 
    return win.year
  } else {
    return undefined
  }
}