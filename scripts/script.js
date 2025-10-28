
// FUNZIONE DATA FOOTER
const yearSpan = document.getElementById('year')
const currentYear = new Date().getFullYear() // 2025
yearSpan.innerText = currentYear

//funzione nascondi elementi
const hideSection = function (e) {
    console.log("sezione nascosta", e)

    const section = document.getElementById("saldiSection")
    const button = e.target

    if (section.classList.contains("d-none")) {
        section.classList.remove("d-none")
        button.innerText = "Nascondi sezione"
    } else {
        section.classList.add("d-none")
        button.innerText = "Apri sezione"
    }

}
const hideSectionSum = function (e) {
    console.log("sezione nascosta", e)

    const sectionSum = document.getElementById("summerSection")
    const button = e.target

    if (sectionSum.classList.contains("d-none")) {
        sectionSum.classList.remove("d-none")
        button.innerText = "Nascondi sezione"
    } else {
        sectionSum.classList.add("d-none")
        button.innerText = "Apri sezione"
    }

}