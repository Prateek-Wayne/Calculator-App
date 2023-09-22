let button = document.querySelectorAll('.button-css');
let input = document.querySelector('.input');
let str = "";

for (i = 0; i < button.length; i++) {
    button[i].addEventListener('click', (e) => {
        
        if (e.target.innerText === '=') {
            str = eval(str);
            if(str===Infinity||str===-Infinity)
                str="Error";
            input.value = str;
            return;
        }
        if (e.target.innerText === 'AC') {
            str = "";
            input.value = str;
            return;
        }
        if (e.target.innerText == '<') {
            str=str.slice(0,-1);
            input.value=str;
            return;
        }
        if(e.target.innerText=='%')
        {
            if(str!="")
            {
                let number=Number(str);
                number=number/100;
                str=String(number);
                input.value=str;
                return ;
            }
        }
        str += e.target.innerText;
        console.log(str)
        input.value = str;
        // if(str==="Error")
        // {
        //         str="";
        //         return;
        // }
    })
}
