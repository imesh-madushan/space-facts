document.getElementById('fetchFactButton').addEventListener('click', function() {
    fetch('https://uselessfacts.jsph.pl/random.json?language=en')
        .then(response => response.json())
        .then(data => {
            document.getElementById('factDisplay').textContent = data.text;
        })
        .catch(error => {
            console.error('Error fetching fun fact:', error);
            document.getElementById('factDisplay').textContent = 'Could not fetch a fun fact at this time.';
        });
});
