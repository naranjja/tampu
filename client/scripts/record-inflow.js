$('img[usemap]').rwdImageMaps()

let firstModal = $('#firstModal')
let secondModal = $('#secondModal')
let areas = $('area')

const makeModal = (area) => {
	let choices = `
	<div class='header'><h1>${area}</h1></div>
	<div class='content'>
		<h2 id='menu'>Registrar menús</h2>
		<div class="ui divider"></div>
		<h2 id='carta'>Registrar platos a la carta</h2>
		<div class="ui divider"></div>
		<h2 id='bebidas'>Registrar bebidas</h2>
		<div class="ui divider"></div>
		<h2 id='otros'>Registrar otros</h2>
	</div>`

	let menuHTML = `
	<div class='header'><h1>${area} - Registrar menús</h1></div>
	<div class='content'>
		<br>
		<button class="ui primary button">Guardar</button>
		<button class="ui button close">Cancelar</button>
	</div>`

	let cartaHTML = `
	<div class='header'><h1>${area} - Registrar platos a la carta</h1></div>
	<div class='content'>
		<h2>Entradas</h2>
		<select id='sEntradas' class="ui fluid search dropdown" multiple=""></select>
		<h2>Segundos</h2>
		<select id='sSegundos' class="ui fluid search dropdown" multiple=""></select>
		<h2>Guarniciones</h2>
		<select id='sGuarniciones' class="ui fluid search dropdown" multiple=""></select>
		<h2>Postres</h2>
		<select id='sPostres' class="ui fluid search dropdown" multiple=""></select>
		<h2>Piqueos</h2>
		<select id='sPiqueos' class="ui fluid search dropdown" multiple=""></select>
		<br>
		<button class="ui primary button">Guardar</button>
		<button class="ui button close">Cancelar</button>
	</div>`

	let bebidasHTML = `
	<div class='header'><h1>${area} - Registrar bebidas</h1></div>
	<div class='content'>
		<h2>Sin alcohol</h2>
		<select class="ui fluid search dropdown" multiple="">
			<option value="1">1</option>
			<option value="2">2</option>
		</select>
		<h2>Con alcohol</h2>
		<select class="ui fluid search dropdown" multiple="">
			<option value="1">1</option>
			<option value="2">2</option>
		</select>
		<h2>Calientes</h2>
		<select class="ui fluid search dropdown" multiple="">
			<option value="1">1</option>
			<option value="2">2</option>
		</select>
		<br>
		<button class="ui primary button">Guardar</button>
		<button class="ui button close">Cancelar</button>
	</div>`

	let otrosHTML = `
	<div class='header'><h1>${area} - Registrar otros</h1></div>
	<div class='content'>
		<br>
		<button class="ui primary button">Guardar</button>
		<button class="ui button close">Cancelar</button>
	</div>`

	firstModal.html(choices)

	$('#menu').click(() => {
		secondModal.html(menuHTML)
		$('.ui.dropdown').dropdown()
		secondModal.modal('show')
		$('.close').click(() => secondModal.modal('hide'))
	})

	$('#carta').click(() => {
		secondModal.html(cartaHTML)
		$('.ui.dropdown').dropdown()
		$.ajax({
			url: '/api/entradas',
			type: 'get',
			success: result => {
				$.each(result, (i, value) => {
					$('#sEntradas').append($('<option>').text(value.name).attr('value', value.name))
				})
			}
		})
		$.ajax({
			url: '/api/segundos',
			type: 'get',
			success: result => {
				$.each(result, (i, value) => {
					$('#sSegundos').append($('<option>').text(value.name).attr('value', value.name))
				})
			}
		})
		$.ajax({
			url: '/api/postres',
			type: 'get',
			success: result => {
				$.each(result, (i, value) => {
					$('#sPostres').append($('<option>').text(value.name).attr('value', value.name))
				})
			}
		})
		$.ajax({
			url: '/api/guarniciones',
			type: 'get',
			success: result => {
				$.each(result, (i, value) => {
					$('#sGuarniciones').append($('<option>').text(value.name).attr('value', value.name))
				})
			}
		})
		$.ajax({
			url: '/api/piqueos',
			type: 'get',
			success: result => {
				$.each(result, (i, value) => {
					$('#sPiqueos').append($('<option>').text(value.name).attr('value', value.name))
				})
			}
		})
		secondModal.modal('show')
		$('.close').click(() => secondModal.modal('hide'))
		$('.primary.button').click(() => {
			$.ajax({
				url: '/api/save-order',
				type: 'get',
				data: {
					area,
					entradas: $('#sEntradas').val(),
					segundos: $('#sSegundos').val(),
					postres: $('#sPostres').val(),
					guarniciones: $('#sGuarniciones').val(),
					piqueos: $('#sPiqueos').val()
				},
				success: result => {
					console.log('api works!');
				}
			})
		})
	})

	$('#bebidas').click(() => {
		secondModal.html(bebidasHTML)
		$('.ui.dropdown').dropdown()
		secondModal.modal('show')
		$('.close').click(() => secondModal.modal('hide'))
	})

	$('#otros').click(() => {
		secondModal.html(otrosHTML)
		$('.ui.dropdown').dropdown()
		secondModal.modal('show')
		$('.close').click(() => secondModal.modal('hide'))
	})

	firstModal.modal('show')
}

areas.click((e) => {
	makeModal(e.target.id)

})
