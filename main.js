let big=document.querySelector(`.big`);
let btn=document.querySelector(`.btn`);
let form=document.querySelector(`.form`);


let box2=document.querySelector(`.box2`);
let rasm1=document.querySelector(`.rasm1`)
let rasm2=document.querySelector(`.rasm2`)


big.addEventListener(`click`,()=> {
    if(form.classList.contains(`hide`)){
        form.classList.remove(`hide`);
        btn.classList.add(`hide`)
    }else{
        form.classList.add(`hide`)
        btn.classList.remove(`hide`)
    }
});

box2.addEventListener(`click`,() => {
    if(rasm2.classList.contains(`new`)){
        rasm2.classList.remove(`new`)
  
    }else{
        rasm2.classList.add(`new`)
       
    }
})
