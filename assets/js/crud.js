$('#target').load(base_url + 'penawaran/load');


ambilData();
function ambilData() {
	$.ajax({
		type: 'POST',
		url: base_url + 'PenanggungJawab/view',
		dataType: 'json',
		success: function (data) {
			var no = 1;
			var baris = '';
			for (var i = 0; i < data.length; i++) {
				baris += '<tr>' +
					'<td>' + data[i].nama + ' </td>' +
					'<td>' + data[i].notelp + ' </td>' +
					'<td>' + data[i].email + ' </td>' +
					'<td>' +
					'<a href="javascript:void(0);" class="btn btn-outline-info btn-sm item" data-id_pj="' + data[i].id_pj + 
					'" data-nama="' +data[i].nama + '" data-notelp="' + data[i].notelp + '" data-email="' + data[i].email +
				    '" title="Tambah Penanggung Jawab" ><span class="fa fa-plus"></span></a>' +

					'</td>';
				// '<td><a href="#exampleModal" data-toggle="modal" onclick="submit(' + data[i].id_barang + ')"><i class="far fa-edit text-success fa-fw" style="font-size: 20px"></i></a> | <a onclick="hapus(' + data[i].id_barang + ')"><i class="far fa-trash-alt text-danger fa-fw" style="font-size: 20px"></i></a></td>' +
				// '</tr>';

			}
			$('#viewTambahPJ').html(baris);
		}
	});
}
$(document).on('click', '.item', function () {
	var id_pj = $(this).data('id_pj');
	var nama = $(this).data('nama');
	var notelp = $(this).data('notelp');
	var email = $(this).data('email');

	$.ajax({
		type: 'POST',
		data: {
			id_pj: id_pj,
			namar: nama,
			notelp: nnotelp,
			email: email
		},
		url: base_url + 'PenanggungJawab/tambahdatacari',
		success: function (data) {
			$('#target').html(data);
			$("#exampleModal").modal('hide');
			console.log(data);

		}
	});
})
