"use strict";

const fs = require('fs');
const _ = require('lodash');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const readmeFilePath = `${__dirname}/../README.md`;

// Correct links in README.md
// from [**createSoundbox**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#createSoundbox)
// to [**createSoundbox**](docs/AudioApi.html#createSoundbox)
async function fixReadmeLinks(readmeFilePromise) {
  const linksInMasterRegex = /\[(.*?)\]\(https:\/\/github\.com\/shutterstock\/public-api-javascript-sdk\/blob\/master\/docs\/(.*?)\.md#(.*?)\)/g;
  const readmeText = await Promise.resolve(readmeFilePromise);
  const readmeByLines = readmeText.split('\n');
  const fixedReadme = _.map(readmeByLines, (line) => {
    var match;
    var fixedLine = line;
    while (match = linksInMasterRegex.exec(line)) {
      const correctedLink = `[${match[1]}](docs/${match[2]}.html#${match[3]})`;
      fixedLine = fixedLine.replace(match[0], correctedLink);
    }
    return fixedLine;
  });
  return fixedReadme.join('\n');
}

// Add acknowledgement to template creator
async function addAcknowledgement(readmeFilePromise) {
  const readmeText = await Promise.resolve(readmeFilePromise);
  return readmeText + '\n## Acknowledgements\n\nThanks to Tom Johnson of [I\'d Rather Be Writing](https://idratherbewriting.com/) for this Jekyll template.'
}

// For Jekyll to process plaintext links into clickable links, add <>.
// Skip markdown links with urls within parens and brackets and links that are within asterisks.
async function linkifyUrls(readmeFilePromise) {
  const simpleUrlRegexAvoidMarkdownLinks = /[^\(*\[](https?:\/\/[\w-.\/]*\w)/gm;
  const readmeText = await Promise.resolve(readmeFilePromise);
  const readmeByLines = readmeText.split('\n');
  const fixedReadme = _.map(readmeByLines, (line) => {
    var match;
    var fixedLine = line;
    while (match = simpleUrlRegexAvoidMarkdownLinks.exec(line)) {
      const correctedLink = `<${match[1]}>`;
      fixedLine = fixedLine.replace(match[1], correctedLink);
    }
    return fixedLine;
  });
  return fixedReadme.join('\n');
}

async function writeReadmeFile(readmeFilePromise) {
  const readmeText = await Promise.resolve(readmeFilePromise);
  return writeFile(`${__dirname}/../README_out.md`, readmeText, 'utf8');
}

_.mixin({
  fixReadmeLinks,
  writeReadmeFile,
  addAcknowledgement,
  linkifyUrls,
  readFile,
});

async function fixReadme() {
  const result = await _.chain(readmeFilePath)
    .readFile('utf8')
    .fixReadmeLinks()
    .addAcknowledgement()
    .linkifyUrls()
    .writeReadmeFile()
    .value();
}

fixReadme();