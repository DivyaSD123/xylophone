var p = document.getElementById("myAudio1"); 
var q = document.getElementById("myAudio2"); 
var r = document.getElementById("myAudio3"); 
var s = document.getElementById("myAudio4"); 
var t = document.getElementById("myAudio5"); 
var u = document.getElementById("myAudio6"); 
var v = document.getElementById("myAudio7"); 
function playAudio1() { 
  p.play(); 
} 
function playAudio2() { 
  q.play(); 
} 
function playAudio3() { 
  r.play(); 
} 
function playAudio4() { 
  s.play(); 
} 
function playAudio5() { 
  t.play(); 
} 
function playAudio6() { 
  u.play(); 
} 
function playAudio7() { 
  v.play(); 
}

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 65) {
    p.play();
}
    else if (e.keyCode == 66) {
    q.play();
}

   else if (e.keyCode == 67) {
    r.play();
}
   else if (e.keyCode == 68) {
    s.play();
}
    else if (e.keyCode == 69) {
    t.play();
}
    else if (e.keyCode == 70) {
    u.play();
}
    else if (e.keyCode == 71) {
    v.play();
}
    else{
    error;

  }
});