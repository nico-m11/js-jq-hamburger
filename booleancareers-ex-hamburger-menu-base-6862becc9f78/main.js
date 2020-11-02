// apro l'humburger menu

//$('.header-right > a').click(function() {
//  $('.hamburger-menu').fadeIn(2000);
//})

// chiudo l'hamburger menu

//$('.close').click(function() {
//  $('.hamburger-menu').fadeOut('fast');
//})


/* in realtà io avevo eseguito l'esercizio come eseguito stamattina da Flavio
ma vista la richiesta di Alessandro commenteroò questo per fare come desidera lui
*/


//apro l'Hamburger

//$('.header-right > a').click(function() {
//  $('.hamburger-menu').show();
//})

// chiudo l'hamburger

//$('.hamburger-menu > .close').click(function() {
//  $('.hamburger-menu').hide();
//})


// svolgiamolo come fatto osservare ancora una volta da Alessandro

// apro menu
$('.header-right > a').click(function() {
  $('.hamburger-menu').addClass('active');
})
// chiudo menu
$('.close').click(function() {
  $('.hamburger-menu').removeClass('active');
})
