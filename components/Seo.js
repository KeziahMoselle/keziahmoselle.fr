import React from 'react'
import Head from 'next/head'

function Seo ({
  name = 'Keziah MOSELLE',
  domainUrl = process.env.BASEURL,
  metaDescription = "Portfolio de Keziah MOSELLE, développeur front-end autodidacte depuis 6 ans et passionné par le développement web, l'UI/UX, l'accessibilité et l'enseignement.",
  coverImageUrl = `${process.env.BASEURL}cover.png`
}) {
  return (
    <React.Fragment>
      <meta	name="viewport"	content="width=device-width, initial-scale=1, shrink-to-fit=no" key="viewport" />

      <meta name="title" content={name} key="title" />
      <meta name="description" content={metaDescription} key="description" />

      <link rel="shortcut icon" href="/favicon.ico" key="favicon" />
      <link rel="canonical" href={domainUrl} key="canonical" />

      <meta property="og:type" content="website" key="ogtype" />
      <meta property="og:url" content={domainUrl} key="ogurl" />
      <meta property="og:title" content={name} key="ogtitle" />
      <meta property="og:description" content={metaDescription} key="ogdescription" />
      <meta property="og:image" content={coverImageUrl} key="ogimage" />

      <meta property="twitter:card" content="summary_large_image" key="twittercard" />
      <meta property="twitter:url" content={domainUrl} key="twitterurl" />
      <meta property="twitter:title" content={name} key="twittertitle" />
      <meta property="twitter:description" content={metaDescription} key="twitterdescription" />
      <meta property="twitter:image" content={coverImageUrl} key="twitterimage" />
      <noscript key="noscript">
        <div className="flex center">
          <div className="card noscript">
                JavaScript est désactivé, ce site fonctionnera mieux si vous l'activez.
          </div>
        </div>
      </noscript>
    </React.Fragment>
  )
}

export default Seo
