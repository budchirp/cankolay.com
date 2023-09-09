import React from 'react'

import { PageHeader } from '@/components/page-header'
import { components } from '@/components/mdx'
import { genMetadata } from '@/lib/gen-metadata'
import { Post } from '@/lib/post'
import { Book, Calendar, User } from 'lucide-react'
import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'

import type { DynamicPageProps } from '@/types/page'
import type { BlogPost } from '@/types/post'
import type { Metadata } from 'next'

const generateMetadata = async ({ params: { slug } }: DynamicPageProps): Promise<Metadata> => {
  const post: BlogPost | null | undefined = await new Post().getBySlug(slug)

  if (!post) {
    notFound()
  }

  return genMetadata({
    title: `${post.title} - Blog`,
    description: post.description,
    other: {
      openGraph: {
        type: 'article',
        publishedTime: post.date.toISOString(),
        images: [
          {
            url: post.imageUrl
          }
        ]
      }
    }
  })
}

const Page: React.FC<DynamicPageProps> = async (
  { params: { slug } }: DynamicPageProps
): Promise<JSX.Element> => {
  const post: BlogPost | null | undefined = await new Post().getBySlug(slug)

  if (!post) {
    notFound()
  }

  const { content } = await compileMDX({
    source: post.body,
    components,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
        remarkPlugins: [remarkGfm, [remarkToc, { tight: true, ordered: true }]]
      }
    }
  })

  return (
    <>
      <PageHeader
        bottomPart={
          <div>
            <span className="text-secondary flex items-center gap-1 font-medium">
              <User className="h-4 w-4" /> <p>{post.author}</p>
            </span>
            <span className="text-secondary flex items-center gap-1 font-medium">
              <Calendar className="h-4 w-4" /> <p>{post.formattedDate}</p>
            </span>
            <span className="text-secondary flex items-center gap-1 font-medium">
              <Book className="h-4 w-4" /> <p>{post.readingTime}</p>
            </span>
          </div>
        }
      >
        {post.title}
      </PageHeader>

      <article className="prose dark:prose-dark">{content}</article>
    </>
  )
}

const generateStaticParams = async (): Promise<{ [key: string]: any }[]> => {
  const posts = await new Post().getAll()

  return posts.map((post) => ({ slug: post.slug }))
}

export { generateMetadata, generateStaticParams }
export default Page
