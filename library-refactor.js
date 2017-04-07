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
              },

  printPlaylists: function () {
  for (var key in this.playlists) {
    if(this.playlists.hasOwnProperty(key)) {
      var list = this.playlists[key];
      key += " " + list.name;
      key += " - " + list.tracks.length + " tracks";
      console.log(key);
      }
    }
  },


  printTracks:  function () {
  for (var key in this.tracks) {
    if(this.tracks.hasOwnProperty(key)) {
      var list = this.tracks[key];
      key += ": " + list.name;
      key += " by " + list.artist;
      key += " (" + list.album + ")";
      console.log(key);
    }
  }
  return key
  },


  printPlaylist: function (playlistId) {
  // get and print playlist information
  if (playlistId in this.playlists) {
    var list = this.playlists[playlistId].id;
    list += ": " + this.playlists[playlistId].name;
    list += " - " + this.playlists[playlistId].tracks.length + " tracks";

  // create an array for tracks
    var track = [];
    // get and store info for each track in an array
    for (var i = 0; i <= this.playlists[playlistId].tracks.length; i++) {
      if (this.playlists[playlistId].tracks[i] in this.tracks) {
        trackCount = this.playlists[playlistId].tracks[i];
        track[i] = this.tracks[trackCount].id;
        track[i] += ": " + this.tracks[trackCount].name;
        track[i] += " by " + this.tracks[trackCount].artist;
        track[i] += " (" + this.tracks[trackCount].album + ")\n";
      }
    }
    console.log(list + "\n" + track.join(""));
    }
  },


  addTrackToPlaylist: function (trackId, playlistId) {
    this['playlists'][playlistId]['tracks'].push(trackId);
    console.log(this['playlists'][playlistId].tracks);
  },


  addTrack: function (name, artist, album) {
    var idr = uid();
    this['tracks'][idr] = {};
    this['tracks'][idr]['id'] = idr;
    this['tracks'][idr]['name'] = name;
    this['tracks'][idr]['artist'] = artist;
    this['tracks'][idr]['album'] = album;
    console.log(this['tracks'][idr]);
  },


  addPlaylist: function (name) {
  var plr = uid();
  var tracks = [];
  this['playlists'][plr] = {};
  this['playlists'][plr]['id'] = plr;
  this['playlists'][plr]['name'] = name;
  this['playlists'][plr]['tracks'] = tracks;
  console.log(this['playlists'][plr]);
  },


  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  //STRETCH - printSearchResults: function(query) {
      //var printSearchResults = function(query) {
  //}
};


// library.printTracks();