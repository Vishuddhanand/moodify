import { createContext } from "react";
import { useState } from "react";

export const SongContext = createContext()

export const SongContextProvider = ({ children }) => {
    const [song, setSong] = useState({
        "url": "https://ik.imagekit.io/heu4aa5wj/vishu/moodify/songs/Baby_John_Title_Reveal__DownloadMing.WS__T7zgdsnFW.mp3",
        "posterUrl": "https://ik.imagekit.io/heu4aa5wj/vishu/moodify/posters/Baby_John_Title_Reveal__DownloadMing.WS__dDArXL_EZ.jpeg",
        "title": "Baby John Title Reveal [DownloadMing.WS]",
        "mood": "happy"
    })
    const [loading, setLoading] = useState(false)

    return (
        <SongContext.Provider value={{ song, setSong, loading, setLoading }}>
            {children}
        </SongContext.Provider>
    )
}
