import type React from 'react'

import { CenteredPage } from '@/components/vertical-page'
import { MetadataManager } from '@/lib/metadata-manager'
import { GoBack } from '@/components/utils/go-back'

import { Container } from '@trash-ui/components'

import type { ErrorProps } from '@/types/error'
import type { Metadata } from 'next'

const NotFound: React.FC<ErrorProps> = (): React.ReactNode => (
  <Container className='h-full'>
    <CenteredPage items={["There's", 'nothing', 'to', 'see', 'here']} title={'👻'}>
      <GoBack removeSearchParams />
    </CenteredPage>
  </Container>
)

export const metadata: Metadata = MetadataManager.generate(
  'No post available',
  "There's nothing to see here"
)

export default NotFound
