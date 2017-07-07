let tDaily = $('#tDaily')

$.ajax({
	url: '/api/get-sales',
	type: 'get',
	success: sales => {

		let trHTML = ''

		$.each(sales, (i, sale) => {
			trHTML += `<tr>
				<td>${sale.area}</td>
				<td>${sale.entradas}</td>
				<td>${sale.segundos}</td>
				<td>${sale.guarniciones}</td>
				<td>${sale.postres}</td>
				<td>${sale.piqueos}</td>
				</tr>`
    })
    tDaily.append(trHTML);
	}
})
