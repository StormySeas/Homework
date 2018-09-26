console.log("Sanity Check: JS is working!");


$(document).ready(function () {
  $('.sum').val('0 ')
  $('.left').val('')

  function calc () {
    var $num1 = +$('.num1 ').val()
    var $num2 = +$('.num2 ').val()
    $('.sum').val($num1 + $num2)
  }
  $('#left').keyup(function () {
    calc()
  })
})
