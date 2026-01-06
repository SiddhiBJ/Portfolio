document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if(name === "" || email === "" || message === ""){
    document.getElementById("msg").innerText = "Please fill all fields!";
  } else {
    document.getElementById("msg").innerText = "Message sent successfully!";
  }
});
