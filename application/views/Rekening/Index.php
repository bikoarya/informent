<div class="container-fluid">
<div class="card" style="border-top: 5px solid #4E73DF;">
  <div class="card-body">
    <h4 class="card-title">Rekening</h4>
      <button type="button" class="btn btn-primary mt-3" data-toggle="modal" data-target="#exampleModalCenter">
      <i class="fas fa-plus-square"></i>
        Tambah Rekening
      </button>
  </div>
</div>
</div>

<!-- Modal Tambah Rekening -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Tambah Rekening</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form action="" method="POST">
        <div class="form-group">
        <label for="namaBank">Nama Bank</label>
        <input type="text" class="form-control" name="namaBank" id="namaBank" placeholder="Masukan nama bank">
        </div>
        <div class="form-group">
        <label for="norek">Nomor Rekening</label>
        <input type="text" class="form-control" name="norek" id="norek" placeholder="Masukan nomor rekening">
        </div>
        <div class="form-group">
        <label for="atasNama">Atas Nama</label>
        <input type="text" class="form-control" name="atasNama" id="atasNama" placeholder="Masukan atas nama">
        </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-info" data-dismiss="modal">Batal</button>
        <button type="button" class="btn btn-primary">Simpan</button>
      </div>
    </div>
  </div>
</div>