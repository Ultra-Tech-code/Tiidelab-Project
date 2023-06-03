
let studentRegForm = document.getElementById("studentRegForm");

studentRegForm.addEventListener("submit", (e) => {
  e.preventDefault();

//   let firstName = document.getElementById("fname");

  var inputElements = studentRegForm.querySelectorAll("input");
  var selectElements = studentRegForm.querySelectorAll("select");
  var values = {};
  inputElements.forEach(function(input) {
        values[input.name] = input.value;
  });

  selectElements.forEach(function(input) {
    values[input.name] = input.value;
  });
  values["comment"] = document.getElementById("comment").value;

    // Iterate through each input field
  for (var name in values) {
    // Validate input value
    if (values[name] == "") {
      alert('⌛ Please enter your ' + name);
      return;
    }
  }

  fileValidation();
  alert("🎉 Form submitted successfully");

    console.log("JSON.stringify(values) .....",JSON.stringify(values));

    // Store form values in localStorage
    // localStorage.setItem("firstName", firstName.value);
    localStorage.setItem("value",  JSON.stringify(values));

    // Clear the form
    studentRegForm.reset();

    // Redirect to the success page
    window.location.href = "successpage.html";

  })

  
function fileValidation() {
    var fileInput =
        document.getElementById('file');

    var filePath = fileInput.value;

    // Allowing file type
    var allowedExtensions =
        /(\.doc|\.docx|\.odt|\.pdf|\.tex|\.txt|\.rtf|\.wps|\.wks|\.wpd)$/i;

    if (!allowedExtensions.exec(filePath)) {
        alert('Invalid file type, only text file allow');
        fileInput.value = '';
        return false;
    }
}

