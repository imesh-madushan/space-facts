document.getElementById('fetchFactButton').addEventListener('click', function() {
    fetch('https://api.example.com/funfact') // Replace with a real API endpoint
        .then(response => response.json())
        .then(data => {
            document.getElementById('factDisplay').textContent = data.fact;
        })
        .catch(error => {
            console.error('Error fetching fun fact:', error);
            document.getElementById('factDisplay').textContent = 'Could not fetch a fun fact at this time.';
        });
});
