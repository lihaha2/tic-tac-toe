let count = 0 // четные не четные значения // для очередности ходов
const divs = document.getElementsByClassName('container__item');
for(let i = 0; i < divs.length; i++){
    divs[i].onclick = ()=>{
        click(divs[i])
    }
}
const click = async(elem)=>{
    if(count % 2 == 0){
        elem.style.backgroundImage = "url('img/tic.svg')"
        elem.onclick = false
        elem.style.cursor = 'default'
        elem.htmlFor = '1'
        count += 1 
        checkEnd()
    }else{
        elem.style.backgroundImage = "url('img/tac.svg')"
        elem.style.backgroundSize = "65%"
        elem.onclick = false
        elem.style.cursor = 'default'
        elem.htmlFor = '2'
        count += 1 
        checkEnd()
    }
}
const checkEnd = ()=>{
  if (divs[0].htmlFor =='1' && divs[1].htmlFor =='1' && divs[2].htmlFor =='1' || divs[0].htmlFor =='2' && divs[1].htmlFor =='2' && divs[2].htmlFor =='2')  reset();
  if (divs[3].htmlFor =='1' && divs[4].htmlFor =='1' && divs[5].htmlFor =='1' || divs[3].htmlFor =='2' && divs[4].htmlFor =='2' && divs[5].htmlFor =='2')  reset();
  if (divs[6].htmlFor =='1' && divs[7].htmlFor =='1' && divs[8].htmlFor =='1' || divs[6].htmlFor =='2' && divs[7].htmlFor =='2' && divs[8].htmlFor =='2')  reset();
  if (divs[0].htmlFor =='1' && divs[3].htmlFor =='1' && divs[6].htmlFor =='1' || divs[0].htmlFor =='2' && divs[3].htmlFor =='2' && divs[6].htmlFor =='2')  reset();
  if (divs[1].htmlFor =='1' && divs[4].htmlFor =='1' && divs[7].htmlFor =='1' || divs[1].htmlFor =='2' && divs[4].htmlFor =='2' && divs[7].htmlFor =='2')  reset();
  if (divs[2].htmlFor =='1' && divs[5].htmlFor =='1' && divs[8].htmlFor =='1' || divs[2].htmlFor =='2' && divs[5].htmlFor =='2' && divs[8].htmlFor =='2')  reset();
  if (divs[0].htmlFor =='1' && divs[4].htmlFor =='1' && divs[8].htmlFor =='1' || divs[0].htmlFor =='2' && divs[4].htmlFor =='2' && divs[8].htmlFor =='2')  reset();
  if (divs[2].htmlFor =='1' && divs[4].htmlFor =='1' && divs[6].htmlFor =='1' || divs[2].htmlFor =='2' && divs[4].htmlFor =='2' && divs[6].htmlFor =='2')  reset();
  if (count == 9) reset()
}
const reset = ()=>{
    for(let i = 0; i < divs.length; i++){
        divs[i].onclick = false
        divs[i].style.cursor = 'default'
    }
    $( ".alert" ).toggle(200)
    $( ".alert__button" ).click(()=> location.reload())
}