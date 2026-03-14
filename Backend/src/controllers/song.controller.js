const songModel = require("../models/song.model")
const storageService = require("../services/storage.service")
const id3 = require("node-id3")


async function uploadSongController(req, res) {
    const songBuffer = req.file.buffer
    const { mood } = req.body

    const songData = id3.read(songBuffer)
    console.log(songData)

    const [songFile, posterFile] = await Promise.all([
        storageService.uploadFile({
            buffer: songBuffer,
            filename: songData.title + ".mp3",
            folder: "/vishu/moodify/songs"
        }),
        storageService.uploadFile({
            buffer: songData.image.imageBuffer,
            filename: songData.title + ".jpeg",
            folder: "/vishu/moodify/posters"
        })
    ])

    const song = await songModel.create({
        title: songData.title,
        url: songFile.url,
        posterUrl: posterFile.url,
        mood
    })

    res.status(201).json({
        message: "song uploaded successfully",
        song
    })

}

async function getSongController(req, res) {
    const { mood } = req.query

    const song = await songModel.findOne({
        mood
    })

    res.status(200).json({
        message: "song fetched successfully",
        song
    })
}

module.exports = {
    uploadSongController,
    getSongController
}