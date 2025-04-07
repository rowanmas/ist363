function reportResults(responseText) {
        let spotifyHTML = '';
    
        if (responseText !== 'error') {
            const data = JSON.parse(responseText); 
            const { name, artists, album } = data;
            const artistNames = artists.map(artist => artist.name).join(', ');
    
            spotifyHTML = `
                Track: ${name}<br>
                Artist(s): ${artistNames}<br>
                Album: ${album.name}
            `;
    
            document.getElementById('track-name').innerHTML = name;
            document.getElementById('artist-names').innerHTML = artistNames;
            document.getElementById('album-name').innerHTML = album.name;
        } else {
            spotifyHTML = '<h4>Error Fetching Data</h4>';
        }
    
        document.querySelector('.spotify .row .col-md-6').innerHTML = spotifyHTML;
}
    
const request = new XMLHttpRequest();
const endpoint = 'https://api.spotify.com/v1/tracks/{track_id}'; // Replace {track_id} with an actual track ID
const accessToken = 'YOUR_SPOTIFY_ACCESS_TOKEN'; // Replace with your valid Spotify access token
    
request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            reportResults(request.responseText); 
        } else if (request.readyState === 4) {
            reportResults('error'); 
        }
});
    
request.open('GET', endpoint);
request.setRequestHeader('Authorization', 'Bearer ' + accessToken);
request.send();
