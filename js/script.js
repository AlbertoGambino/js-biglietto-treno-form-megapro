// console.log('hello');
var generaBtn = document.getElementById('genera');
var annullaBtn = document.getElementById('annulla');
var costo = 0.21;
var costoTotale = 0;

generaBtn.addEventListener('click', function(){
  // console.log('ho cliccato sul pulsante genera');
  var name = document.getElementById('name').value;
  // console.log(name);
  // console.log(document.getElementById('name'));
  var distanza = parseInt(document.getElementById('distance').value);
  var eta = document.getElementById('eta').value;
  console.log(name, distanza, eta);
  if (name !== '' && distanza > 0 && eta !== ''){

    costoTotale = costo * distanza;

    // blocco else if per sconto

    console.log(costoTotale);

    if (eta == 1 ){
      // console.log('minorenne', eta);

      var sconto = costoTotale * 0.2;

      costoTotale = costoTotale - sconto + ' €';

      document.getElementById('offerta').innerHTML = 'Sconto minorenne'

    } else if (eta == 3){
      // console.log('over65', eta);

      document.getElementById('offerta').innerHTML = 'Sconto over 65'

      var sconto = costoTotale * 0.4;
      costoTotale = costoTotale - sconto + ' €';
    }

    document.getElementById('costo-totale').innerHTML = costoTotale;

    var cp = Math.floor(Math.random() * (100000-90000)) + 90000;
    document.getElementById('codCp').innerHTML = cp;

    var rndCarrozza =  Math.floor(Math.random() * 20) + 1;
    document.getElementById('carrozza').innerHTML = rndCarrozza;

    document.getElementById('cliente').innerHTML = document.getElementById('name').value;




  } else{
    console.log('compilare tutti i campi');
  }
});

annullaBtn.addEventListener('click', function(){
  console.log('ho cliccato sul pulsante annulla')
});
