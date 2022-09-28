let name = document.getElementById("name");
let surname = document.getElementById("surname");
let phoneNumber = document.getElementById("phone-number");
let addBtn = document.getElementById("add-number");
let phoneList = document.getElementById("phone-list");

//console.log(name,surname,phoneList,phoneNUmber,addBtn)

//add.Btn.onclick = () =>{}
addBtn.addEventListener("click", function () {
  let nameValue = name.value;
  let surnameValue = surname.value;
  let phoneNumberValue = phoneNumber.value;

  let tr = document.createElement("TR");

  let tdName = document.createElement("TD");
  let tdContentName = document.createTextNode(nameValue);
  tdName.appendChild(tdContentName);
  tr.appendChild(tdName);

  let tdSurname = document.createElement("TD");
  let tdContentSurname = document.createTextNode(surnameValue);
  tdSurname.appendChild(tdContentSurname);
  tr.appendChild(tdSurname);

  let tdPhoneNumber = document.createElement("TD");
  let tdContentPhoneNumber = document.createTextNode(phoneNumberValue);
  tdPhoneNumber.appendChild(tdContentPhoneNumber);
  tr.appendChild(tdPhoneNumber);

  phoneList.appendChild(tr);

  document.getElementById("name").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("phone-number").value = "";
});
