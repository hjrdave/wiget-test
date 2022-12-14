// include node fs module
var fs = require('fs');

const path = "./src/scenes/Test";
  
fs.access(path, (error) => {
   
  // To check if the given directory 
  // already exists or not
  if (error) {
    // If current directory does not exist
    // then create it
    fs.mkdir(path, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("New Directory created successfully !!");
      }
    });
    // writeFile function with filename, content and callback function
fs.writeFile('scene.tsx', '', function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});

fs.writeFile('index.tsx', '', function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});

fs.writeFile('Test.module.scss', '', function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});
  } else {
    console.log("Given Directory already exists !!");
  }
});
 
