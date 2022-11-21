const sizeUp = document.querySelector('.sizeUp')
const sizeDown = document.querySelector('.sizeDown')
const colorBtn = document.querySelector('.color')
const p = document.querySelector('p')


let fontSize = 36
const powiekszenie = () => {
    fontSize += 3
    p.style.fontSize = fontSize + 'px'
   
}



const pomniejszenie = () => {
    fontSize -= 3
    if(fontSize <=12){
        return
    }

    p.style.fontSize = fontSize + 'px'
}   



const zmianaKoloru = () => {
   const r = Math.floor(Math.random(0)* 255)
   const g = Math.floor(Math.random(0)* 255)
   const b = Math.floor(Math.random(0)* 255)

   p.style.color = `rgb(${r}, ${g}, ${b})`
}

colorBtn.addEventListener('click', zmianaKoloru)
sizeUp.addEventListener('click', powiekszenie)
sizeDown.addEventListener('click', pomniejszenie)



