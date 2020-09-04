<div class="container-fluid">
<div class="card" style="border-top: 5px solid #4E73DF;">
  <div class="card-body">
    <h4 class="card-title">Pengaturan Akun</h4>
      <button type="button" class="btn btn-primary mt-3 mb-4" data-toggle="modal" data-target="#addAkun">
      <i class="fas fa-plus-square"></i>
        Tambah Akun
      </button>

        <div class="table-responsive">
        <table class="table table-hover" width="100%" cellspacing="0" id="tabelRole">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Lengkap</th>
                <th>Username</th>
                <th>Role</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody id="showAkun">

            </tbody>
        </table>
        </div>
  </div>
</div>
</div>

<!-- Modal Tambah Akun -->
<div class="modal fade" id="addAkun" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Tambah Akun</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="formAkun">
        <div class="form-group">
        <label for="namaLengkap">Nama Lengkap</label>
        <input type="text" class="form-control" name="namaLengkap" id="namaLengkap" autocomplete="off" placeholder="Masukan nama lengkap">
        </div>
        <div class="form-group">
        <label for="username">Username</label>
        <input type="text" class="form-control" name="username" id="username" autocomplete="off" placeholder="Masukan username">
        </div>
        <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" name="password" id="password" autocomplete="off" placeholder="Masukan password">
        </div>
        <div class="form-group">
        <label for="password2">Konfirmasi Password</label>
        <input type="password" class="form-control" name="password2" id="password2" autocomplete="off" placeholder="Masukan konfirmasi password">
        </div>
        <div class="form-group">
        <label for="role">Role</label>
 				<select class="form-control role" name="role" id="role" style="width: 100%;">
 					<option value=""></option>
 						<?php foreach ($role as $lev) : ?>
 							<option value="<?= $lev['id_role']; ?>"><?= $lev['nama_role']; ?></option>
 						<?php endforeach; ?>
 				</select>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-info" data-dismiss="modal">Batal</button>
        <button type="submit" class="btn btn-primary" id="simpanAkun">Simpan</button>
      </div>
      </form>
    </div>
  </div>
</div>

<!-- Modal Edit Akun -->
<div class="modal fade" id="editAkun" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Edit Akun</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="formEditAkun">
        <input type="hidden" name="id_akun" id="id_akun">
        <div class="form-group">
        <label for="editNamaLengkap">Nama Lengkap</label>
        <input type="text" class="form-control" name="editNamaLengkap" id="editNamaLengkap" autocomplete="off" placeholder="Masukan nama lengkap">
        </div>
        <div class="form-group">
        <label for="editUsername">Username</label>
        <input type="text" class="form-control" name="editUsername" id="editUsername" autocomplete="off" placeholder="Masukan username">
        </div>
        <div class="form-group">
        <label for="newPassword">Password</label>
        <input type="hidden" class="form-control" name="oldPassword" id="oldPassword">
        <input type="password" class="form-control" name="newPassword" id="newPassword" autocomplete="off" placeholder="Masukkan Password Baru">
        <p class="text-danger mt-1">* Kosongkan password jika tidak ingin mengubah</p>
        </div>
        <div class="form-group">
        <label for="editPassword2">Konfirmasi Password</label>
        <input type="password" class="form-control" name="editPassword2" id="editPassword2" autocomplete="off" placeholder="Masukan konfirmasi password">
        </div>
        <div class="form-group">
        <label for="editRole">Role</label>
 				<select class="form-control role" name="editRole" id="editRole" autocomplete="off" style="width: 100%;">
 					<option value=""></option>
 						<?php foreach ($role as $lev) : ?>
 							<option value="<?= $lev['id_role']; ?>"><?= $lev['nama_role']; ?></option>
 						<?php endforeach; ?>
 				</select>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-info" data-dismiss="modal">Batal</button>
        <button type="submit" class="btn btn-primary" id="editAkun">Simpan</button>
      </div>
      </form>
    </div>
  </div>
</div>