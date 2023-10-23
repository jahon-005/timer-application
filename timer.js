let minute = document.querySelector("#min");
let btn = document.querySelector("#start");
let timer = 0;
let stopped = document.querySelector("#stop")

btn.addEventListener("click", function () {
    let set = setInterval(() => {
        minute.textContent = ++timer
    }, 1000)
    stopped.addEventListener("click", function () {
        setTimeout((e) => {
            clearInterval(set)
        })
    })
})