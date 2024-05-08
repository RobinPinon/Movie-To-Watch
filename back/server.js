const axios = require('axios');
const express = require('express');
const app = express();

app.get('/api/movies', async (req, res) => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/movie/changes?page=1', {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDg1OWM2ZmIxYmMwNjdjYWE0NWYyMTE0NWZkMDEzYyIsInN1YiI6IjY2MzdkYWZiMzVkMWJjMDEyNjBhYmE1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xwaLonFiJabdPOxYIAvbia0kAt932OtP7PO6a4SFo9A'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
