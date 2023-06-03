
document.addEventListener("DOMContentLoaded", function() {

  // Retrieve form values from localStorage
  //var firstName = localStorage.getItem("firstName");
  var values = localStorage.getItem("value");

  var newValues = JSON.parse(values);

  // Update the HTML with the retrieved values
  document.getElementById("fullname").textContent = newValues["firstname"];


  const newDiv = document.createElement("div")
  newDiv.innerHTML = inputTemplate(newValues)
  document.getElementById("allInput").appendChild(newDiv)

  // Clear the stored form values from localStorage
//   localStorage.removeItem("firstName");
//   localStorage.removeItem("value");
});


var divstyle = "box-shadow: 0 2px 3px #c8d0d8; padding: 10px; margin: 5px;"
var card = "display: flex; flex-direction: row; flex-wrap: wrap; align-items: center; justify-content: center;"
var pad = "padding:0px 10px;"
var color_red = "color: red;"

function inputTemplate(_userDetails) {
    return `
      <div style="${divstyle}"> 
        <div style="${card}">
          <p> First Name: <span style="${color_red}"> ${_userDetails.firstname} </span> </p>
          <p style="${pad}"> Middle Name: <span style="${color_red}"> ${_userDetails.middlename} </span> </p>
          <p> Last Name: <span style="${color_red}"> ${_userDetails.lastname} </span> </p>
        </div>
        <div style="${card}">
            <p> Address: <span style="${color_red}  word-break: break-all;  
            white-space:normal;"> ${_userDetails.address} </span> </p>
        </div>
        <div style="${card}">
            <p> City: <span style="${color_red}">${_userDetails.city} </span </p>
            <p style="${pad}"> State: <span style="${color_red}">${_userDetails.state} </span> </p>
            <p> Country: <span style="${color_red}">${_userDetails.country} </span> </p>
        </div>
        <div style="${card}">
            <p> Email: <span style="${color_red}"> ${_userDetails.email} </span></p>
            <p style="${pad}"> Zip: <span style="${color_red}"> ${_userDetails.zip} </span> </p>
            <p> Student Id: <span style="${color_red}"> ${_userDetails.studentid} </span></p>
        </div>
        <div style="${card}">
            <p> Courses: <span style="${color_red}"> ${_userDetails.Courses} </span> </p>
            <p style="${pad}"> Level: <span style="${color_red}"> ${_userDetails.level} </span> </p>
            <p style="${pad}"> Languages: <span style="${color_red}"> ${_userDetails.languages} </span> </p>
            <p> Start Date: <span style="${color_red}"> ${_userDetails.startdate} </span> </p>
        </div>
        <div style="${card}">
            <p> Comment: <span style="${color_red}"> ${_userDetails.comment} </span> </p>
        </div>
      </div>
    `
  }






