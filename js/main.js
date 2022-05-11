window.onload = function digital_fn() {
    // toggle button
    let toggle = document.querySelector("nav .toggle-btn")
    let collapse = document.querySelector("nav .collapse")

    toggle.addEventListener("click", event => {
        collapse.classList.toggle("active__toggle")
    })
}