function page(name) {
  switch (name) {
    case "main":
    document.body.innerHTML = '<div id="toolbar"><p id="toolbarOptions"><input id="textInput" value=" " oninput="typeInput();" />&nbsp&nbsp&nbspFont Size: <input id="fontSize"  value="10" />&nbsp&nbsp&nbsp<span onclick="printDocument();">Print</span>&nbsp&nbsp&nbsp<a href="http://emojis.appstone.net" target="_blank">AppStone Emoji:</a>&nbsp<input id="ase1" style="width: 50px;" />-<input id="ase2" style="width: 50px;" />&nbsp<span onclick="addEmoji();">Add</span>&nbsp&nbsp&nbsp<span onclick="newLine();">New Line</span></p></div><div id="content"></div>';
    document.getElementById("toolbarOptions").innerHTML = document.getElementById("toolbarOptions").innerHTML + "";
    document.getElementById("content").innerHTML = localStorage.getItem("pencilData");
    document.getElementById("content").onclick = function () {
      document.getElementById("textInput").focus();
    }
    break;
    case "advanced":
    document.body.innerHTML = '<div id="toolbar"><p id="toolbarOptions"><span onclick="page(' + "'main'" + ')">Home</span></p></div><div id="content"></div>';
    break;
    default:
    console.error("Page '" + name + "' is invalid");
  }
}

//Local Storage Defaults
function lsDefault(item, value) {
  if (localStorage.getItem(item) === null) {
    localStorage.setItem(item, value);
  }
}

lsDefault("pencilData", '<span class="pencilCharacter" style="font-size: 100%;">W</span><span class="pencilCharacter" style="font-size: 100%;">e</span><span class="pencilCharacter" style="font-size: 100%;">l</span><span class="pencilCharacter" style="font-size: 100%;">c</span><span class="pencilCharacter" style="font-size: 100%;">o</span><span class="pencilCharacter" style="font-size: 100%;">m</span><span class="pencilCharacter" style="font-size: 100%;">e</span><span class="pencilCharacter" style="font-size: 100%;"> </span><span class="pencilCharacter" style="font-size: 100%;">t</span><span class="pencilCharacter" style="font-size: 100%;">o</span><span class="pencilCharacter" style="font-size: 100%;"> </span><span class="pencilCharacter" style="font-size: 100%;">A</span><span class="pencilCharacter" style="font-size: 100%;">p</span><span class="pencilCharacter" style="font-size: 100%;">p</span><span class="pencilCharacter" style="font-size: 100%;">S</span><span class="pencilCharacter" style="font-size: 100%;">t</span><span class="pencilCharacter" style="font-size: 100%;">o</span><span class="pencilCharacter" style="font-size: 100%;">n</span><span class="pencilCharacter" style="font-size: 100%;">e</span><span class="pencilCharacter" style="font-size: 100%;"> </span><span class="pencilCharacter" style="font-size: 100%;">P</span><span class="pencilCharacter" style="font-size: 100%;">e</span><span class="pencilCharacter" style="font-size: 100%;">n</span><span class="pencilCharacter" style="font-size: 100%;">c</span><span class="pencilCharacter" style="font-size: 100%;">i</span><span class="pencilCharacter" style="font-size: 100%;">l</span>');

//Print Document
function printDocument() {
  document.body.innerHTML = "<p style='text-align: center;'>Created with AppStone Pencil (pencil.appstone.net)</p>" + document.getElementById("content").innerHTML;
  print();
  page("main");
}

//Add Emoji
function addEmoji() {
  var categoryID = document.getElementById("ase1").value;
  var emojiID = document.getElementById("ase2").value;
  document.getElementById("content").innerHTML = document.getElementById("content").innerHTML + "<img src='http://emojis.appstone.net/icons/" + asemojis.emojiData[categoryID].path + "/" + asemojis.emojiData[categoryID].items[emojiID].path + "' class='appstoneEmoji pencilCharacter' alt='-" + asemojis.emojiData[categoryID].items[emojiID].name + "-' style='height: " + (Math.abs(document.getElementById("fontSize").value) * 2) + "px;' />";
  autosave();
}

//New Line
function newLine() {
  document.getElementById("content").innerHTML = document.getElementById("content").innerHTML + "<br class='pencilCharacter' />";
}
//Auto-save document
function autosave() {
  localStorage.setItem("pencilData", document.getElementById("content").innerHTML);
}

//When something is typed
function typeInput() {
  var textInput = document.getElementById("textInput").value;
  if (textInput === "") {
    //Check there are characters to remove
    if (document.getElementById("content").getElementsByClassName("pencilCharacter").length > 0) {
      //Backspace
      document.getElementById("content").getElementsByClassName("pencilCharacter")[document.getElementById("content").getElementsByClassName("pencilCharacter").length - 1].outerHTML = "";
    }
  } else {
    //New Character
    document.getElementById("content").innerHTML = document.getElementById("content").innerHTML + "<span class='pencilCharacter' style='font-size: " + (Math.abs(document.getElementById("fontSize").value) * 10) + "%;'>" + textInput.substring(1, textInput.length) + "</span>";
  }
  document.getElementById("textInput").value = " ";
  autosave();
}
