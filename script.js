const e = "enter";
const i = "imes";
const a = "ai";
const o = "ober";
const u = "ufat";

function writeTxt(txt) {
  const txtOutput = document.getElementById("txt-output");
  txtOutput.innerHTML = txt;
}

function getTxt() {
  const txtInput = document.getElementById("txt-input");
  return txtInput.value;
}

function encrypt() {
  const txt = getTxt();
  let result = "";
  for (let index = 0; index < txt.length; index++) {
    let char = txt.charAt(index);
    switch (char) {
      case "e":
        result = result + e;
        break;
      case "i":
        result = result + i;
        break;
      case "a":
        result = result + a;
        break;
      case "o":
        result = result + o;
        break;
      case "u":
        result = result + u;
        break;
      default:
        result = result + char;
    }
  }
  writeTxt(result);
}

function decrypt() {
  const txt = getTxt();
  let result = "";
  for (let index = 0; index < txt.length; index++) {
    let char = txt.charAt(index);
    switch (char) {
      case "e":
        result = result + e;
        break;
      case "i":
        result = result + i;
        break;
      case "a":
        result = result + a;
        break;
      case "o":
        result = result + o;
        break;
      case "u":
        result = result + u;
        break;
      default:
        result = result + char;
    }
  }
  writeTxt(result);
}
