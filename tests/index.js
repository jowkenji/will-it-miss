const nasaTest = require('./nasa-feed.test');
const test2 = require('./test2');

nasaTest().catch((e) => {
    console.log(`Failed: ${e.message}`);
    process.exit(1);
});

test2().catch((e) => {
    console.log(`Failed: ${e.message}`);
    process.exit(1);
});