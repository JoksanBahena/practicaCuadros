const submit = () => {
    values = formValues();
    console.log(values);

    if (values == false) {
        addElement();
    } else {
        valores = values.split(" ")
        x = valores[0]
        y = valores[1]
        time = valores[2]
        boxes = valores[3]

        gridTable(x, y);
    }
}

const formValues = () => {
    if (document.getElementById("xFormControl").value == 0 || document.getElementById("yFormControl").value == 0 || document.getElementById("timeFormControl").value == 0 || document.getElementById("boxesFormControl").value == 0) return false;
    x = document.getElementById("xFormControl").value;
    y = document.getElementById("yFormControl").value;
    time = document.getElementById("timeFormControl").value;
    boxes = document.getElementById("boxesFormControl").value;
    console.log(x, y, time, boxes);

    return x + " " + y + " " + time + " " + boxes;
}

function addElement() {
    var div1 = document.getElementById("div1");
    var h6 = document.createElement("h6");
    h6.innerHTML = "Faltan datos"

    div1.appendChild(h6);
}

function gridTable(x, y) {
    // var content = document.getElementById("content");
    // var div = document.createElement("div");
    // div.style.width = '50px';
    // div.style.height = '50px';

    // total = x * y;
    // console.log(total);

    // for(i = 0; i < total; i++) {
    //     content.appendChild(div)
    // }

    var content = document.querySelector("#content")

    total = x * y;
    console.log(total);

    for (i = 0; i < total; i++) {
        var div = document.createElement("div");
        div.classList.add('box-' + i);
        div.style.width = '50px';
        div.style.height = '50px';
        content.appendChild(div);
    }
}