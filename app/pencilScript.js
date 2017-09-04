function page(name) {
  switch (name) {
    case "main":
    document.body.innerHTML = '<div id="toolbar"><p id="toolbarOptions"><input id="textInput" value="Click here and type" onclick="this.value = ' + "' '" + '" oninput="typeInput();" />&nbsp&nbsp&nbspFont Size: <input id="fontSize"  value="10" />&nbsp&nbsp&nbsp<span onclick="printDocument();">Print</span></p></div><div id="content"></div>';
    document.getElementById("toolbarOptions").innerHTML = document.getElementById("toolbarOptions").innerHTML + "";
    document.getElementById("content").innerHTML = localStorage.getItem("paperData");
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

lsDefault("paperData", "<span>W</span><span>e</span><span>l</span><span>c</span><span>o</span><span>m</span><span>e</span><span> </span><span>t</span><span>o</span><span> </span><span>A</span><span>p</span><span>p</span><span>S</span><span>t</span><span>o</span><span>n</span><span>e</span><span> </span><span>P</span><span>e</span><span>n</span><span>c</span><span>i</span><span>l</span><span>!</span>");
lsDefault("showData", "");

//Print Document
function printDocument() {
  document.body.innerHTML = "<p style='text-align: center;'>Created with AppStone Pencil (pencil.appstone.net)</p>" + document.getElementById("content").innerHTML;
  print();
  page("main");
}

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
  localStorage.setItem("paperData", document.getElementById("content").innerHTML)
}
