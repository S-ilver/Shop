"use strict";

 document.addEventListener('DOMContentLoaded', () => {
    const oneBtn = document.querySelector('.header-one__menu'),
          oneContent = document.querySelector('.header-one__info'),
          oneAutos = document.querySelector('.header-one__autos'),
          twoBtn = document.querySelector('.header-two__menu'),
          twoContent = document.querySelector('.header-two__right'),
          twoLogo = document.querySelector('.header-two__logo'),
          twoParent = document.querySelector('.header-two');

        window.addEventListener('scroll',() => {

            if(document.documentElement.scrollTop > 0){
                twoParent.classList.add('_active');
            }else if(document.documentElement.scrollTop == 0) {
                twoParent.classList.remove('_active');
            }
        });

          oneBtn.addEventListener('click',function (){
            oneContent.classList.toggle('_active');
            this.classList.toggle('_active');
            oneAutos.classList.toggle('_active');
        });
        twoBtn.addEventListener('click',function (){
            twoContent.classList.toggle('_active');
            this.classList.toggle('_active');
            twoLogo.classList.toggle('_active');
            document.querySelector('.header-two__cart').classList.toggle('_active');
            twoParent.classList.toggle('_active');
        });

        const search = document.querySelector('.header-two__search'),
              input = document.querySelector('.header-search');

              search.addEventListener('click',() => {
                input.classList.toggle('_active');
                twoContent.classList.remove('_active');
              });
            const close = document.querySelector('.header-search__close')
            .addEventListener('click',() => {
                input.classList.remove('_active');
            });
});