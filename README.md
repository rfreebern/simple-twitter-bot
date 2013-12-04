# Simple Twitter Bot

This is a framework for creating simple Twitter bots in node. It uses the
straightforward [Twit](https://github.com/ttezel/twit) library to access
Twitter's streaming API.

## Usage

1. `git clone https://github.com/rfreebern/simple-twitter-bot.git && cd simple-twitter-bot && npm install`
2. Create an application on http://dev.twitter.com
3. Generate the necessary tokens.
4. Copy `config.js-dist` to `config.js`
5. Put your tokens in `config.js`
6. Put some keywords for your bot to follow in the `keywords` array in `config.js`
7. Add whatever logic you want to the `valid` and `response` functions in `config.js`
8. `node bot.js > output.log &`

## What Uses It

* [@XsGonnaX](http://twitter.com/xsgonnax)
* [@CoderShow](http://twitter.com/codershow)
* [@boostrapghost](http://twitter.com/boostrapghost)
* [@AskAndAnswerBot](http://twitter.com/askandanswerbot)

## License

To the extent possible under law, Ryan Freebern has waived all copyright and
related or neighboring rights to this work. [CC0](http://creativecommons.org/publicdomain/zero/1.0/)
