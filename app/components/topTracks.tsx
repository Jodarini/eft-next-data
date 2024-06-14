'use client'
import { useEffect, useState } from "react";
import Card from "./card";
import { CurrentUserItem, CurrentUserItems, Track, Tracks } from "../types/spotify";

export default function TopTracks({ topTracks }: { topTracks: CurrentUserItems | undefined }) {
  const [tracks, setTracks] = useState<CurrentUserItem[] | undefined>()

  useEffect(() => {
    if (topTracks) {
      setTracks(topTracks.items)
    }
  }, [topTracks])

  return (
    <Card>
      {tracks?.map((track) => (
        <div key={track.id} >
          {
            track.artists.map((artist) => (
              <span key={artist.name}>{artist.name}</span>
            ))
          }
        </div>
      ))
      }
    </Card >
  )
}
