console.log('%c HI', 'color: firebrick')

const dropDown = document.querySelector('#breed-dropdown')
const dogImageContainer = document.querySelector('#dog-image-container')
//---------------------------------------------------------------------------
function fetchDogs (){
   fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(data => happyDogs(data))
}
function renderBreeds(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(moreData => moreBreeds(moreData))
}
//-----------------------------------------------------------------------
    function happyDogs(dogObj) {
        dogObj.message.forEach(dogUrl => {
            const dogImg = document.createElement('img')
            dogImg.src = dogUrl
            dogImageContainer.append(dogImg)
            dogImg.style.maxWidth = '300px'
    })
}

const breedUl = document.querySelector("#dog-breeds")

function moreBreeds(moredata) {
    const breedArray = Object.keys(moredata.message)
    breedArray.forEach(breed => {
        const breedLi = document.createElement('li')
        breedLi.textContent = breed

        breedLi.addEventListener("click", changeLiColor)

        breedUl.append(breedLi)
    })
    
}

function changeLiColor(e) {
    e.target.style.color = "red"
}



fetchDogs()
renderBreeds()

