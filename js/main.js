// function butotnClick() {
//     console.log('Hello');
// }
// let button = document.getElementById('xxx');
// button.addEventListener('click', butotnClick);

var new_h2_block = "<div><h2>追加した要素です</h2></div>"

function add_h2(event) {
    var count = document.getElementsByClassName("label-box").length;
    var t = event.target;
    var template = document.getElementById("h2"); //document.queryselectorでもいい https://zenn.dev/harryduck/articles/e3e6c9d37e0169c05096
    var content = template.content; //　templateを取得してから中身を取得しないととれない　https://code-kitchen.dev/html/template/
    var clone = content.cloneNode(true); //importnodeは他のドキュメントに属するノードをクローンする  https://yossan.hatenablog.com/entry/2020/03/29/185739
    //clonenodeでも良い　https://developer.mozilla.org/ja/docs/Web/HTML/Element/template
    var input = clone.querySelector("#count1");
    input.id = count + 1; //ここでid変更したらcloneにも適応されてる…なぜ？？参照取得だからか？？
    var label = clone.querySelector(".label");
    label.setAttribute("for", count + 1);
    t.closest(".contener").parentElement.insertBefore(clone, t.closest(".contener").nextSibling); //要素追加
    var label_box = document.getElementById(count + 1).parentElement.querySelector(".label-box");
    label_box.style.backgroundColor = 'red'; //赤に変える

    setTimeout(() => { label_box.style.backgroundColor = 'aqua' }, 1500);


    new_add_div = document.getElementById(input.id).parentElement.querySelector(".add-contener");
    new_add_div.addEventListener('click', add_h2);
    new_div_text = document.getElementById(input.id).parentElement.querySelector(".textarea");
    new_div_text.addEventListener('keyup', keyup_event);
    new_label_input = document.getElementById(input.id).parentElement.querySelector(".h2");
    new_label_input.addEventListener('dblclick', dblclick_label);
}

function keyup_event(event) {
    t = event.target;
    //t_pre = t.previousElementSibling;
    //t_pre.getElementsByClassName("mojisu")[0].value = t.value.length
    console.log(t.closest(".contener"));
    console.log(t.closest(".contener").getElementsByClassName("mojisu")[0]);
    t.closest(".contener").getElementsByClassName("mojisu")[0].value = t.innerText.length;

    let all_mojisu = 0;
    const texts = document.getElementsByClassName("textarea");
    for (i = 0; i < texts.length; i++) {
        all_mojisu = all_mojisu + texts[i].innerText.length;
        console.log(texts[i]);
        console.log(all_mojisu);
    }
    all_moji.value = all_mojisu;
}

function click_input(event) { //ダブルクリックするとinputを表示
    var t = event.target;

    if (!t.closest('.h2_input')) {
        //if (!t.) {
        //class h2 のダブルクリックでない場合
        console.log("外側クリック");
        console.log(t.tagName);
        inputs = document.getElementsByClassName("h2_input");
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
    input.setAttribute("class", "h2_input");
    input.value = t.innerText;
    t.style.display = "none";
}


//var だと動かない？？？
// let text = document.getElementById('test');
// text.addEventListener('keyup', keyup_event);

const labels = document.getElementsByClassName("h2");
const texts = document.getElementsByClassName("textarea");
const all_moji = document.getElementById("all_moji");
const add_contener_div = document.getElementsByClassName("add-contener")
    //const contener = document.getElementsByClassName("contener");
document.addEventListener('click', click_input);

for (i = 0; i < labels.length; i++) {
    labels[i].addEventListener('dblclick', dblclick_label);
}

for (i = 0; i < add_contener_div.length; i++) {
    add_contener_div[i].addEventListener('click', add_h2);
}

for (i = 0; i < texts.length; i++) {
    texts[i].addEventListener('keyup', keyup_event);
}

//https://blog-and-destroy.com/24410