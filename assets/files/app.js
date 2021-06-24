const join1 = document.querySelector('.offerBtn');
const join2 = document.querySelector('.popup')

window.addEventListener('scroll', e => {
    let i = join1.getBoundingClientRect();
    let j1 = i.height + i.y;
    if(j1 <= 0){
        join2.style.bottom = '2em';
    } else{
        join2.style.bottom = '-20em';
    }
})

/*-------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/
const cidLinks = document.querySelectorAll('.cid');
//edit to update the cid
const cid = 'https://www.slotzo.com/?PAR=178ga64cidLPTest2-OnlineSlots&NeoDL=registration'
//set all cid links
cidLinks.forEach(x => {
  x.href = cid;
})
/*-------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/
