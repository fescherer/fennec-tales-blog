import { IPost } from '@/@types'
import { METADATA } from '@/app.config'
import { AUTHORS_DATA } from '@/authors.config'
import { ContentWrapper } from '@/components/content-wrapper'
import { PostPage } from '@/features/post-page'
import { JSONLD } from '@/utils/JSONLD'
import { getArticleJSONLD } from '@/utils/JSONLD/data/article'
import { publisherJSONLD } from '@/utils/JSONLD/data/publisher'
import { getPostNames } from '@/utils/post-functions'
import { getPostData } from '@/utils/post-functions/getPostData'

type SlugPageParams = {
  type: string
  slug: string
}

type SlugPageProps = {
  params: SlugPageParams
}

interface PageProps {
  params: {
    type: string
    slug: string
  }
}

export async function generateMetadata(
  { params: { slug, type } }: PageProps,
) {
  const data = await getPostData(type, slug)

  return {
    title: data.title,
    alternates: {
      canonical: `${METADATA.canonical_url}/posts/${type}/${slug}`,
    },

    openGraph: {
      title: `${data.title} | ${METADATA.title}`,
      description: data.content.slice(0, 90).trim(),
      url: `${METADATA.canonical_url}/posts/${type}/${slug}`,
      siteName: METADATA.title,
      images: [
        {
          url: data.image,
          alt: data.alt,
          width: 1300,
          height: 630,
        },
      ],
      locale: 'en',
      type: 'article',
    },

    authors: AUTHORS_DATA.map(author => ({ name: author.full_name, url: author.profiles.find(profile => profile.id === 'profile')?.url || '' })),
  }
}

/**
 * return all possible blogId values in an array like [{blogId: 'first_blog'}, {blogId: 'second_blog'}]
 */
export function generateStaticParams() {
  const blogPosts = getPostNames()
  return blogPosts
}

function getJSONLD(doc: IPost, type: string, slug: string) {
  return getArticleJSONLD({
    '@type': 'Article',
    'headline': doc.title,
    'url': `${METADATA.canonical_url}/posts/${type}/${slug}`,
    'datePublished': doc.published_date,
    'dateModified': doc.updated_at,
    'image': {
      '@type': 'ImageObject',
      'url': doc.image,
      'width': `${METADATA.thumb.width}px`,
      'height': `${METADATA.thumb.height}px`,
    },
    'keywords': doc.tags,
    'description': doc.content.slice(0, 90).trim(),
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `${METADATA.canonical_url}/posts/${type}/${slug}`,
    },
    'author': {
      '@type': 'Person',
      'name': doc.author,
    },
    'publisher': publisherJSONLD,
  })
}

export default async function SlugPage({ params: { slug, type } }: SlugPageProps) {
  const post = await getPostData(type, slug)

  return (
    <ContentWrapper isArticle>
      {JSONLD(getJSONLD(post, type, slug))}
      <PostPage post={post} />
    </ContentWrapper>
  )
}
