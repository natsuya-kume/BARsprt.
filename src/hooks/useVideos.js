import { useState, useEffect } from 'react'
import youtube from '../apis/youtube'

const useVideos = (defaultSearchTerm) => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm)
    }, [defaultSearchTerm]);

    const search = async (term) => {

        const KEY = "AIzaSyCUxuTLIr - 6VmNX0ld9gnKWXRlfSD7Fzt4"

        const response = await youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                type: 'video',
                maxResults: 10,
                key: KEY,
            }
        });
        setVideos(response.data.items);
    }

    return [videos, search]
}

export default useVideos;