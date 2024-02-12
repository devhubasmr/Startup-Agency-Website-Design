document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('show-header').addEventListener('click', function(){
        document.querySelector('.header-menu').classList.add('active');
    });
    document.getElementById('close').addEventListener('click', function(){
        document.querySelector('.header-menu').classList.remove('active')
    })
})