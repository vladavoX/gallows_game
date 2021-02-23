var input_section = document.querySelector('.input__section');
var game_section =  document.querySelector('.game__section');

var global_word_value;
var counter = 0;

function startGame(){
    var input_word = document.querySelector('#word').value;
    var input_subject = document.querySelector('#subject').value;

    global_word_value = input_word.toUpperCase();

    if(input_word == ""){
        var input_first_error = document.querySelectorAll('.error')[0];
        input_first_error.innerHTML = 'This field is requierd!';
        return;
    } else if(input_subject == ""){
        var input_second_error = document.querySelectorAll('.error')[1];
        input_second_error.innerHTML = 'This field is requierd!';
        return;
    }

    input_section.style.display = 'none';
    game_section.style.display = 'block';

    var letters_div = document.querySelector('.letters');
    var underlines = document.querySelector('.underlines');
    for(i=0;i<input_word.length;i++){
        if(input_word[i]==" "){
            letters_div.innerHTML += "<span class='letters__space'>"+ input_word[i] +"</span>";
            underlines.innerHTML += "<div class='space__line'></div>";
            continue;
        } else {
            letters_div.innerHTML += "<span class='letters__letter'>"+ input_word[i] +"</span>";
            underlines.innerHTML += "<div class='line'></div>";
        }
    }

    var subject_word = document.querySelector('.subject__word');
    subject_word.innerHTML = input_subject;
}


function submitLetter(){
    var letter_value = document.querySelector("#letter").value;
    if(letter_value == ""){
        var input_div_error = document.querySelectorAll('.error')[2];
        input_div_error.innerHTML = 'This field is requierd!';
        return;
    } else {
        var input_div_error = document.querySelectorAll('.error')[2];
        input_div_error.innerHTML = "";
    }

    letter_value = letter_value.toUpperCase();
    var letter = document.querySelectorAll('.letters__letter');
    var hasFound = false;

    for(i=0; i<letter.length; i++){
        if(letter_value == letter[i].innerText){
            letter[i].style.color = 'white';
            document.querySelector("#letter").value = '';
            hasFound = true;
        }
    }

    if(hasFound != true){
        var body_part = document.querySelectorAll('.body__part')[counter];
        body_part.style.display = 'block';
        counter++;
        var letters_used = document.querySelector('.letters__used');
        letters_used.innerHTML += letter_value;
        document.querySelector("#letter").value = '';
        if(counter == 6){
            var lose = document.querySelector('.lose');
            lose.innerHTML = "<div>You\'ve lost!</div><div><button class='submit' onclick='playAgain()'>Play Again?</button></div>";
        }
        return;
    }

    return;
}

function submitWord(){
    var word_value = document.querySelector("#word_final").value;
    if(word_value == ""){
        var input_div_error = document.querySelectorAll('.error')[3];
        input_div_error.innerHTML = 'This field is requierd!';
        return;
    } else {
        var input_div_error = document.querySelectorAll('.error')[3];
        input_div_error.innerHTML = "";
    }

    word_value = word_value.toUpperCase();
    if(word_value == global_word_value){
        var letters = document.querySelectorAll('.letters__letter');
        for(i=0; i<letters.length; i++){
            letters[i].style.color = 'white';
        }

        var victory = document.querySelector('.victory');
        victory.innerHTML = "<div>You\'ve won!</div><div><button class='submit' onclick='playAgain()'>Play Again?</button></div>";
    } else {
        document.querySelector("#word_final").value = '';
        return;
    }
}

function playAgain(){
    location.reload();
}