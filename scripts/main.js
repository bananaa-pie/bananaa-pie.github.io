let myImage = document.querySelector('img')

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src')
    if (mySrc === 'images/fox.jpg'){
        myImage.setAttribute('src', 'images/LISA.jpg')
    }
    else{
        myImage.setAttribute('src', 'images/fox.jpg')
    }
}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUserName(){
    let myName = prompt('Please enter your name')
    localStorage.setItem('name', myName)
    myHeading.textContent = 'Banana pie is cool, ' + myName
}

if(!localStorage.getItem('name')){
    setUserName()
} else{
    let storedName = localStorage.getItem('name')
    myHeading.textContent = 'Banana pie is cool, ' + storedName
}

myButton.onclick = function () {
    setUserName()
}
