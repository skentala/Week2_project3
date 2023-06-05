import "./styles.css";

//document.getElementById("app").innerHTML = `
//<h1>Hello Vanilla!</h1>
//<div>
//  We use the same configuration as Parcel to bundle this sandbox, you can find more
//  info about Parcel 
//  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
//</div>
//`;
const submitButton = document.getElementById("submit-data");
submitButton.addEventListener("click", function (){
  const tableBody = document.getElementById("table-body");
//  const newRow = tableBody.insertRow(-1);
//  newRow.insertCell(0).innerHTML = document.getElementById("input-username").value;
//  newRow.insertCell(1).innerHTML = document.getElementById("input-email").value;
//  newRow.insertCell(2).innerHTML = document.getElementById("input-address").value;
//  newRow.insertCell(3).innerHTML = document.getElementById("input-admin").checked ? "X" : "-";
  const username = document.getElementById("input-username").value;
  const email = document.getElementById("input-email").value;
  const address = document.getElementById("input-address").value;
  const admin = document.getElementById("input-admin").checked ? "X" : "-";
  let user = tableBody.firstElementChild;
  while(user != null){
    if (user.childNodes[0].innerText == username){
      user.childNodes[1].innerText = email;
      user.childNodes[2].innerText = address;
      user.childNodes[3].innerText = admin;
      break;
    }
    else {
      user = user.nextElementSibling;
    }
  }
  if (user == null){
    const newRow = document.createElement("tr");
    const newUsername = document.createElement("td");
    const newEmail = document.createElement("td");
    const newAddress = document.createElement("td");
    const newAdmin = document.createElement("td");
    newUsername.innerHTML = username;
    newEmail.innerHTML = email;
    newAddress.innerHTML = address;
    newAdmin.innerHTML = admin;
    newRow.appendChild(newUsername);
    newRow.appendChild(newEmail);
    newRow.appendChild(newAddress);
    newRow.appendChild(newAdmin);
    tableBody.appendChild(newRow);
  }
})

const emptyButton = document.getElementById("empty-table");
emptyButton.addEventListener("click", () => emptyTable());
function emptyTable(){
  const tableBody = document.getElementById("table-body");
  while (tableBody.hasChildNodes()) {
    tableBody.removeChild(tableBody.firstChild);
  }
}