import type React from 'react'

import { NowPlaying } from '@/components/ui/now-playing'
import { MetadataManager } from '@/lib/metadata-manager'
import data from '@/data'

import {
  Box,
  BoxContent,
  Center,
  Column,
  Container,
  Grid,
  Heading,
  Row,
  Section,
  Text
} from '@trash-ui/components'

import type { Metadata } from 'next'

type SkillChipProps = {
  icon: React.ReactNode
  name: string
}

const SkillChip: React.FC<SkillChipProps> = ({ icon, name }: SkillChipProps): React.ReactNode => {
  return (
    <Box className='rounded-full'>
      <BoxContent padding='sm'>
        <Row className='gap-3 h-full pe-2'>
          <Center className='size-10 rounded-full aspect-square bg-surface-primary-accent border border-outline-accent p-1 text-gray-50'>
            {icon}
          </Center>
          <Text className='font-medium w-full'>{name}</Text>
        </Row>
      </BoxContent>
    </Box>
  )
}

const Page: React.FC = (): React.ReactNode => {
  return (
    <Container>
      <Column className='gap-8' padding='none'>
        <Section
          divider={false}
          title={
            <Heading size='h1' color='accent'>
              {data.name}
            </Heading>
          }
          description={data.about}
        />

        <Section className='mt-0' title={<Heading size='h2'>Technologies</Heading>}>
          <Column padding='none'>
            {(Object.keys(data.technologies) as Array<keyof typeof data.technologies>).map(
              (key, index) => (
                <Section subsection key={index} title={key}>
                  <Grid className='gap-2 grid-cols-2'>
                    {data.technologies[key].map((skill, index) => {
                      return <SkillChip icon={skill.icon} name={skill.name} key={index} />
                    })}
                  </Grid>
                </Section>
              )
            )}
          </Column>
        </Section>

        <Section className='mt-0' title={<Heading size='h2'>Stacks</Heading>}>
          <Column padding='none'>
            {(Object.keys(data.stacks) as Array<keyof typeof data.stacks>).map((key, index) => (
              <Section subsection key={index} title={key}>
                <Grid className='gap-2 grid-cols-2'>
                  {data.stacks[key].map((skill, index) => {
                    return <SkillChip icon={skill.icon} name={skill.name} key={index} />
                  })}
                </Grid>
              </Section>
            ))}
          </Column>
        </Section>

        <Section
          className='mt-0'
          divider={false}
          title={<Heading size='h2'>My programming journey</Heading>}
        >
          <Column padding='none'>
            {(Object.keys(data.journey) as unknown as Array<keyof typeof data.journey>)
              .reverse()
              .map((key, index) => (
                <Grid key={index} className='gap-2 !grid-cols-2'>
                  <Heading size='h2' color='accent'>
                    {key}
                  </Heading>
                  <ul>
                    {data.journey[key].map((text, index) => (
                      <Row className='gap-1' key={index}>
                        <span className='text-text-tertiary'>-</span>
                        <Text>{text}</Text>
                      </Row>
                    ))}
                  </ul>
                </Grid>
              ))}
          </Column>
        </Section>

        <Section className='mt-0' title={<Heading size='h2'>Now playing</Heading>}>
          <NowPlaying />

          <NowPlaying api='my-love' />
        </Section>
      </Column>
    </Container>
  )
}

export const metadata: Metadata = MetadataManager.generate('About me', 'Hello, World!')

export default Page
