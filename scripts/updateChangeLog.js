const fs = require('fs');
const prompt = require('prompt');
const { render } = require('mustache');
const args = require('yargs').argv;

(async function () {
  prompt.start();

  const { message } = await prompt.get(['message']);

  try {
    if (!message) return process.exit(1);

    const data = render(
      ` - [{{message}}](https://coaxsoftware.atlassian.net/browse/{{branch}}) \n`,
      {
        message,
        branch: args.branch,
      }
    );

    fs.appendFileSync('./CHANGELOG.md', data);
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  
})();
