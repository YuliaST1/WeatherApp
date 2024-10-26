function handleSearchSubmit(event) {
  event.preventDefault();
  let currentCity = document.querySelector("#search-input-feld");
  let usersCity = document.querySelector("#city");
  usersCity.innerHTML = currentCity.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
