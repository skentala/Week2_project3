import "./styles.css";

//document.getElementById("app").innerHTML = `
//<h1>Hello Vanilla!</h1>
//<div>
//  We use the same configuration as Parcel to bundle this sandbox, you can find more
//  info about Parcel 
//  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
//</div>
//`;
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", () => submitUser());

function submitUser(){
  const user = document.getElementById("input-username")
  username = user.nodeValue;
  console.log(username);
}