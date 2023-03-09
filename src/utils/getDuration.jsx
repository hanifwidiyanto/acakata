import React from 'react'
import useSWR from 'swr'

const apikey = process.env.YOUTUBE_APIKEY

const fetcher = (idVideo) => fetch(`https://www.googleapis.com/youtube/v3/videos?id=WFapUOfotuM&part=contentDetails&key=AIzaSyA0QexKMy7iZBJm7YF7IeAi0OnBpRfTzOA`).then((res) => res.json());

export default function getDuration(idVideo) {
    const { data, error } = useSWR(idVideo, fetcher)
    return data
}
