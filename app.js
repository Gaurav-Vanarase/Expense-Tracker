function saveToLocalStorage(event) {
  event.preventDefault();
  const ExpAmount = event.target.amount.value;
  const Description = event.target.description.value;
  const Category = event.target.categories.value;

  const myobj = {
    ExpAmount: ExpAmount,
    Description: Description,
    Category: Category,
  };

  localStorage.setItem(myobj.Description, JSON.stringify(myobj));

  saveOnScreen(myobj);
}

function saveOnScreen(myObj) {
  const parentEle = document.getElementById("listOfItems");
  const childEle = document.createElement("li");
  childEle.textContent =
    myObj.ExpAmount + " - " + myObj.Description + " - " + myObj.Category;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = () => {
    localStorage.removeItem(myObj.Description);
    parentEle.removeChild(childEle);
  };
  childEle.appendChild(deleteButton);
  const EditButton = document.createElement("button");
  EditButton.textContent = "Edit";
  EditButton.onclick = () => {
    document.getElementById("amount").value = myObj.ExpAmount;
    document.getElementById("description").value = myObj.Description;
    document.getElementById("categories").value = myObj.Category;
    document.getElementById("submit").textContent = "Update";
  };

  childEle.appendChild(deleteButton);
  childEle.appendChild(EditButton);
  parentEle.appendChild(childEle);
}
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const obj = JSON.parse(localStorage.getItem(key));
  saveOnScreen();
}
