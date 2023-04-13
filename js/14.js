$(document).keydown(f1)

function f1(){
    if ($('#dino').classList !== ''){
        $('#dino').addClass('jump')
    }
    setTimeout(
        function (){
            $('#dino').removeClass('jump')
        }, 1000)
}
function f2(){
    let kaktusleft = $('#kaktus').css('left')
    let dinotop = $('#dino').css('top')
    console.log(kaktusleft + '--' + dinotop)
    dinotop = Number(dinotop.slice(0, -2)) //600px
    console.log(dinotop)
    kaktusleft = Number(kaktusleft.slice(0, -2))
    if (0<kaktusleft && kaktusleft<50 && dinotop>300){
        alert('ты врезался в кактус')
        location.reload()
    }
}
setInterval(f2, 10)

function f3(){
    let birdfly = $('#bird').css('left')
    let dinotop = $('#dino').css('top')
    console.log(birdfly + '--' + dinotop)
    dinotop = Number(dinotop.slice(0, -2)) //600px
    console.log(dinotop)
    birdfly = Number(birdfly.slice(0, -2))
    if (0<birdfly && birdfly<50 && dinotop<300){
        alert('ты врезался в птицу')
        location.reload()
    }
}
setInterval(f3, 10)