console.log("JS is linked");




function clicker(messageTag){
  document.getElementById(messageTag).innerHTML = "Thank you for signing up!  We'll send you a confirmation email shortly.";
  
  // setTimeout("formSubmitter()",3000);
}

// function formSubmitter(formTag){
//   console.log('this is document.forms');
//   console.log(document.forms);
//   console.log('this is formTag');
//   console.log(formTag);
//   document.forms[formTag].submit();
// }
