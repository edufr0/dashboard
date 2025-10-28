const toggle = document.querySelector('.toggle');
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('.main');

toggle.onclick = function() {
    sidebar.classList.toggle('active');
    main.classList.toggle('active');
}
