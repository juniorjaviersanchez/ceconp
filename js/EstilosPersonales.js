var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'data.json'
})

const items = document.querySelectorAll(".accordion a");

function toggleAccordion() {
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


$(".navbar-brand").append("<div class='modal1'><h5>Encuéntranos</h5><p>Av. Universitaria 1965 - Dpto 1808 <br>(Cruce Av. Universitaria y Av. La Mar) - Puebla Libre - Lima</p><p>Calle Francisco Cabrera N° 331 - Chiclayo - Lambayeque</p><p>Mz E Lote 6 de la Urb. Los Angeles de Cayma <br> Cayma - Arequipa</p><p>Av. Sánchez Cerro N° 450 - Ofc.201 Edificio Atlas - Piura</p><h5>Llámanos</h5><p>Horario de atención es desde las 9.00 am - 11.59 am <br> 983968463 - 952892465</p><h5>Correos<h5><p> <b>Virtual</b> <br> mesadepartesvirtual@ceconp.com <br>arbitraje@ceconp.com </p><p> <b>Procesos de conciliación</b> <br> conciliacion@ceconp.com </p> <p> <b>Resolución de disputas</b> <br> jrd@ceconp.com  </p> </div>");

let footerText  =  `<p>
                  <br />

                  A.Civil - CECONP <br />
                  Av. Universitaria 1965 - Dpto 1808 (Cruce Av. Universitaria y Av. La Mar) - Puebla Libre - Lima <br />
                  Calle Francisco Cabrera N° 331 - Chiclayo - Lambayeque <br />
                  Mz E Lote 6 de la Urb. Los Angeles de Cayma - Cayma - Arequipa <br />
                  Av. Sánchez Cerro N° 450 - Ofc.201 Edificio Atlas - Piura <br /><br />

                  <b>TELÉFONO</b> <br />
                  Horario de atención es desde las 9.00 am - 11.59 am <br>
                  983968463 - 952892465 <br /><br />

                  <b>CORREOS</b><br/> 
                 <b>Virtual</b> <br> mesadepartesvirtual@ceconp.com <br>arbitraje@ceconp.com <br> <b>Procesos de conciliación</b> <br> conciliacion@ceconp.com  <br> 
                 <b>Resolución de disputas</b> <br> jrd@ceconp.com  

                  <br />
                  <br />
                  Copyright &copy; 2022

              </p> `;

$('.copywrite-text').html(footerText);
