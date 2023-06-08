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
  const imageId = document.getElementById("input-image");
  let image = null;
  if (imageId.files.length > 0) {
    image = imageId.files[0];
//   console.log(image)
  }
  let user = tableBody.firstElementChild;
  while(user != null){
    if (user.childNodes[0].innerText == username){
      user.childNodes[1].innerText = email;
      user.childNodes[2].innerText = address;
      user.childNodes[3].innerText = admin;
      if (image != null){
        user.childNodes[4].childNodes[0].file = image;
        user.childNodes[4].childNodes[0].src = URL.createObjectURL(image);
        user.childNodes[4].childNodes[0].height = 64;
        user.childNodes[4].childNodes[0].width = 64;
        user.childNodes[4].childNodes[0].onload = () => {
          URL.revokeObjectURL(user.childNodes[4].childNodes[0].src);
        }
      }
      else {
        user.childNodes[4].childNodes[0].file = null;
        user.childNodes[4].childNodes[0].src = ""
        user.childNodes[4].childNodes[0].height = 0;
        user.childNodes[4].childNodes[0].width = 0;
      }
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
    const newImage = document.createElement("td")
    const newImageContent = document.createElement("img")
    newUsername.innerHTML = username;
    newEmail.innerHTML = email;
    newAddress.innerHTML = address;
    newAdmin.innerHTML = admin;
    if (image != null){
      newImageContent.file = image;
      newImageContent.src = URL.createObjectURL(image);
      newImageContent.height = 64;
      newImageContent.width = 64;
//      console.log(newImageContent);
      newImageContent.onload = () => {
        URL.revokeObjectURL(newImageContent.src);
      }
    }
    else {
      newImageContent.file = null;
      newImageContent.src = ""
      newImageContent.height = 0;
      newImageContent.width = 0;
    }
    newRow.appendChild(newUsername);
    newRow.appendChild(newEmail);
    newRow.appendChild(newAddress);
    newRow.appendChild(newAdmin);
    newImage.appendChild(newImageContent);
    newRow.appendChild(newImage);
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
