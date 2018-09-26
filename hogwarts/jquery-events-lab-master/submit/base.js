console.log("Sanity Check: JS is working!");

$("#time").text(Date.now())
$('form').submit(function (e) {
  e.preventDefault()
})
