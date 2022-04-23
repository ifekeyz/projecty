var data = 0;


document.getElementById("countings").innerText = data;


function increment() {
    data = data + 1;
    document.getElementById("countings").innerText = data;
}

function decrement() {
    data = data - 1;
    document.getElementById("countings").innerText = data;
}