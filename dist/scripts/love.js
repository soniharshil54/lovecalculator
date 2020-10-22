  function calculateLove(){
    console.log("calculate")
    let firstName = document.getElementById("name1").value
    let lastName = document.getElementById("name2").value
    fetch(`https://rapidapi.p.rapidapi.com/getPercentage?fname=${firstName}&sname=${lastName}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "x-rapidapi-key": "3175010eeemsh93249d3cef8d24ap1c6a65jsnaca52626d09e"
      }
    })
    .then(response => {
      console.log("response")
      return response.json();
      // document.getElementById("resultlove").value = response
    })
    .then(res => {
      console.log("res")
      if(Number(res.percentage) < 80){
        res.percentage = Number(res.percentage) + 20;
      }
      document.getElementById("resultlove").innerHTML = `${res.percentage}%`
      document.getElementById("resultloveres").innerHTML = res.result

    })
    .catch(err => {
      console.error(err);
    });
  }

$(document).ready(function() {
  $("#formlove").submit(function(event){
    if(true) { 
       event.preventDefault();  
    }  
    calculateLove()
  });
});