function getFirstSelector(selector) {
  var e = document.querySelector(selector)
  return e
}

function nestedTarget() {
  var e = document.querySelector('#nested .target')
  return e
}

function increaseRankBy(n) {
  var e = document.querySelectorAll('.ranked-list');
  for (let i=0;i<e.length;i++) {
    e[i].innerHTML = parseInt(e[i].innerHTML) + n
  }
}

function deepestChild() {
  var f = document.querySelector('#grand-node')
  var g = f.childNodes
  if (f.firstChild) {
  
  } else (return f)
  
}

/*function deepestChild() {
  var f = document.querySelector('#grand-node')
  var nextF = f.firstChild 
  while(nextF) {
    f = nextF 
    nextF = f.firstChild
  }
  return f
}*/