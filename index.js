const targetFolder = "./SVG";
const fs = require("fs");
const prefix = "themify-";
let outputStr = "";

// read folder
fs.readdir(targetFolder, function(error, filelist) {
  filelist.forEach(item => {
    // print Type
    const name = prefix + item.replace(/.svg/, "");
    addStr(`"${name}":string,`);
    setTimeout(() => {
      // print storybook
      addStr(`{ name: "${name}", size: "20px", viewBoxWidth: "17" },`);
    }, 500);

    readFileBody(item);
  });
  setTimeout(() => {
    // addStr
    fs.writeFile("exportIconInfo.js", outputStr, "utf-8", () => {
      console.log("saved!");
    });
  }, 2000);
});

// read file
function readFileBody(fileName) {
  fs.readFile(targetFolder + `/${fileName}`, "utf8", function(err, data) {
    let svgpath = data.match(/<path d="[^"]+"/g);
    svgpath = String(svgpath).replace(/<path d="/, '"');
    const file = fileName.replace(/.svg/, "");
    // print key(name):value(path)
    addStr(`"${prefix}${file}":${svgpath},`);
  });
}

function addStr(str) {
  outputStr += str + "\n";
}
