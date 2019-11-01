
// *************workingapi************************


function clicked(){
    var data;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.hatchways.io/api/assessment/students",true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (this.status === 200) {
            document.getElementById("data").innerHTML = this.responseText;
            // alert(JSON.parse(this.responseText));
          data = JSON.parse(this.responseText(data.students));
          // alert(data.students);
          // alert(data);
        }

  
};
}



// ************************workinapi**********
  // *json.parse(this.responseText);
    // alert(data.people) to start breaking the data
    
    
  // fetch ('https://swapi.co/api/films')
  //   .then(res => res.json())
  //   .then(data => console.log(data));
  //   alert(data)





