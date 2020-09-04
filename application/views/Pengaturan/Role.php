<div class="container-fluid">
<div class="card" style="border-top: 5px solid #4E73DF;">
  <div class="card-body">
    <h4 class="card-title">Pengaturan Role</h4>
      <button type="button" class="btn btn-primary mt-3 mb-4" data-toggle="modal" data-target="#addRole">
      <i class="fas fa-plus-square"></i>
        Tambah Role
      </button>

        <div class="table-responsive">
        <table class="table table-hover" width="100%" cellspacing="0" id="tabelRole">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Role</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody id="showRole">

            </tbody>
        </table>
        </div>
  </div>
</div>
</div>

<!-- Modal Tambah Role -->
<div class="modal fade" id="addRole" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Tambah Role</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="formRole">
        <div class="form-group">
        <label for="namaRole">Nama Role</label>
        <input type="text" class="form-control" name="namaRole" id="namaRole" autocomplete="off" placeholder="Masukan nama role">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-info" data-dismiss="modal">Batal</button>
        <button type="submit" class="btn btn-primary" id="simpanRole">Simpan</button>
      </div>
      </form>
    </div>
  </div>
</div>

<!-- Modal Edit Role -->
<div class="modal fade" id="editRole" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Edit Role</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="formEditRole">
        <input type="hidden" name="id_role" id="id_role">
        <div class="form-group">
        <label for="editRole">Nama Role</label>
        <input type="text" class="form-control" name="editNamaRole" id="editNamaRole" autocomplete="off" placeholder="Masukan nama role">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-info" data-dismiss="modal">Batal</button>
        <button type="submit" class="btn btn-primary" id="editRole">Simpan</button>
      </div>
      </form>
    </div>
  </div>
</div>