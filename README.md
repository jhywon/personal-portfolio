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

Make sure the ENV variable `REMOTE` is set. For example, run

```shell
REMOTE=ubuntu@ec2-xx-xx-xx-xx.us-east-2.compute.amazonaws.com
```

or put
```bash
export REMOTE=ubuntu@ec2-xx-xx-xx-xx.us-east-2.compute.amazonaws.com
```

in your `.bashrc` or `.zshrc`

```shell
cd personal-website
yarn build
rsync -rave "ssh -i portfolio.pem" build/ $REMOTE:/home/ubuntu/jessie/
```
