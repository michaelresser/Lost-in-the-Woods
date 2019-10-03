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


// CHAPTER 1 - The Bat Game - Matching sounds



