function unlock() {
  var pass = document.getElementById("password").value;
  var correctPassword = "1234";

  if (pass === correctPassword) {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("portfolio").style.display = "block";
  } else {
    document.getElementById("error").innerText = "Wrong Password";
  }
}