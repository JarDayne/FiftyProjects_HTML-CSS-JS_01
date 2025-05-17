//resharpened querySelector
const panels = document.querySelectorAll('.panel')

//higher order array function call
panels.forEach((panel) => {
   panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
   })
})

function removeActiveClasses() {
    //notice how you can leave out the parentheses when there's only a single argument
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}