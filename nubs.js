function convertToUpperCase() {
  var name = document.getElementById("nickname").value;
  if (name != "") {
    name = name.toUpperCase();
  }
  document.getElementById("nickname").value = name;

}

function convertToUpperCase2() {
  var name = document.getElementById("hero").value;
  if (name != "") {
    name = name.toUpperCase();
  }
  document.getElementById("hero").value = name;

}

function convertToUpperCase3() {
  var name = document.getElementById("teachername").value;
  if (name != "") {
    name = name.toUpperCase();
  }
  document.getElementById("teachername").value = name;

}

function convertToUpperCase4() {
  var name = document.getElementById("friendname").value;
  if (name != "") {
    name = name.toUpperCase();
  }
  document.getElementById("friendname").value = name;

}

function convertToLowerCase() {
  var namu = document.getElementById("song").value;
  if (namu != "") {
    namu = namu.toLowerCase();
  }
  document.getElementById("song").value = namu;

}

function convertToLowerCase2() {
  var namu = document.getElementById("destination").value;
  if (namu != "") {
    namu = namu.toLowerCase();
  }
  document.getElementById("destination").value = namu;

}

function convertToLowerCase3() {
  var namu = document.getElementById("food").value;
  if (namu != "") {
    namu = namu.toLowerCase();
  }
  document.getElementById("food").value = namu;

}


let captchaText = document.querySelector('#captcha');
var ctx = captchaText.getContext("2d");
ctx.font = "30px Roboto";
ctx.fillStyle = "#08e5ff";

let userText = document.querySelector('#textBox');
let submitButton = document.querySelector('#submitButton');
let output = document.querySelector('#output');
let refreshButton = document.querySelector('#refreshButton');


let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let emptyArr = [];

for (let i = 1; i <= 7; i++) {
    emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
}
var c = emptyArr.join('');
ctx.fillText(emptyArr.join(''),captchaText.width/4, captchaText.height/2);


userText.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        if (userText.value === c) {
            output.classList.add("correctCaptcha");
            output.innerHTML = "Correct!";
        } else {
            output.classList.add("incorrectCaptcha");
            output.innerHTML = "Incorrect, please try again";
        }
    }
});

submitButton.addEventListener('click', function() {
    if (userText.value === c) {
        output.classList.add("correctCaptcha");
        output.innerHTML = "Correct!";
    } else {
        output.classList.add("incorrectCaptcha");
        output.innerHTML = "Incorrect, please try again";
    }
});

refreshButton.addEventListener('click', function() {
    userText.value = "";
    let refreshArr = [];
    for (let j = 1; j <= 7; j++) {
        refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
    }
    ctx.clearRect(0, 0, captchaText.width, captchaText.height);
    c = refreshArr.join('');
    ctx.fillText(refreshArr.join(''),captchaText.width/4, captchaText.height/2);
    output.innerHTML = "";
});

document.getElementById("genr").addEventListener("click", fck);

function fck() {
  var rndm = document.querySelectorAll("input")[0].value + document.querySelectorAll("input")[1].value + document.querySelectorAll("input")[2].value + document.querySelectorAll("input")[3].value + document.querySelectorAll("input")[4].value + document.querySelectorAll("input")[5].value + document.querySelectorAll("input")[6].value + document.querySelectorAll("input")[7].value + document.querySelectorAll("input")[8].value;
  if (rndm === "") {
    alert("Please Enter atleast one field")
  } else {
    var strRndm = "";
    for (var i = 0; i < document.getElementById("length").value; i++) {
      strRndm += rndm.charAt(Math.floor(Math.random() * rndm.length));
    }
    let encryptedMessage;
    const messageArr = strRndm.split("");
    let encryptedMessageArr = [];
    for (i = 0; i < messageArr.length; i++) {
      let letter;
      switch (messageArr[i]) {
        case 'a':
          letter = "!";
          break;
        case 'b':
          letter = "@";
          break;
        case 'c':
          letter = "#";
          break;
        case 'd':
          letter = "$";
          break;
        case 'e':
          letter = "%";
          break;
        case 'f':
          letter = "^";
          break;
        case 'g':
          letter = "&";
          break;
        case 'h':
          letter = "*";
          break;
        case 'i':
          letter = "(";
          break;
        case 'j':
          letter = ")";
          break;
        case 'k':
          letter = "0";
          break;
        case 'l':
          letter = "1";
          break;
        case 'm':
          letter = "2";
          break;
        case 'n':
          letter = "3";
          break;
        case 'o':
          letter = "4";
          break;
        case 'p':
          letter = "5";
          break;
        case 'q':
          letter = "6";
          break;
        case 'r':
          letter = "7";
          break;
        case 's':
          letter = "8";
          break;
        case 't':
          letter = "9";
          break;
        case 'u':
          letter = "A";
          break;
        case 'v':
          letter = "B";
          break;
        case 'w':
          letter = "C";
          break;
        case 'x':
          letter = "D";
          break;
        case 'y':
          letter = "E";
          break;
        case 'z':
          letter = "F";
          break;
        case 'A':
          letter = "i";
          break;
        case 'B':
          letter = "j";
          break;
        case 'C':
          letter = "k";
          break;
        case 'D':
          letter = "l";
          break;
        case 'E':
          letter = "m";
          break;
        case 'F':
          letter = "n";
          break;
        case 'G':
          letter = "o";
          break;
        case 'H':
          letter = "p";
          break;
        case 'I':
          letter = "q";
          break;
        case 'J':
          letter = "r";
          break;
        case 'K':
          letter = "u";
          break;
        case 'L':
          letter = "v";
          break;
        case 'M':
          letter = "w";
          break;
        case 'N':
          letter = "x";
          break;
        case 'O':
          letter = "y";
          break;
        case 'P':
          letter = "z";
          break;
        case 'Q':
          letter = "G";
          break;
        case 'R':
          letter = "H";
          break;
        case 'S':
          letter = "I";
          break;
        case 'T':
          letter = "J";
          break;
        case 'U':
          letter = "K";
          break;
        case 'V':
          letter = "L";
          break;
        case 'W':
          letter = "M";
          break;
        case 'X':
          letter = "N";
          break;
        case 'Y':
          letter = "O";
          break;
        case 'Z':
          letter = "P";
          break;
        case '!':
          letter = "Q";
          break;
        case '@':
          letter = "R";
          break;
        case '#':
          letter = "S";
          break;
        case '$':
          letter = "T";
          break;
        case '%':
          letter = "U";
          break;
        case '^':
          letter = "V";
          break;
        case '&':
          letter = "W";
          break;
        case '*':
          letter = "X";
          break;
        case '(':
          letter = "Y";
          break;
        case ')':
          letter = "Z";
          break;
        case '1':
          letter = "<";
          break;
        case '2':
          letter = ">";
          break;
        case '3':
          letter = "{";
          break;
        case '4':
          letter = "}";
          break;
        case '5':
          letter = "[";
          break;
        case '6':
          letter = "]";
          break;
        case '7':
          letter = "-";
          break;
        case '8':
          letter = "_";
          break;
        case '9':
          letter = "+";
          break;
        case '0':
          letter = "=";
          break;
        case ' ':
          letter = "?";
          break;

      }
      encryptedMessageArr.push(letter);
    }
    encryptedMessage = encryptedMessageArr.join("");
    document.getElementById("box").innerText = encryptedMessage;
    document.location = '#section3';
  }

}






function sendEmail() {
  if (document.getElementById("email").value === "") {
    alert("Please enter a valid Email Id")
  } else {
    let decryptedMessage;
    const demessageArr = document.getElementById("box").innerText.split("");
    let decryptedMessageArr = [];
    for (i = 0; i < demessageArr.length; i++) {
      let word;
      switch (demessageArr[i]) {
        case '!':
          word = "a";
          break;
        case '@':
          word = "b";
          break;
        case '#':
          word = "c";
          break;
        case '$':
          word = "d";
          break;
        case '%':
          word = "e";
          break;
        case '^':
          word = "f";
          break;
        case '&':
          word = "g";
          break;
        case '*':
          word = "h";
          break;
        case '(':
          word = "i";
          break;
        case ')':
          word = "j";
          break;
        case '0':
          word = "k";
          break;
        case '1':
          word = "l";
          break;
        case '2':
          word = "m";
          break;
        case '3':
          word = "n";
          break;
        case '4':
          word = "o";
          break;
        case '5':
          word = "p";
          break;
        case '6':
          word = "q";
          break;
        case '7':
          word = "r";
          break;
        case '8':
          word = "s";
          break;
        case '9':
          word = "t";
          break;
        case 'A':
          word = "u";
          break;
        case 'B':
          word = "v";
          break;
        case 'w':
          word = "C";
          break;
        case 'D':
          word = "x";
          break;
        case 'E':
          word = "y";
          break;
        case 'F':
          word = "z";
          break;
        case 'i':
          word = "A";
          break;
        case 'j':
          word = "B";
          break;
        case 'k':
          word = "C";
          break;
        case 'l':
          word = "D";
          break;
        case 'm':
          word = "E";
          break;
        case 'n':
          word = "F";
          break;
        case 'o':
          word = "G";
          break;
        case 'p':
          word = "H";
          break;
        case 'q':
          word = "I";
          break;
        case 'r':
          word = "J";
          break;
        case 'u':
          word = "K";
          break;
        case 'v':
          word = "L";
          break;
        case 'w':
          word = "M";
          break;
        case 'x':
          word = "N";
          break;
        case 'y':
          word = "O";
          break;
        case 'z':
          word = "P";
          break;
        case 'G':
          word = "Q";
          break;
        case 'H':
          word = "R";
          break;
        case 'I':
          word = "S";
          break;
        case 'J':
          word = "T";
          break;
        case 'K':
          word = "U";
          break;
        case 'L':
          word = "V";
          break;
        case 'M':
          word = "W";
          break;
        case 'N':
          word = "X";
          break;
        case 'O':
          word = "Y";
          break;
        case 'P':
          word = "Z";
          break;
        case 'Q':
          word = "!";
          break;
        case 'R':
          word = "@";
          break;
        case 's':
          word = "#";
          break;
        case 'T':
          word = "$";
          break;
        case 'U':
          word = "%";
          break;
        case 'V':
          word = "^";
          break;
        case 'w':
          word = "&";
          break;
        case 'X':
          word = "*";
          break;
        case 'Y':
          word = "(";
          break;
        case 'Z':
          word = ")";
          break;
        case '<':
          word = "1";
          break;
        case '>':
          word = "2";
          break;
        case '{':
          word = "3";
          break;
        case '}':
          word = "4";
          break;
        case '[':
          word = "5";
          break;
        case ']':
          word = "6";
          break;
        case '-':
          word = "7";
          break;
        case '_':
          word = "8";
          break;
        case '+':
          word = "9";
          break;
        case '=':
          word = "0";
          break;
        case '?':
          word = " ";
          break;
        default:
          word = demessageArr[i];
          break;
      }
      decryptedMessageArr.push(word);
    }
    decryptedMessage = decryptedMessageArr.join("");
    document.getElementById("box").innerText = decryptedMessage;

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "benjoybj891@gmail.com",
      Password: "3A9A58A4E071BB88D90AFB71F8451FB4B323",
      To: document.getElementById("email").value,
      From: "workmy000@gmail.com",
      Subject: "New email enquiry",
      Body: "The generated password: " + document.getElementById("box").innerText
    }).then(
      message => alert(message)
    );
    document.querySelectorAll("input")[0].value = "";
    document.querySelectorAll("input")[1].value = "";
    document.querySelectorAll("input")[2].value = "";
    document.querySelectorAll("input")[3].value = "";
    document.querySelectorAll("input")[4].value = "";
    document.querySelectorAll("input")[5].value = "";
    document.querySelectorAll("input")[6].value = "";
    document.querySelectorAll("input")[7].value = "";
    document.querySelectorAll("input")[8].value = "";
    document.getElementById("box").innerText = "";
    document.location = "#section4";
  }
}
