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
    for (var keyVar in this.playlists) {
    return (keyVar + ': ' + this.playlists[keyVar].name + " - " + this.playlists[keyVar].tracks.length + " tracks");
    }
  },
  printTracks: function () {
    for (var keyTracks in this.tracks) {
    return (keyTracks + ': ' + this.tracks[keyTracks].name + " by " + this.tracks[keyTracks].artist + " (" + this.tracks[keyTracks].album + ")");
    }
  },
  printPlaylist: function (playlistId) {
    console.log(playlistId + ": " + this.playlists[playlistId].name + " - " + this.playlists[playlistId].tracks.length + " tracks");
    for(let i = 0; i < this.playlists[playlistId].tracks.length; i++){
      var current = this.tracks[library.playlists[playlistId].tracks[i]];
      console.log(current.id + ": " + current.name + " by " + current.artist + " (" +current.album + ")");
    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
    return (this.playlists[playlistId].tracks);
  },
  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function (name, artist, album) {
    uid = this.uid();
    this.tracks[uid] = {name: name, artist: artist, album: album};
    console.log(this.tracks);
  },
  addPlaylist: function (name) {
    uid = this.uid();
    this.playlists[uid] = {id: uid, name: name, tracks: ""};
    console.log(this.playlists);
  },
}


console.log(addTrack("Walkin' on the Street","The Street Kids","Straight Outta E Haste"));



