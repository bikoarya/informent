<div class="container-fluid">
<div class="card" style="border-top: 5px solid #4E73DF;">
  <div class="card-body">
    <h4 class="card-title">Penanggung Jawab</h4>
      <button type="button" class="btn btn-primary mt-3 mb-4" data-toggle="modal" data-target="#addPj">
      <i class="fas fa-plus-square"></i>
        Tambah Penanggung Jawab
      </button>

      <div class="table-responsive">
        <table class="table table-hover" width="100%" cellspacing="0" id="tabelRole">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Lengkap</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody id="showPj">

            </tbody>
        </table>
        </div>
  </div>
</div>
</div>

<!-- Modal Tambah Penanggung Jawab -->
<div class="modal fade" id="addPj" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Tambah Penanggung Jawab</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="formPj">
        <div class="form-group">
        <label for="namaPj">Nama Lengkap</label>
        <input type="text" class="form-control" name="namaPj" id="namaPj" autocomplete="off" placeholder="Masukan nama lengkap">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-info" data-dismiss="modal">Batal</button>
        <button type="submit" class="btn btn-primary" id="simpanPj">Simpan</button>
      </div>
      </form>
    </div>
  </div>
</div>

<!-- Modal Edit Penanggung Jawab -->
<div class="modal fade" id="editPj" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Edit Penanggung Jawab</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="formEditPj">
		<input type="hidden" name="id_pj" id="id_pj">
        <div class="form-group">
        <label for="editNamaPj">Nama Lengkap</label>
        <input type="text" class="form-control" name="editNamaPj" id="editNamaPj" autocomplete="off" placeholder="Masukan nama lengkap">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-info" data-dismiss="modal">Batal</button>
        <button type="submit" class="btn btn-primary" id="editPj">Simpan</button>
      </div>
      </form>
    </div>
  </div>
</div>