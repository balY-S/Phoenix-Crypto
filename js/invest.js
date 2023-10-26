range = $('.range-slider > .input-range');
value = $('.range-slider > .range-value');

value.val(range.attr('value'));

range.on('input', function(){
  	//monparent=$(this).parent();
  monparent=this.parentNode;

  value=$(monparent).find('.range-value');
    $(value).val(this.value);
});

value.on('input', function(){
    monparent=this.parentNode;
  	range=$(monparent).find('.input-range');
    $(range).val(this.value);

});

document.getElementById('stavka').innerHTML = "17.5%";

document.getElementById('plata').innerHTML = "58750 руб.";

function penc(){
  document.getElementById('stavka').innerHTML = "14.25%";
  var prc = 0.1425;
  calc();
}

function optima(){
  document.getElementById('stavka').innerHTML = "15%";
  var prc = 0.15;
  calc();
}

function invest(){
  document.getElementById('stavka').innerHTML = "17.5%";
  var prc = 0.175;
  calc();
}

function activ(mes){
  if (mes == 3) {$('#m3').attr("checked", true);}
  if (mes == 6) {$('#m6').attr("checked", true);}
  if (mes == 12) {$('#m12').attr("checked", true);}
}

function calc(){

  var summa = document.getElementById('sum').value;


  if($('#m3').prop('checked')) {
      mes=3; prc = 0.1425;
      $('#p2').attr("checked", false);
      $('#p3').attr("checked", false);
      $('#p2').attr("disabled", true);
      $('#p3').attr("disabled", true);
      $('#p1').attr("checked", true);
                               }
  if($('#m6').prop('checked')) {
    mes=6;
    $('#p2').attr("disabled", false);
    $('#p3').attr("disabled", false);
  }
  if($('#m12').prop('checked')) {
    mes=12;
    $('#p2').attr("disabled", false);
    $('#p3').attr("disabled", false);
                                }

  if($('#p2').prop('checked') & $('#m3').prop('checked')) {
      mes=6; activ(6);
      $('#m3').attr("checked", false);
      $('#m6').attr("checked", true);
  }

  sum = Math.ceil (summa) + Math.ceil (summa*((prc/12)*mes));


  document.getElementById('plata').innerHTML = +sum + " руб.";

  document.getElementById('stavka').innerHTML = Math.round(prc*10000)/100 + "%";

}
