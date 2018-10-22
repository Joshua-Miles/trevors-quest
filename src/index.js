// What type of variable is "characterElement"?
// Uncomment the console.log below to see for yourself!
let characterElement = document.createElement('img') 
// console.log(characterElement)


// What is the SRC attribute of an image tag used for? 
// Does this change the HTML when you view it in the elements pane of your developers console?
characterElement.src = `assets/character/static.gif` 

// What is "characterElement.style"?
characterElement.style.position = 'absolute'
characterElement.style.left = '0px'
characterElement.style.top = '0px'
characterElement.style.width = "50px"
characterElement.className = 'created with JavaScript' // Don't worry to much about this line for now

document.body.appendChild(characterElement)
// What is "document.body"? What does "appendChild" do here?
// Look at the index.html file, and describe what is happening on line 3
// Use the elements pane in your developer console to explore the visual structure of your app.
// How many images are on the screen?
// Where did they come from?
// What is the difference between a visual element created with HTML and a visual element created with JavaScript?

let movement; // Why would I declare "movement" here and not inside of the function walkEast?
function walkEast(){
    // What does "setInterval" do?
    // What does "setInterval" return?
    // What is "movement" after this line runs?
    // Uncomment the console.log below to see for yourself!
    movement = setInterval(function(){
        // What does "parseInt" do?
        // What type of variable is "characterElement.style.left"? 
        // What type of variable is "currentPosition"?
        let currentPosition = parseInt(characterElement.style.left)

        // What is the line below doing?
        characterElement.style.left = currentPosition + 1 + 'px'
    }, 15)   // What is the second argument passed into "setInterval"?
    // What does the below line do?

    // console.log(movement)

    characterElement.src = `assets/character/walkright.gif`
}

// What does the function "walkEast" do?
// Uncomment the line below to invoke the function and see for yourself!
// walkEast()

function stop(){
    // What does "clearInterval" do?
    clearInterval(movement)
    // What does the below line do?
    characterElement.src = `assets/character/static.gif`
}

// What does the function "stop" do?
// Copy the line below to invoke the function and paste it in your developer console to see for yourself!
// stop()