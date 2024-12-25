'use client'

import { useEffect } from 'react'

export function Loader() {
  useEffect(() => {
    // @ts-ignore
    chaoticOrbit.register()
  }, [])

  return (
    <div className="flex justify-center items-center h-[calc(100vh-3.5rem)]">
      <l-chaotic-orbit
        size="100"
        speed="1.5"
        color="rgb(255, 120, 10)"
      ></l-chaotic-orbit>
    </div>
  )
}

