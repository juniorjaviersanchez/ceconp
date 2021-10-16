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


$(".navbar-brand").append("<div class='modal1'><h5>Encuentranos</h5><p>Av. Universitaria 1965 - Dpto 1808 <br>(Cruce Av. Universitaria y Av. La Mar) - Puebla Libre - Lima</p><p>Calle Francisco Cabrera N° 331 - Chiclayo - Lambayeque</p><p>Mz E Lote 6 de la Urb. Los Angeles de Cayma <br> Cayma - Arequipa</p><p>Av. Sánchez Cerro N° 450 - Ofc.201 Edificio Atlas - Piura</p><h5>Llamanos</h5><p>983968463 - 952892465</p><h5>Correo</h5><p>Centro de Arbitraje - arbitraje@ceconp.com  <br> Junta de Resolución de disputa - jrd@ceconp.com<br> Centro Conciliación - conciliacion@ceconp.com</p></div>");