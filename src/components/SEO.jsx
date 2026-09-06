import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Reform Rentals'

export default function SEO({ title, description }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}
