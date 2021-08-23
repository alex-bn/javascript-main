for (var i = 0; i < 3; i++) {
    const log = () => {
        // debugger;
        console.log(i);
    }
    setTimeout(log, 100);
}

for (let i = 0; i < 3; i++) {
    const log = () => {
        // debugger;
        console.log(i);
    }
    setTimeout(log, 100);
}



// challenge: change the color of the h1 tag without selecting the h1 tag(you can select the body)
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    })
})();
