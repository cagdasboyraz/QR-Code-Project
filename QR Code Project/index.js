import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
  inquirer.prompt([{
    message:"type in your URL",
    name: "URL",
  },
    
])
.then((answers) => {

 const url = answers.URL;
 var qr_svg = qr.image('URL');
qr_svg.pipe(fs.createWriteStream('i_love_qr.svg'));
 
})
.catch((error) => {
  if (error.isTtyError) {
    
  } else {
   
  }
});

