const submitSearch = document.getElementById('submit');
const displayTemp = document.getElementById('temperature');
const displayIcon = document.getElementById('icon');
const fahrenheit = document.getElementById('fahrenheit');
const celsius = document.getElementById('celsius');
const background = document.body.style.background;
let fTemp;
let cTemp;
let tempOption;
fahrenheit.checked = true;

const search = async (city) => {
  const searchTerm = document.getElementById('city').value;
  if (fahrenheit.checked === true) {
    tempOption = 'imperial';
  } else if (celsius.checked === true) {
    tempOption = 'metric';
  }
  try {
    const query = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=${tempOption}&appid=8053e75bd7110bdaaee3622d6c524570`,
      { mode: 'cors' }
    );
    const results = await query.json();
    const resultsIcon = results.weather[0].icon;
    if (tempOption === 'imperial') {
      fTemp = results.main.temp.toFixed(1);
      displayTemp.innerHTML = `Temperature: ${fTemp} F`;
      displayIcon.src = `http://openweathermap.org/img/wn/${resultsIcon}@2x.png`;
    } else if (tempOption === 'metric') {
      cTemp = results.main.temp.toFixed(1);
      displayTemp.innerHTML = `Temperature: ${cTemp} C`;
      displayIcon.src = `http://openweathermap.org/img/wn/${resultsIcon}@2x.png`;
    }
  } catch {
    displayTemp.innerHTML = '';
    alert(
      'Could not find a city by that name. Ensure it is spelled correctly.'
    );
  }
};

math.addEventListener('change', () => {
  if (fTemp == undefined && cTemp == undefined) {
    return;
  }
  if (fahrenheit.checked === true) {
    fTemp = ((cTemp * 9) / 5 + 32).toFixed(1);
    displayTemp.innerHTML = `Temperature: ${fTemp} F`;
  } else if (celsius.checked === true) {
    cTemp = (((fTemp - 32) * 5) / 9).toFixed(1);
    displayTemp.innerHTML = `Temperature: ${cTemp} C`;
  }
});

submitSearch.addEventListener('click', (e) => {
  e.preventDefault();
  search();
});

const changeBackground = () => {};
