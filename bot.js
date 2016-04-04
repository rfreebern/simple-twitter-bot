var Twit = require('twit'),
    Config = require('./config.js');

if (Config.debug) {
    console.log("In debug mode.");
}

var T = new Twit({
    consumer_key: Config.consumer_key,
    consumer_secret: Config.consumer_secret,
    access_token: Config.access_token,
    access_token_secret: Config.access_token_secret
});

var stream = T.stream('statuses/filter', { track: Config.keywords });
stream.on('tweet', function (tweet) {
    if (Config.valid(tweet)) {
        var response = Config.respond(tweet);
        if (!Config.debug && response) {
            T.post('statuses/update', { status: response }, function (err, reply) {
                if (err) {
                    console.log(err);
                } else {
                    var now = new Date();
                    console.log('[' + now.toJSON() + '] SENT: ' + response);
                }
            });
        } else {
            if (!response) {
                response = '(no response)';
            }
            var now = new Date();
            console.log('[' + now.toJSON() + '] ' + response);
        }
    } else {
        var now = new Date();
        console.log('[' + now.toJSON() + '] INVALID: @' + tweet.user.screen_name + ':' + tweet.text);
    }
});

stream.on('warning', function (item) { console.log('WARNING: ' + item); });
stream.on('disconnect', function (item) { console.log('Stream disconnected.'); });
stream.on('connect', function (item) { console.log('Stream connected.'); });
stream.on('reconnect', function (item) { console.log('Stream reconnected.'); });
