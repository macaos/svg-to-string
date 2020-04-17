const targetFolder = "./SVG";
const fs = require("fs");

// read folder
fs.readdir(targetFolder, function(error, filelist) {
  filelist.forEach(item => readFileBody(item));
});

// read file
function readFileBody(path) {
  console.log(path);
  fs.readFile(targetFolder + `/${path}`, "utf8", function(err, data) {
    console.log(data);
  });
}
