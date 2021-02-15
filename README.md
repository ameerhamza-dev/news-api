# News APP

This is a simple project that demonstrates how to use the GNews API to fetch news articles and display them on a web page using Next.js. The project includes both a front-end and back-end, and uses Tailwind CSS for styling.

## Installation

For development, you will only need Node.js installed on your environment.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).
### Node
[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.
```bash
 node --version v18.12.0
 npm --version 8.19.2
```
## Installations
#### Node installation on OS X
You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.
Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.
  ```bash
 ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
```
If everything when fine, you should run
  brew install node
#### Node installation on Linux
```bash
  sudo apt-get install python-software-properties
  sudo add-apt-repository ppa:chris-lea/node.js
  sudo apt-get update
  sudo apt-get install nodejs
```

## Getting Started

To run this project on your local machine, follow these steps:

- Clone the repository to your local machine
- Navigate to the project directory in your terminal
- Install the dependencies by running
```bash
npm install
```
- Create a .env.local file in the root of the project and add your GNews API key as follows: GNEWS_API_KEY=https://gnews.io/api/v4/search?q=example&apikey=a859eb0f8f5d013a974c59c34dfbe2d8
- Start the development server by running 
```bash
npm run dev
```

## Features

The project includes the following features:

- Fetching N news articles
- Finding a news article with a specific title or author
- Searching by keywords
- Pagination of news articles
- Caching search results to improve performance
- Open your browser and navigate to [http://localhost:3000](http://localhost:3000)
