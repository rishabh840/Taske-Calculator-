let string = "";
let string1="";
let buttons = document.querySelectorAll('.button .btn');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('.output1').value = string;
            document.querySelector('.output').value=string;
        }
        else if(e.target.innerHTML=='AC')
            {
                string="";
                document.querySelector('.output').value=string;
                document.querySelector('.output1').value=string;
            }
            else if(e.target.innerHTML=='C')
            {
                document.querySelector('.output').value=string1;
            }
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            string1=string;
            document.querySelector('.output').value = string;
        }
    })
})

