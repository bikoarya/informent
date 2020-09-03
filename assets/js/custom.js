$(document).ready(function () {


	// Select 2
	$('.pj').select2({
		placeholder: "Pilih Penanggung Jawab",
		allowClear: false,
		theme: 'bootstrap4',
		containerCssClass: 'custom-sm'
	});

	// Date Picker
	$("#tanggal_lahir").datepicker({
		dateFormat: "dd/mm/yy",
		autoclose: true
	});
	$("#editTanggalLahir").datepicker({
		dateFormat: "dd/mm/yy",
		autoclose: true
	});
});
