"use strict";

const fs = require('fs');
const _ = require('lodash');

// Correct links in README.md
// from [**createSoundbox**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#createSoundbox)
// to [**createSoundbox**](docs/AudioApi.html#createSoundbox)
function fixReadmeLinks() {
  const linksInMasterRegex = /\[(.*?)\]\(https:\/\/github\.com\/shutterstock\/public-api-javascript-sdk\/blob\/master\/docs\/(.*?)\.md#(.*?)\)/g;
  const readmeText = fs.readFileSync(`${__dirname}/../README.md`, 'utf8');
  const readmeByLines = readmeText.split('\n');
  const fixedReadme = _.reduce(readmeByLines, (acc, line) => {
    var match;
    var fixedLine = line;
    while (match = linksInMasterRegex.exec(line)) {
      const correctedLink = `[${match[1]}](docs/${match[2]}.html#${match[3]})`;
      fixedLine = fixedLine.replace(match[0], correctedLink);
    }
    return acc + fixedLine + '\n';
  }, '');
  fs.writeFileSync(`${__dirname}/../README.md`, fixedReadme, 'utf8');
}

fixReadmeLinks();
