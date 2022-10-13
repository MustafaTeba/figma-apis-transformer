const Figma = require("figma-js");

const token = "198695-fe7589f6-2ec9-4077-b519-b447e17efb8b";

const client = Figma.Client({
  personalAccessToken: token
});

// client.file("r1oHTsz36CLBg4WlMqgEmZ").then(({ data }) => {
//   console.log(data);
// });

// import * as Figma from 'figma-js';

const textNode: Figma.Text = {
  // … this should autocomplete if your editor is set up for it!
};
