const SongsManager = function(){
  const songs = {}
  const baseUrl = "https://www.youtube.com/watch?v="

  const addSong = function(name,url){
    const videoID = url.split("=")[1]
    songs[name] = videoID
  }
  const getSong = function(name){
    console.log(baseUrl+songs[name])
  }
  return{
    addSong,
    getSong
  }
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
