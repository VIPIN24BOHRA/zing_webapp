import { NextSeo } from 'next-seo'

import { SeoConfig } from '@/utils/SeoConfig' // your path will vary

export default async function Head() {
  return <NextSeo {...SeoConfig} useAppDir={true} />
}
