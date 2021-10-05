const express = require('express');
const app = express();
const repoContext = require('./repository/repository-wrapper');

app.listen(3000, function(){
    console.log("Server started. listening on port 3000.");
});

app.get('/api/songs', (req, res) => {
    const songs = repoContext.songs.findAllSongs();
    return res.send(songs);
});

app.get('/api/songs/:id', (req,res) => {
    const id = req.params.id;
    const song = repoContext.songs.findSongById(id);
    return res.send(song);
});

