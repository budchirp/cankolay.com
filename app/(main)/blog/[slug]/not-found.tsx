import React from 'react'

import { GoBack } from '@/components/utils/go-back'
import { VerticalPage } from '@/components/VerticalPage'
import { genMetadata } from '@/lib/gen-metadata'

import type { ErrorProps } from '@/types/error'
import type { Metadata } from 'next'

const metadata: Metadata = genMetadata({ title: 'Post not found' })

const NotFound: React.FC<ErrorProps> = (): React.ReactNode => {
  return (
    <VerticalPage items={['Blog', 'post', 'not', 'found!']} title={'🙈'}>
      <GoBack />
    </VerticalPage>
  )
}

export { metadata }
export default NotFound
