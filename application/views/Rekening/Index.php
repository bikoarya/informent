<div class="container-fluid">
<div class="card" style="border-top: 5px solid #4E73DF;">
  <div class="card-body">
    <h4 class="card-title">Rekening</h4>
      <button type="button" class="btn btn-primary mt-3 mb-4" data-toggle="modal" data-target="#addRekening">
      <i class="fas fa-plus-square"></i>
        Tambah Rekening
      </button>

      <div class="table-responsive">
        <table class="table table-hover" width="100%" cellspacing="0" id="tabelRole">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Bank</th>
                <th>Nomor Rekening</th>
                <th>Atas Nama</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody id="showRekening">

            </tbody>
        </table>
        </div>
  </div>
</div>
</div>

<!-- Modal Tambah Rekening -->
<div class="modal fade" id="addRekening" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Tambah Rekening</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="formRekening">
        <div class="form-group">
        <label for="namaBank">Nama Bank</label>
        <input type="text" class="form-control" name="namaBank" id="namaBank" autocomplete="off" placeholder="Masukan nama bank">
        </div>
        <div class="form-group">
        <label for="norek">Nomor Rekening</label>
        <input type="text" class="form-control" name="norek" id="norek" autocomplete="off" placeholder="Masukan nomor rekening">
        </div>
        <div class="form-group">
        <label for="atasNama">Atas Nama</label>
        <input type="text" class="form-control" name="atasNama" id="atasNama" autocomplete="off" placeholder="Masukan atas nama">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-info" data-dismiss="modal">Batal</button>
        <button type="submit" class="btn btn-primary" id="simpanRekening">Simpan</button>
      </div>
      </form>
    </div>
  </div>
</div>

<!-- Modal Edit Rekening -->
<div class="modal fade" id="editRekening" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Edit Rekening</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="formEditRekening">
        <input type="hidden" name="id_rekening" id="id_rekening">
        <div class="form-group">
        <label for="editNamaBank">Nama Bank</label>
        <input type="text" class="form-control" name="editNamaBank" id="editNamaBank" autocomplete="off" placeholder="Masukan nama bank">
        </div>
        <div class="form-group">
        <label for="editNorek">Nomor Rekening</label>
        <input type="text" class="form-control" name="editNorek" id="editNorek" autocomplete="off" placeholder="Masukan nomor rekening">
        </div>
        <div class="form-group">
        <label for="editAtasNama">Atas Nama</label>
        <input type="text" class="form-control" name="editAtasNama" id="editAtasNama" autocomplete="off" placeholder="Masukan atas nama">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-info" data-dismiss="modal">Batal</button>
        <button type="submit" class="btn btn-primary" id="editRekening">Simpan</button>
      </div>
      </form>
    </div>
  </div>
</div>