# Martian Node.js Library

## Installation

You can install this package by running

```bash
npm i martian-node
```

## Usage

See the Martian API documentation at [docs.withmartian.com](https://docs.withmartian.com).

### Example

```javascript
const { Configuration, OpenAIApi } = require('martian-node')

const configuration = new Configuration({
    martianApiKey: process.env.MARTIAN_API_KEY,
})
const openai = new OpenAIApi(configuration)

const chatCompletion = await openai.createChatCompletion({
    // model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: 'Hello world' }],
})
console.log(chatCompletion.data.choices[0].message)
```
