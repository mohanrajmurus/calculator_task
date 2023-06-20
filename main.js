const keyVal = document.querySelectorAll('.key');
const display = document.querySelector('#display--result')
const histroy = document.querySelector('#display--history')
const deleteValue = document.getElementById('sigle--delete');
const reset = document.getElementById('delete')
let value='';
keyVal.forEach(key => {
    key.addEventListener('click',() => {
        if(key.value === '='){
            const result = eval(value);
            //console.log(result);
            histroy.textContent = value
            display.textContent = result;
            value = ''
        }
        else{
            value += key.value;
            display.textContent = value
        }
    })
})
deleteValue.addEventListener('click', () => {
    //console.log('clicked');
    value = value.slice(0,value.length-1)
    display.textContent = value
})
reset.addEventListener('click', () => {
    console.log('clicked');
    value=''
    display.textContent = value;
    histroy.textContent = ''
})