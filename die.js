//-----Start Game-----
let start = document.getElementById('start');
let Player1;
let Player2;
let start_Game = () => {
    Player1 = prompt('Enter Player name');
    Player2 = prompt('Enter Player name');
    document.getElementById('player_name1').innerHTML = `${Player1}`;
    document.getElementById('player_name2').innerHTML = `${Player2}`;
    let player_name = prompt('Who want to play first');
    if (Player1 == player_name) {
        document.getElementById('user_img1').style.border = '5px solid rgb(182, 10, 10)';
        document.getElementById('user_img2').style.border = '2px solid gray';
        document.getElementById('spinner1').style.display = 'inline';
        document.getElementById('spinner2').style.display = 'none';
        document.getElementById('player_name1').style.background = 'green';
        document.getElementById('player_name1').style.color = 'white';
    }
    else {
        document.getElementById('user_img1').style.border = '2px solid gray';
        document.getElementById('user_img2').style.border = '5px solid rgb(182, 10, 10)';
        document.getElementById('spinner1').style.display = 'none';
        document.getElementById('spinner2').style.display = 'inline';
        document.getElementById('player_name2').style.background = 'green';
        document.getElementById('player_name2').style.color = 'white';
    }
}
start.addEventListener('click', start_Game)

//-----Spinner 1-----
let randomfun = () => {
    return Math.trunc(Math.random() * 10);
}

let spinner = document.getElementById('spinner1');
var random1;
let user1_scr = 0;
let spin_start1 = () => {
    random1 = randomfun()
    if (random1 > 0 && random1 <= 6) {
        user1_scr += random1;
        if (random1 == 6) {
            document.getElementById('spin_value').innerHTML = random1;
            document.getElementById('user1_scr').innerHTML = `Score:- ${user1_scr}`;
            Player_one();
        }
        else {
            document.getElementById('spin_value').innerHTML = random1;
            document.getElementById('user1_scr').innerHTML = `Score:- ${user1_scr}`;
            setTimeout(() => {
                Player_two()
            }, 1000);
        }
    }
    else {
        document.getElementById('spin_value').style.color = 'red'
        document.getElementById('spin_value').innerHTML = 'Spin'
    }
}
spinner.addEventListener('click', spin_start1);

//-----spinner2-----
var random2;
let user2_scr = 0;
let spinner2 = document.getElementById('spinner2');
let spin_start2 = () => {
    random2 = randomfun()
    if (random2 > 0 && random2 <= 6) {
        user2_scr += random2;
        if (random2 == 6) {
            document.getElementById('spin_value').innerHTML = random2;
            document.getElementById('user2_scr').innerHTML = `Score:- ${user2_scr}`;
            Player_two();
        }
        else {
            document.getElementById('spin_value').innerHTML = random2;
            document.getElementById('user2_scr').innerHTML = `Score:- ${user2_scr}`;
            setTimeout(() => {
                Player_one();
            }, 1000)
        }
    }
    else {
        document.getElementById('spin_value').style.color = 'red'
        document.getElementById('spin_value').innerHTML = 'Spin'
    }
}
spinner2.addEventListener('click', spin_start2)

//-----player_one-----
let Player_one = () => {
    document.getElementById('user_img1').style.border = '5px solid rgb(182, 10, 10)';
    document.getElementById('user_img2').style.border = '2px solid gray';
    document.getElementById('spinner1').style.display = 'inline';
    document.getElementById('spinner2').style.display = 'none';
    document.getElementById('player_name1').style.background = 'green';
    document.getElementById('player_name1').style.color = 'white';
    document.getElementById('player_name2').style.background = 'white';
    document.getElementById('player_name2').style.color = 'black';
}

//-----Player_Two------
let Player_two = () => {
    document.getElementById('user_img1').style.border = '2px solid gray';
    document.getElementById('user_img2').style.border = '5px solid rgb(182, 10, 10)';
    document.getElementById('spinner1').style.display = 'none';
    document.getElementById('spinner2').style.display = 'inline';
    document.getElementById('player_name1').style.background = 'white';
    document.getElementById('player_name1').style.color = 'black';
    document.getElementById('player_name2').style.background = 'green';
    document.getElementById('player_name2').style.color = 'white';
}


