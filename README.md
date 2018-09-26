# Personal Website
This is my personal website built using React.

## Start the Development Server

```shell
cd personal-website
yarn
yarn start
```

or

```shell
cd personal-website
npm install
npm start
```

## Deploy to Production

```shell
cd personal-website
yarn build
rsync -rave "ssh -i portfolio.pem" build/ $REMOTE:/home/ubuntu/jessie/
```
