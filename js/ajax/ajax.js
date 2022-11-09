console.log('Thanks code with harry');

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    console.log('You have clicked the fetchBtn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'anant.txt', true)

    xhr.onprogress = function () {
        console.log('On progress');
    }
    xhr.onload = function () {
        if (this.status === 200) {

            console.log(this.responseText)
        }
        else {
            console.log("Some error occured")
        }
    }

    xhr.send();


}