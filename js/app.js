console.log("JS is linked");


function clicker(messageTag){
  document.getElementById(messageTag).innerHTML = "Thank you for signing up!  You'll recieve an email shortly.  <hr> Don't forget to pay below. <br> (Please use the same email that you signed up with.)";

  // setTimeout("formSubmitter()",3000);
}

// function formSubmitter(formTag){
//   console.log('this is document.forms');
//   console.log(document.forms);
//   console.log('this is formTag');
//   console.log(formTag);
//   document.forms[formTag].submit();
// }
