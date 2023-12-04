document.getElementById("hobbiesForm").addEventListener('submit', function (event) {
    event.preventDefault();

    const apikey = 'qzDkKVYk+cJ9nuZyC3xm3w==YxGqv6hkKMeSr4cb';
    const category = document.getElementById('hobbies').value.toLowerCase();

    fetch(`https://api.api-ninjas.com/v1/hobbies?category=${category}`, {
        headers: {
            'X-Api-Key': apikey
        }
    }).then(function (response) {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(function (data) {
        console.log('API response data:', data);

        if (data.hobby) {
            const { hobby, link, category } = data;

            console.log('Hobby information found:', data);

            // Show information
            document.getElementById('hobby').textContent = 'Hobby: ' + hobby;
            document.getElementById('link').textContent = 'Link: ' + link;
            document.getElementById('category').textContent = 'Category: ' + category;
        } else {
            console.log("Hobby information not found");
        }
    }).catch(function (error) {
        console.error('Error:', error.message);
    });
});
