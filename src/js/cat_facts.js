function getRandomCatFact() {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json()) 
      .then(data => {
        document.querySelector('.ct-fact').textContent = data.fact + "🐱";
      })
      .catch(error => {
        console.error('Error fetching cat fact:', error);
        document.querySelector('.ct-fact').textContent = 'Sorry, could not fetch a cat fact!';
      });
}
  
document.getElementById('getCatFact').addEventListener('click', getRandomCatFact);
  
getRandomCatFact();
  