let fileAsBlob;
let hash;
let file;

const BASE_URL = 'https://svc.mobe3app.com/api/submit_resume.js';
document.getElementById('fileInput').addEventListener('change', function (event) {
  file = event.target.files[0];  
  hash = CryptoJS.MD5(file)
  fileAsBlob = new Blob([file]);
  console.log(hash);
  console.log(fileAsBlob);
  const blobAsFile = new File([fileAsBlob], file.name, {type: file.type, lastModified: file.lastModifiedDate});
  
  console.log(blobAsFile);
  
  
}, false);

document.getElementById('sendApi').addEventListener('click', function (event) {
  console.log(fileAsBlob)
  fetch(`${BASE_URL}?filename=${file}`, {
    
  }) 
}, false);

