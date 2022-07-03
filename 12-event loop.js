// event loop
// javascript is synchronous and single 
// in this program, 'first' is printed first. then since setTimeout is asynchronous, it is offloaded, then '3rd' is printed. After the setTimeout process finishes, 'second' is printed
// setInterval  is also async
// started operating system process
console.log('first')    
setTimeout(()=>{        // set timeout is asynchornous
    console.log('second')
},0)                    // delay for 0 second just to demonstrate event loop
console.log('3rd')
//completed and exited operating system process