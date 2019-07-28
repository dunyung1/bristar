var acc = document.getElementsByClassName('fees__payments-btn');
var panel = document.getElementsByClassName('panel');

for (var i = 0; i < acc.length; i++) {

    acc[i].onclick = function() {
        var setClasses = !this.classList.contains('active');
        setClass(acc, 'active', 'remove');
        setClass(panel, 'show', 'remove');

        if (setClasses) {
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('show');
        }
    }
}

//Need assistance to understand this code snippet
function setClass(els, className, fnName){
    for (var i=0; i < els.length; i++){
        els[i].classList[fnName](className);
    }
}
