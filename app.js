
function display(val) {
    document.getElementById("result").value += val
}

function solveit() {
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}

function clearall() {
    document.getElementById("result").value = ""
} 