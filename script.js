 function hexaGenerator() {

     let string = '0123456789abcdef'

     let hexa = '#'
     for (let i = 0; i < 6; i++) {
         let random = string[(Math.floor(Math.random() * string.length))]
         hexa += random
     }
     return hexa

 }


 /* let flexContainer = document.querySelector('.flex_container')
 let smalldiv = document.createElement('div')
 let list = document.createElement('li')
     //list.setAttribute(list)
 list.textContent = ''
 let uList = document.createElement('ul')
 uList.textContent = 'job'
 list.appendChild(uList)
 smalldiv.appendChild(list)
 flexContainer.append(smalldiv) */

 const flexContainer = document.querySelector('.flex_container')
 const numberInput = document.querySelector(".number_input")
 const generate = document.querySelector(".generate")
 const stopButton = document.querySelector(".end")
 const copyButton = document.querySelector("copy")
     //generating the hexacolor



 function initial() {
     flexContainer.textContent = ""
     for (let i = 1; i <= 5; i++) {
         const title = document.createElement('h1')
         const smalldiv = document.createElement('div')
         smalldiv.setAttribute('class', 'colorBox')
         const copyButton = document.createElement('button')

         copyButton.textContent = 'copy'
         smalldiv.style.border = '1px solid  #999'

         //deafult color setting befor it goes to the interval

         let colorPicker = hexaGenerator()
         title.textContent = colorPicker

         smalldiv.style.background = colorPicker
         smalldiv.appendChild(title)
         smalldiv.appendChild(copyButton)
         flexContainer.append(smalldiv)
             // setting the color with interval
         let timer = setInterval(function() {
                 colorPicker = hexaGenerator()
                 title.textContent = colorPicker

                 smalldiv.style.background = colorPicker
             },
             1000)


         // for copying

         copyButton.addEventListener('click', copyText)

         function copyText() {
             const textcopy = document.createElement('textarea')
             textcopy.value = colorPicker
             document.body.appendChild(textcopy)
             textcopy.select()
             document.execCommand('copy')
             document.body.removeChild(textcopy)
         }
         // event listner
         stopButton.addEventListener('click', function() {
             clearInterval(timer)
         })


         //mouseover
         smalldiv.addEventListener('mouseover', function() {
             clearInterval(timer)
         })

         //mouseout
         smalldiv.addEventListener('mouseout', function() {
             timer = setInterval(function() {
                     colorPicker = hexaGenerator()
                     title.textContent = colorPicker

                     smalldiv.style.background = colorPicker
                 },
                 1000)


         })
     }
 }
 initial()

 //after generator 
 generate.addEventListener('click', afterGenerate)


 function afterGenerate() {
     flexContainer.textContent = ""
     let userInput = numberInput.value
     if (userInput <= 5) {
         alert('please enter number greater than 5')
         initial()
     } else {
         for (i = 1; i <= userInput; i++) {
             const title = document.createElement('h1')
             const smalldiv = document.createElement('div')
             smalldiv.setAttribute('class', 'colorBox')
             const copyButton = document.createElement('button')
             copyButton.textContent = 'copy'
             smalldiv.style.border = '1px solid  #999'

             let colorPicker = hexaGenerator()
             title.textContent = colorPicker
             smalldiv.style.background = colorPicker
             smalldiv.appendChild(title)
             smalldiv.appendChild(copyButton)
             flexContainer.append(smalldiv)

             // setting the color with interval


             let timer = setInterval(function() {
                 title.textContent = hexaGenerator()
                 colorPicker = title.textContent
                 smalldiv.style.background = colorPicker
             }, 1000)



             // for copying

             copyButton.addEventListener('click', copyText)

             function copyText() {
                 const textcopy = document.createElement('textarea')
                 textcopy.value = colorPicker
                 document.body.appendChild(textcopy)
                 textcopy.select()
                 document.execCommand('copy')
                 document.body.removeChild(textcopy)
             }

             // event listner
             stopButton.addEventListener('click', function() {
                 clearInterval(timer)
             })


             //mouseover
             smalldiv.addEventListener('mouseover', function() {
                 clearInterval(timer)
             })

             //mouseout
             smalldiv.addEventListener('mouseout', function() {
                 timer = setInterval(function() {
                     title.textContent = hexaGenerator()
                     colorPicker = title.textContent
                     smalldiv.style.background = colorPicker
                 }, 1000)
             })


         }

     }
 }