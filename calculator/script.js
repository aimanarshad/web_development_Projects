document.addEventListener('DOMContentLoaded', (event) => {
    const display = document.querySelector('input[name="display"]');
    const buttons = document.querySelectorAll('.btn1, .btn2, .btn3, .btn4');


   
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const buttonText = e.target.textContent;

            if (buttonText === 'AC') {
                display.value = '';
            } else if (buttonText === 'DEL') {
                display.value = display.value.slice(0, -1);
            } else if (buttonText === '=') {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
            } else {
                display.value += buttonText;
            }
        });
    });
});
