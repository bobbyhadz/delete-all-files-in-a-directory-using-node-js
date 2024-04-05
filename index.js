// EXAMPLE 1 - How to Delete all Files in a Directory using Node.js

import fs from 'fs/promises';
import path from 'path';

// 👇️ if you use CommonJS require()
// const fs = require('fs/promises');
// const path = require('path');

async function deleteAllFilesInDir(dirPath) {
  try {
    const files = await fs.readdir(dirPath);

    const deleteFilePromises = files.map(file =>
      fs.unlink(path.join(dirPath, file)),
    );

    await Promise.all(deleteFilePromises);
  } catch (err) {
    console.log(err);
  }
}

deleteAllFilesInDir('./my-directory').then(() => {
  console.log('Removed all files from the specified directory');
});

// ------------------------------------------------------------------

// // EXAMPLE 2 - How to Delete all Files in a Directory Synchronously using Node.js

// import fs from 'fs';
// import path from 'path';

// // 👇️ if you use CommonJS require()
// // const fs = require('fs');
// // const path = require('path');

// function deleteAllFilesInDir(dirPath) {
//   try {
//     fs.readdirSync(dirPath).forEach(file => {
//       fs.rmSync(path.join(dirPath, file));
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// deleteAllFilesInDir('./my-directory');

// console.log('Removed all files from the specified directory');

// ------------------------------------------------------------------

// // EXAMPLE 3 - How to Delete all Files in a Directory using fs-extra

// import fsExtra from 'fs-extra';

// // 👇️ if you use CommonJS require()
// // const fsExtra = require('fs-extra');

// try {
//   fsExtra.emptyDirSync('./my-directory');
//   console.log('All files in the directory deleted successfully');
// } catch (err) {
//   console.log(err);
// }
