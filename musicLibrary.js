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


var printPlaylists = function() {
  for (var keyVar in library.playlists) {
  console.log(keyVar + ': ' + library.playlists[keyVar].name + " - " + library.playlists[keyVar].tracks.length + " tracks");
  }
}


var printTracks = function () {
  for (var keyTracks in library.tracks) {
  console.log(keyTracks + ': ' + library.tracks[keyTracks].name + " by " + library.tracks[keyTracks].artist + " (" + library.tracks[keyTracks].album + ")");
  }
}


var printPlaylist = function (playlistId) {
  console.log(playlistId + ": " + library.playlists[playlistId].name + " - " + library.playlists[playlistId].tracks.length + " tracks");
  for(let i = 0; i < library.playlists[playlistId].tracks.length; i++){
    var current = library.tracks[library.playlists[playlistId].tracks[i]];
    console.log(current.id + ": " + current.name + " by " + current.artist + " (" +current.album + ")");
  }
}


var addTrackToPlaylist = function (trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
  console.log(library.playlists[playlistId].tracks)
}

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


var addTrack = function (name, artist, album) {
  uid = uid();
  library.tracks[uid] = {
    name: name,
    artist: artist,
    album: album,
  }
  console.log(library.tracks);
}

var addPlaylist = function (name) {
  uid = uid ();
  library.playlists[uid] = {
    id: uid,
    name: name,
    tracks: ""
  };
  console.log(library.playlists);
}


