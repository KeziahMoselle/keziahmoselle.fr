<p align="center">
  <img src="https://i.imgur.com/QKQrHJi.png" height="64" alt="KeziahMoselle Logo">
</p>


<h3 align="center"><a href="https://keziahmoselle.fr/">keziahmoselle.fr</a></h3>


<p align="center">
  <a href="https://app.netlify.com/sites/keziahmoselle/deploys"><img src="https://api.netlify.com/api/v1/badges/f29054f0-e636-47f3-b039-dd60bfbb40f0/deploy-status" alt="netlify badge"/></a>
</p>

---

## Requirements

- Node.js >= 12.9.0
- Yarn >= 1.22.4 
- Netlify platform

## Install

1. Install dependencies
```sh
> yarn
```

2. Set environment variables

- Create a website on Netlify
- Go to : `Settings > Build & deploy > Environment` and set these variables :

```
BASEURL=                   The base URL of the website (i.e: https://keziahmoselle.fr/)
BLOG_URL=                  The base URL of the blog (i.e: https://blog.keziahmoselle.fr/)

MAILGUN_DOMAIN=            Used to send emails
MAILGUN_API_KEY=           Used to send emails
MY_EMAIL_ADDRESS=          Send emails to this address

DISCORD_WEBHOOK_URL=       Contact form messages being sent to this webhook URL

GITHUB_BEARER_TOKEN=       Used for the GraphQL API
GITHUB_USERNAME=           Used for the GraphQL API

DYNAMO_ACCESS_KEY_ID=      Used for DynamoDB (for the appreciations thing in the footer)
DYNAMO_SECRET_ACCESS_KEY=  Used for DynamoDB (for the appreciations thing in the footer)
DYNAMO_REGION=             Used for DynamoDB (for the appreciations thing in the footer)

NODE_VERSION=              Specify the Node version to use

EMAIL_VALANKA=             Specific endpoint
```

3. Init Netlify dev :
```sh
> npx netlify link
```

And link it to your Netlify website

4. Run Next and Netlify functions
```sh
> yarn start
```
Open [http://localhost:8888/](http://localhost:8888/)

## Build

To build the App and the Netlify functions run :
```sh
> yarn build
```

`/out` and `/functions` will be generated.

## Archive

### [See v2 online](https://keziahmoselle.fr/) (2019)

<a href="https://keziahmoselle.fr/" target="_blank">
  <p align="center">
    <img width="100%" src="./.github/v2.png" alt="preview">
  </p>
</a>

### [See v1 online](https://v1.keziahmoselle.fr/) (2018)

<a href="https://v1.keziahmoselle.fr/" target="_blank">
  <p align="center">
    <img width="100%" src="./.github/v1.png" alt="preview">
  </p>
</a>

### [See beta online](https://beta.keziahmoselle.fr/) (2017)

<a href="https://beta.keziahmoselle.fr/" target="_blank">
  <p align="center">
    <img width="100%" src="./.github/beta.png" alt="preview">
  </p>
</a>

### [See alpha-2 online](https://alpha-2.keziahmoselle.fr/) (2016-2017)

<a href="https://alpha-2.keziahmoselle.fr/" target="_blank">
  <p align="center">
    <img width="100%" src="./.github/alpha-2.png" alt="preview">
  </p>
</a>

### [See alpha online](https://alpha.keziahmoselle.fr/) (2015-2016)

<a href="https://alpha.keziahmoselle.fr/" target="_blank">
  <p align="center">
    <img width="100%" src="./.github/alpha.png" alt="preview">
  </p>
</a>
