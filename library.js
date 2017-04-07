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
  for (var key in library.playlists) {
    if(library.playlists.hasOwnProperty(key)) {
      var list = library.playlists[key];
      key += " " + list.name;
      key += " - " + list.tracks.length + " tracks";
      console.log(key);
    }
  }
}
// printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
for (var key in library.tracks) {
    if(library.tracks.hasOwnProperty(key)) {
      var list = library.tracks[key];
      key += ": " + list.name;
      key += " by " + list.artist;
      key += " (" + list.album + ")";
      console.log(key);
    }
  }
return key
}
//printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
// get and print playlist information
if (playlistId in library.playlists) {
  var list = library.playlists[playlistId].id;
  list += ": " + library.playlists[playlistId].name;
  list += " - " + library.playlists[playlistId].tracks.length + " tracks";

  // create an array for tracks
  var track = [];
    // get and store info for each track in an array
    for (var i = 0; i <= library.playlists[playlistId].tracks.length; i++) {
      if (library.playlists[playlistId].tracks[i] in library.tracks) {
        trackCount = library.playlists[playlistId].tracks[i];
        track[i] = library.tracks[trackCount].id;
        track[i] += ": " + library.tracks[trackCount].name;
        track[i] += " by " + library.tracks[trackCount].artist;
        track[i] += " (" + library.tracks[trackCount].album + ")\n";
      }
    }
    console.log(list + "\n" + track.join(""));
  }
}
//printPlaylist('p01');


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  library['playlists'][playlistId]['tracks'].push(trackId);
  console.log(library['playlists'][playlistId].tracks);
}
//addTrackToPlaylist('t01', 'p02');
//console.log(library);


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var idr = uid();
  library['tracks'][idr] = {};
  library['tracks'][idr]['id'] = idr;
  library['tracks'][idr]['name'] = name;
  library['tracks'][idr]['artist'] = artist;
  library['tracks'][idr]['album'] = album;
  console.log(library['tracks'][idr]);
}
//addTrack('Modern Love', 'David Bowie', 'Lets Dance');


// adds a playlist to the library

var addPlaylist = function (name) {
  var plr = uid();
  var tracks = [];
  library['playlists'][plr] = {};
  library['playlists'][plr]['id'] = plr;
  library['playlists'][plr]['name'] = name;
  library['playlists'][plr]['tracks'] = tracks;
  console.log(library['playlists'][plr]);
}
//addPlaylist('DanceMix');

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}