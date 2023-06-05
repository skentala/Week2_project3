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
//submitButton.addEventListener("click", () => submitUser());
submitButton.addEventListener("click", function (){
  let newListItem = document.createElement("tr");
  const username = document.getElementById("input-username").value;
  const email = document.getElementById("input-email").value;
  const address = document.getElementById("input-address").value;
  const admin = document.getElementById("input-admin").value;
  console.log(username);
})