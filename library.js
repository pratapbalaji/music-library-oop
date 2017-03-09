var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {

  var playlists = library.playlists;

  for (var specificPlaylist in playlists) {
    if (playlists.hasOwnProperty(specificPlaylist)) {
      console.log(playlists[specificPlaylist]["id"] + ": " + playlists[specificPlaylist]["name"] + " - " + playlists[specificPlaylist]["tracks"].length + " tracks");
    }
  }

}


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {

  var tracks = library.tracks;

  for (var specificTrack in tracks) {
    if (tracks.hasOwnProperty(specificTrack)) {
      console.log(tracks[specificTrack]["id"] + ": " + tracks[specificTrack]["name"] + " by " + tracks[specificTrack]["artist"] + " (" + tracks[specificTrack]["album"] + ")");
    }
  }

}

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {

  var playlist = library.playlists[playlistId];

  console.log(playlist["id"] + ": " + playlist["name"] + " - " + playlist["tracks"].length + " tracks");

  for (i = 0; i < playlist["tracks"].length; i++) {
    var track = library.tracks[playlist["tracks"][i]];
    console.log(track["id"] + ": " + track["name"] + " by " + track["artist"] + " (" + track["album"] + ")");
  }

}

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {

  var playlist = library.playlists[playlistId];
  var track = library.tracks[trackId];

  playlist["tracks"].push(track["id"]);

}

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var trackID = uid();


  library.tracks[trackID] = {};
  library.tracks[trackID]["id"] = trackID;
  library.tracks[trackID]["name"] = name;
  library.tracks[trackID]["artist"] = artist;
  library.tracks[trackID]["album"] = album;

}

// adds a playlist to the library

var addPlaylist = function (name) {

  var playlistID = uid();

  library.playlists[playlistID] = {};
  library.playlists[playlistID]["id"] = playlistID;
  library.playlists[playlistID]["name"] = name;

}

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

var tracks = library.tracks;

  for (var specificTrack in tracks) {
    if (tracks.hasOwnProperty(specificTrack)) {
      if ((tracks[specificTrack]["name"].toUpperCase()).search((query.toUpperCase())) != -1) {
        console.log(tracks[specificTrack]);
      }
      if ((tracks[specificTrack]["artist"].toUpperCase()).search((query.toUpperCase())) != -1) {
        console.log(tracks[specificTrack]);
      }
      if ((tracks[specificTrack]["album"].toUpperCase()).search((query.toUpperCase())) != -1) {
        console.log(tracks[specificTrack]);
      }
    }
  }

}