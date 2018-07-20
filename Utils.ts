/// <reference path="./typings/index.d.ts" />

import * as $ from "jquery";
import { Navigation } from './Navigation';
import { Footer } from './Footer';


$(function(){
    if( $('.header__nav-button').length > 0){
        $('.header__nav-button').on('click', ()=>{
            const f = new Navigation();
            f.ShowHideNav();
        });
    }

    if( $('.footer__arrow').length > 0){
        $('.footer__arrow').on('click', ()=>{
            const f = new Footer();
            f.ShowHideSection();
        });
    }
    
})