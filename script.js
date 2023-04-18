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
  let txt = getTxt();
  txt = txt.replaceAll(e, "e");
  txt = txt.replaceAll(i, "i");
  txt = txt.replaceAll(a, "a");
  txt = txt.replaceAll(o, "o");
  txt = txt.replaceAll(u, "u");
  writeTxt(txt);
}

const copyContent = async () => {
  let text = document.getElementById("txt-output").innerHTML;
  await navigator.clipboard.writeText(text);
};
