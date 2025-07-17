// Add event listener for the toggle checkbox to switch between light and dark mode
const checkbox = document.getElementById("toggle-checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode")
})

  const buttons = [
    document.getElementById("search-btn-light"),
    document.getElementById("search-btn-dark")
  ];

buttons.forEach(button => {
  button.addEventListener("click", () => {
  const input = document.getElementById("city-input");
  
  const resultDiv = document.getElementById("result");

  const city = input.value.trim();
  if (!city) return; 

  resultDiv.style.display = "block";

  // This code is part of a weather app project that fetches weather data for a specified city
  const params = new URLSearchParams({
    access_key: 'ac0368707e5e804edf6e5f012511726a',
    query: city
  });

  fetch('http://api.weatherstack.com/current?' + params)
      .then(res => res.json())
      .then(data => {
        input.style.display = "none";
        buttons.forEach(btn => btn.style.display = "none");

        resultDiv.innerHTML = `
          <h2>Weather in ${city}</h2>
          <pre>${JSON.stringify(data, null, 2)}</pre>
        `;
      })
      .catch(error => {
        resultDiv.textContent = "Error fetching weather data: " + error.message;
      });
  });
});

