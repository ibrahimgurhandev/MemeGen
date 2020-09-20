let button = document.getElementById('button')
button.addEventListener('click', getRandomImage)
getRandomImage()
function getRandomImage() {
  fetch(
    `searchBooks`
  )
    .then((res) => res.json())
    .then((data) => {
      var randomName = data[Math.floor(Math.random() * data.length)].joke;
      let result = document.querySelector('img')
      result.src = randomName;
    })
}


