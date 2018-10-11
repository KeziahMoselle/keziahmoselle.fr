document.addEventListener('DOMContentLoaded', () => {
  M.AutoInit()

  baffle('.baffle').set({ characters: '01' }).reveal(1000)

  ScrollReveal({
      reset: true
  })

  ScrollReveal().reveal('img')
  ScrollReveal().reveal('.card-project')
})