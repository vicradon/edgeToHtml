#!/usr/bin/env node
const fs = require("fs");
const glob = require("glob");
const args = process.argv.slice(2);

switch (args[0]) {
  case "forward": {
    return edgeToHtml();
  }
  case "reverse": {
    return htmlToEdge();
  }
  default: {
    console.log(
      "Please run the command with the desired direction ('forward' or 'reverse')"
    );
    break;
  }
}

function edgeToHtml() {
  glob("**/*.edge", {}, (err, files) => {
    files.forEach((file) => {
      fs.renameSync(file, `${file}.html`);
    });
  });
}

function htmlToEdge() {
  glob("**/*.edge.html", {}, (err, files) => {
    files.forEach((file) => {
      const fileWithoutHtml = file.split(".html")[0];
      fs.renameSync(file, fileWithoutHtml);
    });
  });
}
