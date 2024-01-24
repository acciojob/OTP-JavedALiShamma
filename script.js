//your JS code here. If required.
//  Here we need to give JS to the OTP we have created
// Here we need input function
// First we need to access the input
let optString="";
let prevCell=null;
let currValue=document.querySelector(".input_div");
currValue.addEventListener("keyup",onKeyUp);
currValue.addEventListener("input",function(event){
    // console.log(event.target);
    // Here we can catch the element 
    // STEP :1 we need to check whether is a value to the target of not 
    let currElement=event.target;
    // console.log(currElement.value);
    if(currElement.value){
        // console.log(event.target.value);
        optString+=event.target.value;
        // event.target.className="color-change";
        // Here we are not able to add the class
        prevCell=currElement;
        if(currElement.nextElementSibling){
            currElement.nextElementSibling.focus();
        }
    }
});
// This is the logic if we want to go forward but what if we wanted to 
// go backward usking the backspace Key 
// Same logic we need that input div
//  lets create the logic for key up
function onKeyUp(event){
    // Here we have to check which key is entered
    if(event.key==="Backspace"){
    console.log("We have Eneter the backspace");
    // ok now we can catch the backspace value
    // Step 2 Here we need to clear the value of the value in the target elemet
    event.target.value="";
    console.log("Value is cleared");
 /// now STEP: 3 we need to go to the prev element
    if(event.target.previousElementSibling){
        event.target.previousElementSibling.focus();
    }
}

}


