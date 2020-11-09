function showIntroDiv(){
  document.getElementById('titleDiv').style.display="none";
  document.getElementById('introDiv').style.display="block";
}

function showBodyDiv(){
  document.getElementById('introDiv').style.display="none";
  document.getElementById('bodyDiv').style.display="block";
}

function showConclusionDiv(){
  document.getElementById('bodyDiv').style.display="none";
  document.getElementById('conclusionDiv').style.display="block";
}

function showAllWork(){
  document.getElementById('conclusionDiv').style.display="none";
  document.getElementById('articleDiv').style.display="block";
}

function makeArticle(){
  document.getElementById("titleResult").innerHTML = document.getElementById('title').value;
  document.getElementById("creditsResult").innerHTML = document.getElementById('credits').value;  
document.getElementById("introResult").innerHTML = document.getElementById('intro').value;
document.getElementById("bodyResult").innerHTML = document.getElementById('body').value;
document.getElementById("conclusionResult").innerHTML = document.getElementById('conclusion').value;
}
