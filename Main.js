const search = document.querySelector("input");
const content = document.querySelector(".content");
const btn = document.querySelector(".getData");

async function GetData() {
  const city = search.value || "Algeria";
  const Url = `http://api.weatherapi.com/v1/current.json?key=48c256f5e99148d1be6151213250701&q=${city}&aqi=no`;

  try {
    const response = await fetch(Url);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    content.innerHTML = `<h2>${data.location.name}</h2> <h3>${data.current.temp_c}C°</h3> <h3>${data.current.temp_f}F°</h3>`;
  } catch (error) {
    console.error(error.message);
  }
}

GetData();

btn.addEventListener("click", function () {
  content.innerHTML = "";
  GetData();
});
