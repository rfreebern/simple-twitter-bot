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

* [@CoderShow](http://twitter.com/codershow)
* [@boostrapghost](http://twitter.com/boostrapghost)
* [@AskAndAnswerBot](http://twitter.com/askandanswerbot)

## License

This Source Code Form is subject to the terms of the Mozilla Public License,
v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain
one at http://mozilla.org/MPL/2.0/.
