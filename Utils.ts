import * as $ from "jquery";
import { Navigation } from './Navigation';

$(function(){
    $('.header__nav-button').on('click', function(){
        const f = new Navigation();
        f.ShowHideNav();
    });
})