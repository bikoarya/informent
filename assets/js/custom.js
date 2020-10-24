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
	$('.pjPenawaran').select2({
		placeholder: "Pilih Penanggung Jawab",
		allowClear: false,
		theme: 'bootstrap4'
	});
	$('.satuan').select2({
		placeholder: "Pilih Satuan",
		allowClear: false,
		theme: 'bootstrap4'
	});
	$('.customer').select2({
		placeholder: "Pilih Customer",
		allowClear: false,
		theme: 'bootstrap4'
	});
	$('.editPjKuitansi').select2({
		placeholder: "Pilih Penanggung Jawab",
		allowClear: false,
		theme: 'bootstrap4'
	});

	// Date Picker
	$("#tglKuitansi").datepicker({
		dateFormat: "dd-mm-yy",
		autoclose: true,
		useCurrent: false
	});
	$("#editTglKuitansi").datepicker({
		dateFormat: "yy-mm-dd",
		autoclose: true
	});
	$("#tglPenawaran").datepicker({
		dateFormat: "yy-mm-dd",
		autoclose: true
	});
});

$('#tabelKuitansi').DataTable({

	"processing": true, //Feature control the processing indicator.
	"serverSide": true, //Feature control DataTables' server-side processing mode.
	"order": [], //Initial no order.

	// Load data for the table's content from an Ajax source
	"ajax": {
		"url": site_url + "Kuitansi/ajaxList",
		"type": "POST"
	},

	//Set column definition initialisation properties.
	"columnDefs": [{
		"targets": [0], //first column / numbering column
		"orderable": false, //set not orderable
	}, ],

});

var rupiah = document.getElementById('harga');
rupiah.addEventListener('keyup', function (e) {
	// tambahkan 'Rp.' pada saat form di ketik
	// gunakan fungsi formatRupiah() untuk mengubah angka yang di ketik menjadi format angka
	rupiah.value = formatRupiah(this.value, 'Rp. ');
});

/* Fungsi formatRupiah */
function formatRupiah(angka, prefix) {
	var number_string = angka.replace(/[^,\d]/g, '').toString(),
		split = number_string.split(','),
		sisa = split[0].length % 3,
		rupiah = split[0].substr(0, sisa),
		ribuan = split[0].substr(sisa).match(/\d{3}/gi);

	// tambahkan titik jika yang di input sudah menjadi angka ribuan
	if (ribuan) {
		separator = sisa ? '.' : '';
		rupiah += separator + ribuan.join('.');
	}

	rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
	return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}
