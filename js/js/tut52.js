// The task you have to do is to create an alarm clock in JavaScript(Use your creativity). The Alarm app should allow the user to set the alarm for a certain time. 



// To add the audio, search “how to play audio in js” on google, most probably you will find the code from stack overflow. Or you can use the following code:

// var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
// audio.play();


console.log("This is tutorial 54");
const alarmSubmit = document.getElementById('alarmSubmit');

// Add an event listener to the submit button
alarmSubmit.addEventListener('click', setAlarm);

var audio = new Audio(
    'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');

// function to play the alarm ring tone
function ringBell() {
    audio.play();
}
// This function will run whenever alarm is set from the UI
function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    now = new Date();

    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if (timeToAlarm >= 0) {
        setTimeout(() => {
            console.log("Ringing now")
            ringBell();
        }, timeToAlarm);
    }
}
