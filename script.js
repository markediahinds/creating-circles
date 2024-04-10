const button = document.querySelector('button')
const body = document.querySelector('body') 

button.addEventListener('click', (e) => {
    e.preventDefault
    // const newContainer = document.createElement('div')
    // newContainer.setAttribute = ("style", "width: 85%; height: 100%; border: 5px solid black;")
    // newContainer.setAttribute = ('class', 'container')
    // body.append('newContainer')
    
    let container = document.querySelector('.container')

    let newCircle = document.createElement('div')
    newCircle.setAttribute('class', 'circle')
    newCircle.setAttribute = ("style", "height: 40px; width: 40px; background-color: getRandomColor(); border-radius: 50%;")
    container.append(newCircle);
    
}) 


function getRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}

getRandomColor()

