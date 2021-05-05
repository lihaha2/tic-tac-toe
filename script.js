let count = 0 // четные не четные значения // для очередности ходов
const divs = document.querySelectorAll('.container__item') // плитки

divs.forEach(e=> e.onclick = ()=> click(e))

const click = elem =>{
    if(count % 2 === 0){
        elem.style.backgroundImage = "url('img/tic.svg')"
        elem.onclick = false
        elem.style.cursor = 'default'
        elem.title = '1'
        count += 1 
        checkEnd()
    }else{
        elem.style.backgroundImage = "url('img/tac.svg')"
        elem.style.backgroundSize = "65%"
        elem.onclick = false
        elem.style.cursor = 'default'
        elem.title = '2'
        count += 1 
        checkEnd()
    }
}

const checkEnd = ()=>{
  divs[0].title === '1' && divs[1].title === '1' && divs[2].title === '1' || divs[0].title === '2' && divs[1].title ==='2' && divs[2].title ==='2' ? reset() :
  divs[3].title === '1' && divs[4].title === '1' && divs[5].title === '1' || divs[3].title === '2' && divs[4].title ==='2' && divs[5].title ==='2' ? reset() :
  divs[6].title === '1' && divs[7].title === '1' && divs[8].title === '1' || divs[6].title === '2' && divs[7].title ==='2' && divs[8].title ==='2' ? reset() :
  divs[0].title === '1' && divs[3].title === '1' && divs[6].title === '1' || divs[0].title === '2' && divs[3].title ==='2' && divs[6].title ==='2' ? reset() :
  divs[1].title === '1' && divs[4].title === '1' && divs[7].title === '1' || divs[1].title === '2' && divs[4].title ==='2' && divs[7].title ==='2' ? reset() :
  divs[2].title === '1' && divs[5].title === '1' && divs[8].title === '1' || divs[2].title === '2' && divs[5].title ==='2' && divs[8].title ==='2' ? reset() :
  divs[0].title === '1' && divs[4].title === '1' && divs[8].title === '1' || divs[0].title === '2' && divs[4].title ==='2' && divs[8].title ==='2' ? reset() :
  divs[2].title === '1' && divs[4].title === '1' && divs[6].title === '1' || divs[2].title === '2' && divs[4].title ==='2' && divs[6].title ==='2' ? reset() :
  count === 9 && reset()
}

const reset = ()=>{
    divs.forEach( e => {
        e.onclick = false
        e.style.cursor = 'default'
    })

    $( ".alert" ).fadeIn(1000)
    $( ".alert__button" ).click(()=> window.location.reload())
}