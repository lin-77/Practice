var oBox = document.querySelector('.box');

oBox.onclick = function () {
    this.style.background = '#ccc';
    this.style.color = 'blue';
    this.style.borderRadius = 50 + '%';
}

var oImg = document.querySelector('img');

oImg.onclick = function(){
    this.style.border = '1px solid #000';
    this.style.margin = '0 auto';
}