<div class="container-fluid">
<div class="card" style="border-top: 5px solid #4E73DF;">
  <div class="card-body">
    <h4 class="card-title">Customer</h4>
      <button type="button" class="btn btn-primary mt-3 mb-4 mr-2" data-toggle="modal" data-target="#addCustomer">
      <i class="fas fa-plus-square"></i>
        Tambah Customer
      </button>

        <div class="table-responsive">
        <table class="table table-hover" width="100%" cellspacing="0">
						<thead>
							<tr>
								<th>No</th>
								<th>Nama Lengkap</th>
								<th>Alamat</th>
								<th>No. HP</th>
								<th>Aksi</th>
							</tr>
						</thead>
						<tbody id="showCustomer">

						</tbody>
					</table>
        </div>
  </div>
</div>
</div>

<!-- Modal Tambah Customer -->
<div class="modal fade" id="addCustomer" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Tambah Customer</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="formCustomer">
        <div class="form-group">
        <label for="namaCustomer">Nama Lengkap</label>
        <input type="text" class="form-control" name="namaCustomer" id="namaCustomer" autocomplete="off" placeholder="Masukan nama lengkap">
        </div>
        <div class="form-group">
        <label for="alamat">Alamat</label>
        <input type="text" class="form-control" name="alamat" id="alamat" autocomplete="off" placeholder="Masukan alamat">
        </div>
        <div class="form-group">
        <label for="noHp">No. HP</label>
        <input type="text" class="form-control" name="noHp" id="noHp" autocomplete="off" placeholder="Masukan nomor handphone">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-info" data-dismiss="modal">Batal</button>
        <button type="submit" class="btn btn-primary" id="simpanCustomer">Simpan</button>
      </div>
      </form>
    </div>
  </div>
</div>

<!-- Modal Edit Customer -->
<div class="modal fade" id="editCustomer" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Edit Customer</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="formEditCustomer">
        <div class="form-group">
        <label for="editNamaCustomer">Nama Lengkap</label>
        <input type="hidden" class="form-control" name="id_customer" id="id_customer" autocomplete="off" placeholder="Masukan id customer">
        <input type="text" class="form-control" name="editNamaCustomer" id="editNamaCustomer" autocomplete="off" placeholder="Masukan nama lengkap">
        </div>
        <div class="form-group">
        <label for="editAlamat">Alamat</label>
        <input type="text" class="form-control" name="editAlamat" id="editAlamat" autocomplete="off" placeholder="Masukan alamat">
        </div>
        <div class="form-group">
        <label for="editNoHp">No. HP</label>
        <input type="text" class="form-control" name="editNoHp" id="editNoHp" autocomplete="off" placeholder="Masukan nomor handphone">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-info" data-dismiss="modal">Batal</button>
        <button type="submit" class="btn btn-primary" id="editCustomer">Simpan</button>
      </div>
      </form>
    </div>
  </div>
</div>