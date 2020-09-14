<div class="container-fluid">
<div class="card" style="border-top: 5px solid #4E73DF;">
  <div class="card-body">
    <h4 class="card-title">Kuitansi</h4>
      <button type="button" class="btn btn-primary mt-3 mb-4" data-toggle="modal" data-target="#addKuitansi">
      <i class="fas fa-plus-square"></i>
        Cetak Kuitansi
      </button>

        <div class="table-responsive">
        <table class="table table-hover" width="100%" cellspacing="0" id="tabelRole">
            <thead>
              <tr>
                <th>No</th>
                <th>Nomor Kuitansi</th>
                <th>Tanggal</th>
                <th>Jumlah Uang</th>
                <th>Guna Pembayaran</th>
                <th>Terima Dari</th>
                <th>Penanggung Jawab</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody id="showKuitansi">

            </tbody>
        </table>
        </div>
  </div>
</div>
</div>

<!-- Modal Tambah Kuitansi -->
<div class="modal fade" id="addKuitansi" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Cetak Kuitansi</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="formKuitansi">
        <div class="form-group">
        <input type="hidden" name="kodeKuitansi" id="kodeKuitansi" placeholder="Kode Kuitansi" value="<?= $this->model->kode_kuitansi(); ?>">
        <label for="noKuitansi">No. Kuitansi</label>
        <input type="text" class="form-control" name="noKuitansi" id="noKuitansi" autocomplete="off" placeholder="Masukan nomor kuitansi">
        </div>
        <div class="form-group">
        <label for="tglKuitansi">Tanggal</label>
        <input type="text" class="form-control tglKuitansi" name="tglKuitansi" id="tglKuitansi" autocomplete="off" placeholder="Masukan tanggal">
        </div>
        <div class="form-group">
        <label for="jumlahUang">Jumlah Uang</label>
        <input type="text" class="form-control" name="jumlahUang" id="jumlahUang" autocomplete="off" placeholder="(Rp.) Masukan jumlah uang">
        </div>
        <div class="form-group">
        <label for="gunaPembayaran">Guna Pembayaran</label>
        <input type="text" class="form-control" name="gunaPembayaran" id="gunaPembayaran" autocomplete="off" placeholder="Masukan guna pembayaran">
        </div>
        <div class="form-group">
        <label for="terimaDari">Telah Terima Dari</label>
        <input type="text" class="form-control" name="terimaDari" id="terimaDari" autocomplete="off" placeholder="Masukan telah menerima dari">
        </div>
        <div class="form-group">
        <label for="pjKuitansi">Penanggung Jawab</label>
 				<select class="form-control pjKuitansi" name="pjKuitansi" id="pjKuitansi" autocomplete="off" style="width: 100%;">
 					<option value=""></option>
 						<?php foreach ($penanggungjawab as $pj) : ?>
 							<option value="<?= $pj['id_pj']; ?>"><?= $pj['nama_pj']; ?></option>
 						<?php endforeach; ?>
 				</select>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-info" data-dismiss="modal">Batal</button>
        <button type="submit" class="btn btn-primary" id="simpanKuitansi">Cetak</button>
      </div>
      </form>
    </div>
  </div>
</div>