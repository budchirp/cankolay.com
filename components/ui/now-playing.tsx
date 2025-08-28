'use client'

import type React from 'react'
import { useEffect, useState } from 'react'

import { Disc3, VolumeX } from 'lucide-react'
import { Hourglass } from '@/lib/hourglass'
import { Fetch } from '@/lib/fetch'
import Image from 'next/image'
import Link from 'next/link'

import {
  Section,
  Box,
  BoxContent,
  Center,
  Column,
  Text,
  Row,
  RawColumn
} from '@trash-ui/components'

import type { Song } from '@/types/song'

type NowPlayingProps = {
  api?: 'me' | 'my-love'
}

export const NowPlaying: React.FC<NowPlayingProps> = ({ api = 'me' }) => {
  const [song, setSong] = useState<Song | null>(null)

  const fetchNowPlaying = async () => {
    try {
      const response = await Fetch.get(`/api/now-playing/${api}`)
      const json: any = await response.json()

      if (!response.ok) {
        throw new Error(json.message)
      }

      setSong(json.data)
    } catch {
      setSong(null)
    }
  }

  useEffect(() => {
    const interval = setInterval(fetchNowPlaying, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Section subsection title={api === 'me' ? 'Me' : 'My 💗'}>
      <Box className='relative overflow-hidden'>
        <BoxContent padding='sm'>
          <div className='absolute inset-0 blur-3xl opacity-75 w-full h-3/4  xs:h-full xs:w-1/4'>
            {song?.image && (
              <Image
                height={50}
                width={50}
                src={song?.image}
                alt='album'
                className='object-fill size-full select-none rounded-2xl'
              />
            )}
          </div>

          <Column padding='none' className='xs:flex-row z-10 w-full items-center gap-2'>
            <Center className='border border-outline aspect-square overflow-hidden shrink-0 rounded-2xl size-full xs:size-20'>
              {song?.image ? (
                <Image
                  height={400}
                  width={400}
                  className='aspect-square size-full object-cover'
                  src={song?.image}
                  alt='album'
                />
              ) : (
                <VolumeX className='xs:size-8 size-16' />
              )}
            </Center>

            <Column padding='none' className='gap-4 w-full p-2 xs:pe-2 xs:ps-0 xs:justify-center'>
              <Column padding='none' className='gap-1'>
                <Link href={song?.link || ''} target='_blank' className='flex items-center gap-1.5'>
                  <Disc3 className={song?.isPlaying ? 'animate-spin-slow' : ''} size={16} />

                  <Text className='text-lg flex-1 font-bold leading-none'>
                    {song?.title || 'Playing nothing'}
                  </Text>
                </Link>

                <Text className='font-medium leading-none text-tertiary'>
                  {song?.artist || '*****'}
                </Text>
              </Column>

              <Row className='gap-2'>
                <Text className='text-sm w-10 text-start leading-none text-secondary'>
                  {Hourglass.formatTime(song?.elapsedTime)}
                </Text>

                <Row className='w-full h-2 border border-outline box-content p-0.5 bg-surface-secondary rounded-full'>
                  <div
                    className='bg-linear-to-r from-accent-700 shadow via-accent-500 to-accent-600 ease-linear transition-width duration-1000 h-full rounded-full'
                    style={{
                      width: `${song?.percentage || 0}%`
                    }}
                  />
                </Row>

                <Text className='text-sm w-10 text-end leading-none text-secondary'>
                  {Hourglass.formatTime(song?.totalTime)}
                </Text>
              </Row>
            </Column>
          </Column>
        </BoxContent>
      </Box>
    </Section>
  )
}
