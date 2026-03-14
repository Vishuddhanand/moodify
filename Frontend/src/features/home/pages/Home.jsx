import React from 'react'
import FaceExpression from '../../Expression/components/FaceExpression'
import SongPlayer from '../components/SongPlayer'
import { useSong } from '../hooks/useSong'

const Home = () => {

    const { handleGetSong } = useSong()

    return (
        <>
            <FaceExpression
                onClick={(expression) => { handleGetSong({ mood: expression }) }}
            />
            <SongPlayer />
        </>
    )
}

export default Home
