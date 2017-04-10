function Library (name, creator) {
    this.name = name;
    this.creator = creator;
}

function Playlist (name) {
    this.name = name;
}

function Track (name, rating, length) {
    this.name = name;
    this.rating = rating;
    if (rating < 1) {
        this.rating = 1;
    } else if (rating > 5) {
        this.rating = 5;
    } else { 
        this.rating = rating;
    }
    this.length = length;
}

Library.prototype.playlists = [];

Playlist.prototype.tracks = [];

Playlist.prototype.overallRating = function () {
    let overallRating = 0;
    this.tracks.map((track) => {
        overallRating += track.rating;
    });
    return Math.round(overallRating / this.tracks.length);
}

Playlist.prototype.totalDuration = function () {
    let totalDuration = 0;
    this.tracks.map((track) => {
        totalDuration += track.length;
    });
    return totalDuration;
}

let newLibrary = new Library("Vinay's Library", 'Vinay');

let newPlaylist = new Playlist("Vinay's First Playlist");

let newTrack1 = new Track("Vinay's First Track", 1, 360);

let newTrack2 = new Track("Vinay's Second Track", 0, 500);

let newTrack3 = new Track("Vinay's First Track", 8, 240);

newPlaylist.tracks.push(newTrack1);

newPlaylist.tracks.push(newTrack2);

newPlaylist.tracks.push(newTrack3);

newLibrary.playlists.push(newPlaylist);

console.log(newPlaylist.overallRating());

console.log(newPlaylist.totalDuration());


