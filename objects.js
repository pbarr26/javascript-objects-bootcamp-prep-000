var playlist = {
  Santana : 'smooth'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName]=songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  Delete playlist.artistName
  return playlist
}