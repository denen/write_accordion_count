// function butotnClick() {
//     console.log('Hello');
// }
// let button = document.getElementById('xxx');
// button.addEventListener('click', butotnClick);

function keyup_event(event) {
    t = event.target;
    //t_pre = t.previousElementSibling;
    //t_pre.getElementsByClassName("mojisu")[0].value = t.value.length
    console.log(t.closest(".contener"));
    t.closest(".contener").getElementsByClassName("mojisu")[0].value = t.value.length

    let all_mojisu = 0;
    for (i = 0; i < texts.length; i++) {
        all_mojisu = all_mojisu + texts[i].value.length;
    }
    all_moji.value = all_mojisu
}

function click_input(event) { //ダブルクリックするとinputを表示
    var t = event.target;

    if (!t.closest('.label_input')) {
        //if (!t.) {
        //class h2 のダブルクリックでない場合
        console.log("外側クリック");
        console.log(t.tagName);
        inputs = document.getElementsByClassName("label_input");
        console.log(inputs.length)
        while (inputs.length) { //forで回すと要素数が減るので添字指定がうまくいかなくなる　https://qiita.com/suin/items/1c2c0e36a9dffde31e10
            inputs[0].nextElementSibling.style.display = "block";
            inputs[0].nextElementSibling.innerText = inputs[0].value;
            inputs[0].remove()
        }

    } else {

    }
}

function dblclick_label(event) {
    var t = event.target;
    var newElement = document.createElement("input");
    newElement.setAttribute("class", "label_input");
    input = t.parentElement.insertBefore(newElement, t);
    input.value = t.innerText;
    t.style.display = "none";
}


//var だと動かない？？？
// let text = document.getElementById('test');
// text.addEventListener('keyup', keyup_event);

const labels = document.getElementsByClassName("h2");
const texts = document.getElementsByClassName("textarea");
const all_moji = document.getElementById("all_moji");
document.addEventListener('click', click_input);

for (i = 0; i < labels.length; i++) {
    labels[i].addEventListener('dblclick', dblclick_label);
}



for (i = 0; i < texts.length; i++) {
    texts[i].addEventListener('keyup', keyup_event);
}

//https://blog-and-destroy.com/24410