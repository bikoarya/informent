$(document).ready(function () {


	// Select 2
	$('.pj').select2({
		placeholder: "Pilih Penanggung Jawab",
		allowClear: false,
		theme: 'bootstrap4'
	});
	$('.role').select2({
		placeholder: "Pilih Role",
		allowClear: false,
		theme: 'bootstrap4'
	});
	$('.pjKuitansi').select2({
		placeholder: "Pilih Penanggung Jawab",
		allowClear: false,
		theme: 'bootstrap4'
	});

	// Date Picker
	$("#tglKuitansi").datepicker({
		dateFormat: "dd/mm/yy",
		autoclose: true
	});
	$("#editTanggalLahir").datepicker({
		dateFormat: "dd/mm/yy",
		autoclose: true
	});
});
