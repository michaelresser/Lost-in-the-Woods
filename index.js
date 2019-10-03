//test script
console.log('test');


/* NAVBAR LOGIC */
// Navbar Responsive menu
let w = window.innerWidth;
let navbarToggleButton = document.getElementById('navbar-toggle');
// let navbarNavItems = document.getElementById('nav-items');
// console.log(navbarNavItems.classList);


if (w <= 750) {
    console.log('w: ' + w + ' < 750px');
    navbarToggleButton.classList.remove('hidden');
    // navbarNavItems.classList.add('hidden')
} else {
    console.log('w: ' + w + ' > 750px');
    navbarToggleButton.classList.add('hidden');
    // navbarNavItems.classList.remove('hidden')
}

// Navbar Toggle script
const navbarToggle = () => {
    document.getElementById('nav-items').classList.toggle('hidden');
    console.log(document.getElementById('nav-items').classList);
}



/* GAME LOGIC SECTION
Im laying out the named functions in order of their use across the games timeline, and trying to name them sematically. ie: theWoods1, theWoods2, ticTacToe, etc.
Below here, is my idea of mechanics more fleshed out. 

The pattern is prety simple (fingers crossed!):  
    1. Declare the functions list of actions.
    2. Write the function that reacts to the target button being pressed.
    3. Repeat
    4. Drink a beer.

-MRE
*/

// CHAPTER 1 - Bat Encounter
/* This is the code to change the text on the initial button push in the Bat Game
*/
function batTextChange() {
    
    var x = document.getElementById("ch1-text");
    if (x.innerHTML === "The woods are dark and a little scary. You hear all sorts of animal noises around you. What could they be? As you enter a clearing, you see a small black bat hanging from a tree branch. He looks tired.") {
        x.innerHTML = "You say hello to the bat.  He tries to look up, but can barely move his head. \“O-o-oh hello, small human,\” he says, \“can you help me?  I’ve been flying all night and all day and can’t find my cave!  I can’t see very well, but I can usually hear a waterfall near my home.  Can you help me listen for it?\” You nod, and begin listening.  You hear different things in each direction; which one is a waterfall?";
    } else {
        x.innerHTML = "The woods are dark and a little scary. You hear all sorts of animal noises around you. What could they be? As you enter a clearing, you see a small black bat hanging from a tree branch. He looks tired.";
    }
    }


// CHAPTER 1 - The Bat Game - Matching sounds



