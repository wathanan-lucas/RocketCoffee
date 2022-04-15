const Menu = {
    closeOpen() {
        close = document.querySelector('.btn-mobile .fechar');
        open = document.querySelector('.btn-mobile .abrir');
        menu = document.querySelector('.nav');
        
        close.classList.toggle("close")
        open.classList.toggle("open")
        menu.classList.toggle("active")
        
        
        if(menu.classList.contains('active')){
            document.documentElement.style.overflow = 'hidden';
        }else {
            document.documentElement.style.overflow = 'auto';
        }
    }
}

