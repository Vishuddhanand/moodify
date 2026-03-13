const songModel = require("../models/song.model")

const id3 = require("node-id3")


async function uploadSongController(req, res) {
    const songBuffer = req.file.buffer
    const songData = await id3.read(songBuffer)
    console.log(songData)

}

module.exports = {
    uploadSongController
}