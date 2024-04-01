export async function instagramData() {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_URL}`)
  const data = await resp.json()
  return data.data
}

export async function youtubeData() {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_GOOGLE_API}?part=snippet&maxResults=50&playlistId=${process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_ID}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
  )
  const data = await resp.json()
  return data
}
