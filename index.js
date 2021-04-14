const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ] 

  function superbowlWin(array){
      let yearWon = undefined;
    array.find(element => {
        if (element.result == "W"){
            yearWon = element.year
        }
    })
    return yearWon
  }
