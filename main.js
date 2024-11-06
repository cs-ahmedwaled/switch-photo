let smallImage = Array.from(document.querySelectorAll('.child'))
let bigImage = document.querySelector('.container .box img')
let closeBox = document.querySelector('.box span')
let rightIcon = document.querySelector('.box .fa-circle-right')
let leftIcon = document.querySelector('.box .fa-circle-left')
let index




for(let i = 0; i < smallImage.length; i++){

    smallImage[i].onclick = function(e){

        let selectSrc = e.target.getAttribute('src')
        document.querySelector('.box').style.display = 'flex';
        bigImage.setAttribute('src', selectSrc)

        index = smallImage.indexOf(e.target)

    }

}

closeBox.onclick = function(){
    document.querySelector('.box').style.display = 'none';
}

rightIcon.onclick = function(){
    index++
    if(index == smallImage.length){
        index = 0
    }
    bigImage.setAttribute('src', smallImage[index].src)
}

leftIcon.onclick = function(){
    index--
    if(index < 0){
        index = smallImage.length - 1
    }
    bigImage.setAttribute('src', smallImage[index].src)
}
