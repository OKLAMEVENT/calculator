function addToInput(click){
    const input = document.getElementById("display");
    input.value += click;
    console.log(click)
}
function calculate(){
    const adds = document.getElementById("display");
    adds.value = eval(adds.value);
}
function reset(){
    document.getElementById("display").value = "";
}
function remove(){
    let my_value = document.getElementById("display");
    my_value.value = my_value.value.slice(0, -1);
}