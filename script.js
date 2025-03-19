document.addEventListener("DOMContentLoaded", function () {
  let navigation = document.getElementById("navigation");
  let burger = document.getElementById("burger");
  burger.addEventListener("click", function () {
    if (navigation.classList.contains("activeNavigation")) {
      navigation.classList.remove("activeNavigation");
      burger.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else {
      navigation.classList.add("activeNavigation");
      burger.innerHTML = '<i class="fas fa-times"></i>';
    }
  });
});

function getUsers() {
  let request = new XMLHttpRequest();
  request.addEventListener("load", render);
  request.addEventListener("error", errorRender);

  request.open("GET", "https://reqres.in/api/users?page=1");
  request.send();
}

function render() {
  let response = this.response;
  let responseData = JSON.parse(response);
  console.log(responseData);
  let container = document.getElementById("container");
  let ul = document.createElement("ul");
  responseData.data.forEach(function (item) {
    let li = document.createElement("li");
    li.textContent = item.email;
    let image = document.createElement("img");
    image.src = item.avatar;
    ul.appendChild(li);
    ul.appendChild(image);
    container.appendChild(ul);
  });
}

function errorRender() {
  let container = document.getElementById("container");
  let p = document.createElement("p");
  p.textContent = "server error";
  container.appendChild(p);
}

getUsers();

document
  .getElementById("registration")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let errors = {};

    let form = event.target;

    let userName = document.getElementById("username").value;

    if (userName.length < 2 || userName == "") {
      errors.username = "write the username";
    }

    let lastName = document.getElementById("lastname").value;

    if (lastName.length < 3 || lastname == "") {
      errors.lastname = "write the lastname";
    }

    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;

    if (password != password2 || password == "") {
      errors.password = "password can not be empty";
      errors.password2 = "password do not match";
    }

    let agree = document.getElementById("checkAgree").checked;
    if (!agree) {
      errors.agree = "you must check";
    }

    let age = false;
    form.querySelectorAll('[name ="age"]').forEach((element) => {
      if (element.checked) {
        age = true;
      }
    });

    if (!age) {
      errors.age = "please, choose one of them";
    }

    for (let item in errors) {
      let errorSpan = document.getElementById("error_" + item);
      if (errorSpan) {
        errorSpan.innerText = errors[item];
      }
    }

    form.querySelectorAll(".errorText").forEach((item) => {
      item.textContent = "";
    });

    if (Object.keys(errors).length == 0) {
      form.submit();
    }
  });
