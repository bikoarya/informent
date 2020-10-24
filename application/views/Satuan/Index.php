<div class="container-fluid">
<div class="card" style="border-top: 5px solid #4E73DF;">
  <div class="card-body">
    <h4 class="card-title">Satuan</h4>
      <button type="button" class="btn btn-primary mt-3 mb-4" data-toggle="modal" data-target="#addSatuan">
      <i class="fas fa-plus-square"></i>
        Tambah Satuan
      </button>

        <div class="table-responsive">
        <table class="table table-hover" width="100%" cellspacing="0" id="tabelRole">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Satuan</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody id="showSatuan">

            </tbody>
        </table>
        </div>
  </div>
</div>
</div>

<!-- Modal Tambah Role -->
<div class="modal fade" id="addSatuan" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Tambah Satuan</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="formSatuan">
        <div class="form-group">
        <label for="namaSatuan">Nama Satuan</label>
        <input type="text" class="form-control" name="namaSatuan" id="namaSatuan" autocomplete="off" placeholder="Masukan nama satuan">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-info" data-dismiss="modal">Batal</button>
        <button type="submit" class="btn btn-primary" id="simpanSatuan">Simpan</button>
      </div>
      </form>
    </div>
  </div>
</div>

<!-- Modal Edit Satuan -->
<div class="modal fade" id="editSatuan" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Edit Satuan</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="formEditSatuan">
        <input type="hidden" name="id_satuan" id="id_satuan">
        <div class="form-group">
        <label for="editRole">Nama Satuan</label>
        <input type="text" class="form-control" name="editNamaSatuan" id="editNamaSatuan" autocomplete="off" placeholder="Masukan nama satuan">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-info" data-dismiss="modal">Batal</button>
        <button type="submit" class="btn btn-primary" id="editSatuan">Simpan</button>
      </div>
      </form>
    </div>
  </div>
</div>