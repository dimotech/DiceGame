function changeDice() {
    var total = 0;
    var value = getSelectedValue();
    for (var i = 1; i <= value; i++) {
        var random = Math.floor((Math.random() * 6) + 1);
        total += parseInt(random);
        switch (random) {
            case 1:
                clear(i);
                showDice(i, 1);
                break;
            case 2:
                clear(i);
                showDice(i, 2);
                break;
            case 3:
                clear(i);
                showDice(i, 3);
                break;
            case 4:
                clear(i);
                showDice(i, 4);
                break;
            case 5:
                clear(i);
                showDice(i, 5);
                break;
            case 6:
                clear(i);
                showDice(i, 6);
            default:
                break;
        }
    }
    printTotal(total);
}

function clear(index) {
    var color = ['#ff0000', '#ff6d00', '#ffd700', '#4dc061', '#3399ff', '#8470ff'];
    var choosedColor = color[index - 1];
    var array = ['one-one', 'one-two', 'one-three', 'two-one', 'two-two', 'two-three', 'three-one', 'three-two', 'three-three'];
    for (var i = 0; i < array.length; i++) {
        document.getElementById(array[i] + '-' + index).style.backgroundColor = choosedColor;
    }
}

function showDice(index, diceNumber) {
    var array = [
        ['two-two'], // 1
        ['two-one', 'two-three'], // 2
        ['one-two', 'two-two', 'three-two'], // 3
        ['one-one', 'one-three', 'three-one', 'three-three'], // 4
        ['one-one', 'one-three', 'two-two', 'three-one', 'three-three'], // 5
        ['one-one', 'two-one', 'three-one', 'one-three', 'two-three', 'three-three'] // 6
    ];
    var length = array[diceNumber - 1].length;
    for (var i = 0; i < length; i++) {
        document.getElementById(array[diceNumber - 1][i] + '-' + index).style.backgroundColor = "white";
    }
}

function toggle(el) {
    var value = getSelectedValue();
    for (var i = 1; i <= 6; i++) {
        if (i < parseInt(value) + 1) {
            clear(i);
            document.getElementById("dice" + i).style.display = "";
        } else {
            document.getElementById("dice" + i).style.display = "none";
        }
    }
}

function getSelectedValue() {
    var e = document.getElementById("diceAmount");
    var val = e.options[e.selectedIndex].value;
    return val;
}

function printTotal(num) {
   document.getElementById("screen").innerHTML = num;
}