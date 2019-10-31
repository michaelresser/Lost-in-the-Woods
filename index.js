//test script
console.log('test');
//diagnostic stripts
window.onresize = () => {
    console.clear();
    console.log('new-size: ' + window.innerWidth + ' x ' + window.InnerHeight)
};
/* NAVBAR LOGIC */
//Navbar Toggle Script
const mainNavToggle = () => {
    document.getElementById('main-nav-items').classList.toggle('hidden');
}

/* GAME LOGIC SECTION*/
// CHAPTER 1 - Bat Encounter

const bat00 = () => {
    //Change Image
    document.getElementById('ch1-image').src = 'images/the-bat-02.png'
    //Change Story Text
    let changedText = '<p class="text-center">You say hello to the bat.  He tries to look up, but can barely move his head. “O-o-oh hello, small human,” he says, “can you help me?  I’ve been flying all night and all day and can’t find my cave!  I can’t see very well, but I can usually hear a river near my home.  Can you help me listen for it?”';
    document.getElementById("ch1-text").innerHTML = changedText;
    //Change Button Text
    let continueBtn = document.getElementById('ch1-btn-continue');
    continueBtn.innerHTML = 'Help the bat!';
    continueBtn.setAttribute('onclick', 'bat01()');
}

const bat01 = () => {
    //Change Image
    document.getElementById('ch1-image').src = 'images/the-bat-03.png'
    //Change Story Text
    let changedText = 'You nod, and begin listening.  You hear different things in each direction... which one is a river?';
    document.getElementById("ch1-text").innerHTML = changedText;
    //Change Image
    document.getElementById('ch1-image').src = 'images/the-bat-03.png'
    //Clear Buttons
    document.getElementById('ch1-btn-continue').remove();
    console.log('continue button removed');
    //Add Game Components
    document.getElementById('ch1-game').classList.remove('hidden');
    console.log('game component added');
}

const playAudio = (event) => {
    console.log(event.target);

}
const stopAudio = () => { };
const playWest = () => {
    document.getElementById('sound01').play();
}
const stopWest = () => {
    let audio = document.getElementById('sound01');
    audio.pause();
    audio.currentTime = 0;
}
const playNorth = () => {
    document.getElementById('sound02').play();
}
const stopNorth = () => {
    let audio = document.getElementById('sound02');
    audio.pause();
    audio.currentTime = 0;
}
const playEast = () => {
    document.getElementById('sound03').play();
}
const stopEast = () => {
    let audio = document.getElementById('sound03');
    audio.pause();
    audio.currentTime = 0;
}

const checkWinnerBat = (event) => {
    let x = event.srcElement.value;
    if (x === 'river') {
        batGameFinale();
    } else {
        alert('try again');
    }

};

// const batGameCheckWinner = () => {
//     let river = document.getElementById('ch1-game-river');
//     if (river.checked === true) {
//         console.log('winner');
//         batGameFinale();
//         //     Including final Image, final text & continue button.     
//     } else {
//         console.log('loser');
//         // call function to tell player to try again.
//     }
// }

const batGameFinale = () => {
    //REMOVE GAEM ELEMENT
    document.getElementById('ch1-game').remove();
    console.log('game removed');
    //CHANGE IMAGE
    document.getElementById('ch1-image').src = '/images/the-bat-04.png'
    // CHANGE TEXT
    document.getElementById('ch1-text').innerHTML = 'Well done!';
    // ADD CONTINUE BUTTON
    document.getElementById('ch1-controls').insertAdjacentHTML('afterbegin', "<button id='ch1-btn-continue' class=''><a href='#ch2'>Continue to Chapter 2</a></button>")
}


