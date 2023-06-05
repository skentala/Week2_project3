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
  
  const newRow = document.createElement("tr");
  const newUsername = document.createElement("td");
  const newEmail = document.createElement("td");
  const newAddress = document.createElement("td");
  const newAdmin = document.createElement("td");
  newUsername.innerHTML = document.getElementById("input-username").value;
  newEmail.innerHTML = document.getElementById("input-email").value;
  newAddress.innerHTML = document.getElementById("input-address").value;
  newAdmin.innerHTML = document.getElementById("input-admin").checked ? "X" : "-";
  newRow.appendChild(newUsername);
  newRow.appendChild(newEmail);
  newRow.appendChild(newAddress);
  newRow.appendChild(newAdmin);
  tableBody.appendChild(newRow);
})

const emptyButton = document.getElementById("empty-table");
emptyButton.addEventListener("click", () => emptyTable());
function emptyTable(){
  const tableBody = document.getElementById("table-body");
  while (tableBody.hasChildNodes()) {
    tableBody.removeChild(tableBody.firstChild);
  }
}