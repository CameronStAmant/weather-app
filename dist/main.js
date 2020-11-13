const submitSearch = document.getElementById('submit');
const displayResults = document.getElementById('results');
const displayTemp = document.getElementById('temperature');

const search = async (city) => {
  const searchTerm = document.getElementById('city').value;
  console.log(searchTerm);
  try {
    const query = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        searchTerm +
        '&units=imperial&appid=8053e75bd7110bdaaee3622d6c524570',
      { mode: 'cors' }
    );
    const results = await query.json();
    displayTemp.innerHTML = `Temperature: ${results.main.temp}`;
    console.log(results.main);
  } catch {
    displayTemp.innerHTML = '';
    alert(
      'Could not find a city by that name. Ensure it is spelled correctly.'
    );
  }
};

submitSearch.addEventListener('click', (e) => {
  e.preventDefault();
  search();
});
