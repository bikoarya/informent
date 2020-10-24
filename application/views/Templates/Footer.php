<!-- Footer -->
<!-- <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2020</span>
          </div>
        </div>
      </footer> -->
      <!-- End of Footer -->

      </div>
    <!-- End of Content Wrapper -->

  </div>
  <!-- End of Page Wrapper -->

  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>

  <!-- Logout Modal-->
  <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Yakin ingin keluar?</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">Pilih "Keluar" jika anda ingin mengakhiri sesi</div>
        <div class="modal-footer">
          <button class="btn btn-info" type="button" data-dismiss="modal">Cancel</button>
          <a class="btn btn-primary" href="<?= site_url('Login/Logout'); ?>">Keluar</a>
        </div>
      </div>
    </div>
  </div>
  <!-- JQuery -->
  <script src="<?= base_url('assets/vendor/jquery/jquery.min.js') ?>"></script>
  <!-- Data Tables -->
  <script src="<?= base_url('assets/vendor/datatables/jquery.dataTables.min.js'); ?>"></script>
  <script src="<?= base_url('assets/vendor/datatables/dataTables.bootstrap4.min.js'); ?>"></script>
  <!-- Bootstrap 4 -->
  <script src="<?= base_url('assets/bootstrap/js/bootstrap.bundle.min.js'); ?>"></script>
  <!-- SB Admin 2 -->
  <script src="<?= base_url('assets/js/sb-admin-2.min.js'); ?>"></script>
  <!-- Select 2 -->
  <script src="<?= base_url('assets/select2/js/select2.min.js') ?>"></script>
  <!-- Toastr -->
  <script src="<?= base_url('assets/toastr/toastr.min.js'); ?>"></script>
  <!-- Sweet Alert 2 -->
  <script src="<?= base_url('assets/sweetalert2/sweetalert2.all.min.js'); ?>"></script>
  <!-- JQuery Validate -->
  <script src="<?= base_url('assets/jquery-validation/jquery.validate.min.js'); ?>"></script>
  <!-- JQuery UI -->
  <script src="<?= base_url('assets/jquery-ui/jquery-ui.min.js') ?>"></script>
  <!-- Date Picker -->
  <script src="<?= base_url('assets/datepicker/dist/js/bootstrap-datepicker.min.js'); ?>"></script>
  <!-- JS External -->
  <script defer src="<?= base_url('assets/js/script.js'); ?>"></script>
  <script defer src="<?= base_url('assets/js/custom.js'); ?>"></script>

  <script>
  $("#customerPenawaran").change(function () {
	if ($(this).val() == "newCustomer") {
		$('#modalCustomer').modal('show');
	}
});
    document.onreadystatechange = function() { 
            if (document.readyState !== "complete") { 
                document.querySelector( 
                  "body").style.visibility = "hidden"; 
                document.querySelector( 
                  ".loading-spinner").style.visibility = "visible"; 
            } else { 
                document.querySelector( 
                  ".loading-spinner").style.display = "none"; 
                document.querySelector( 
                  "body").style.visibility = "visible"; 
            } 
        };   
        
        var rp = document.getElementById('jumlahUang');
rp.addEventListener('keyup', function (e) {
	// tambahkan 'Rp.' pada saat form di ketik
	// gunakan fungsi formatRupiah() untuk mengubah angka yang di ketik menjadi format angka
	rp.value = formatRupiah(this.value, 'Rp. ');
});

/* Fungsi formatRupiah */
function formatRupiah(angka, prefix) {
	var number_string = angka.replace(/[^,\d]/g, '').toString(),
		split = number_string.split(','),
		sisa = split[0].length % 3,
		rp = split[0].substr(0, sisa),
		ribuan = split[0].substr(sisa).match(/\d{3}/gi);

	// tambahkan titik jika yang di input sudah menjadi angka ribuan
	if (ribuan) {
		separator = sisa ? '.' : '';
		rp += separator + ribuan.join('.');
	}

	rp = split[1] != undefined ? rp + ',' + split[1] : rp;
	return prefix == undefined ? rp : (rp ? 'Rp. ' + rp : '');
}
  </script>

</body>

</html>
