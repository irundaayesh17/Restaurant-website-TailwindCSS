
document.addEventListener('DOMContentLoaded', function() {
    const p_title = document.getElementById('pizza_title').textContent;
    //const h_title = localStorage.getItem('hm_title');
    const pizza_path = document.getElementById('path');
    pizza_path.textContent=  'Home'  + ' / ' + p_title;

    document.getElementById('ytbtn').onclick = function() {
        window.location.href = 'https://youtu.be/sv3TXMSv6Lw?si=Kfn8pt_I50JNXXN3';
    }

    document.getElementById('back_btn').onclick = function() {
        window.location.href = 'index.html';
    }
    document.getElementById('register').onclick = function() {
        window.location.href = 'register.html';
    }

    document.getElementById('home').onclick = function() {
        window.location.href = 'index.html';
    }
});
