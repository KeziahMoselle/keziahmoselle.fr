document.addEventListener('DOMContentLoaded', () => {
  M.AutoInit()

  baffle('.baffle').set({ characters: '01' }).reveal(1000)
  
  ScrollReveal().reveal('img.tooltipped')
  ScrollReveal().reveal('.card-project')
})