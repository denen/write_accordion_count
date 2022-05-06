// function butotnClick() {
//     console.log('Hello');
// }
// let button = document.getElementById('xxx');
// button.addEventListener('click', butotnClick);

function keyup_event(event) {
    t = event.target
        //console.log(t);
        //console.log(t.nextElementSibling);
    t.nextElementSibling.value = t.value.length

    let all_mojisu = 0;
    for (i = 0; i < texts.length; i++) {
        //console.log(i + "  " + texts[i] + "  " + texts[i].value.length);
        all_mojisu = all_mojisu + texts[i].value.length;
    }

    all_moji.value = all_mojisu
}

//var だと動かない？？？
// let text = document.getElementById('test');
// text.addEventListener('keyup', keyup_event);


const texts = document.getElementsByClassName("textarea")
const all_moji = document.getElementById("all_moji")
for (i = 0; i < texts.length; i++) {
    texts[i].addEventListener('keyup', keyup_event);
}

//https://blog-and-destroy.com/24410