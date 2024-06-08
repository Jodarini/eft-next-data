'use client'
import React, { useEffect, useState } from 'react'
import { CurrentUserPlaylistItem, CurrentUserPlaylists } from '../types/spotify'

export default function UserPlaylists({ playlists }: { playlists: CurrentUserPlaylistItem[] }) {
  const [userPlaylists, setUserPlaylists] = useState<CurrentUserPlaylistItem[]>()

  const searchLibrary = () => {
    // let filteredLibraryList = userPlaylists.filter(library => library)
  }

  useEffect(() => {
    setUserPlaylists(playlists)
  }, [playlists])

  return (
    <div className='flex flex-col gap-4'>
      {userPlaylists?.map((playlist) => (
        <div key={playlist.id} className='flex flex-row items-center gap-2'>
          <img src={playlist.images[0].url} alt='Image' className='max-w-12 rounded'></img>
          <div>{playlist.name}</div>
        </div>
      ))}
    </div>
  )
}
