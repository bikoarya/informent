<div class="container-fluid">
<div class="card" style="border-top: 5px solid #4E73DF;">
  <div class="card-body">
    <h4 class="card-title">Penawaran</h4>
      <div class="head mt-4">
        <form id="formPenawaran">
          <div class="row mb-5">
            <div class="col-md-6">
              <input type="hidden" name="kodePenawaran" id="kodePenawaran" autocomplete="off" value="<?= $this->model->kodePenawaran(); ?>">
              <input type="hidden" name="id_barang" id="id_barang" placeholder="ID Barang">
            <div class="form-group row">
              <label for="customer" class="col-md-4 col-form-label">Customer&emsp;&emsp;&emsp;&emsp;&emsp;: </label>
              <div class="col-md-8">
              <select class="form-control customer" name="customerPenawaran" id="customerPenawaran" autocomplete="off" style="width: 270px;">
 					      <option value=""></option>
 					      <option value="newCustomer" id="cok">Customer Baru</option>
                 <?php foreach($customer as $cst) : ?>
                    <option value="<?= $cst['id_customer'] ?>"><?= $cst['nama_customer']; ?></option>
                 <?php endforeach; ?>
 				      </select>
              </div>
            </div>
            <div class="form-group row">
              <label for="noPenawaran" class="col-md-4 col-form-label">No. Penawaran &emsp;&emsp; : </label>
              <div class="col-md-8">
                <input type="text" class="form-control" autocomplete="off" name="noPenawaran" id="noPenawaran" placeholder="Masukan nomor penawaran" style="width: 270px">
              </div>
            </div>
            <div class="form-group row">
              <label for="tglPenawaran" class="col-md-4 col-form-label">Tanggal &emsp;&emsp;&emsp;&emsp;&emsp; : </label>
              <div class="col-md-8">
                <input type="text" class="form-control" data-date-format="dd-mm-yyyy" autocomplete="off" name="tglPenawaran" id="tglPenawaran" placeholder="Masukan tanggal" style="width: 200px">
              </div>
            </div>
            </div>
            <div class="col-md-6">
            <div class="form-group row">
              <label for="periode" class="col-md-5 col-form-label">Periode &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp; : </label>
              <div class="col-md-7">
                <input type="text" class="form-control" autocomplete="off" name="periode" id="periode" placeholder="Batas periode (hari)" style="width: 200px">
              </div>
            </div>
            <div class="form-group row">
              <label for="hal" class="col-md-5 col-form-label">Hal&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </label>
              <div class="col-md-7">
                <input type="text" class="form-control" autocomplete="off" name="hal" id="hal" placeholder="Masukan hal" style="width: 270px">
              </div>
            </div>
            <div class="form-group row">
              <label for="hal" class="col-md-5 col-form-label">Penanggung Jawab &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;: </label>
              <div class="col-md-7">
              <select class="form-control pjPenawaran" name="pjPenawaran" id="pjPenawaran" autocomplete="off" style="width: 270px;">
 					      <option value=""></option>
 						      <?php foreach ($penanggungjawab as $pj) : ?>
 							      <option value="<?= $pj['id_pj']; ?>"><?= $pj['nama_pj']; ?></option>
 						      <?php endforeach; ?>
 				      </select>
              </div>
            </div>
            </div>
          </div>
        
      </div>
      <button type="button" class="btn btn-primary mt-3 mb-4 mr-2" data-toggle="modal" data-target="#addBarang">
      <i class="fas fa-plus-square"></i>
        Tambah Barang
      </button>
      <button type="button" class="btn btn-info mt-3 mb-4" data-toggle="modal" data-target="#cariBarang">
      <i class="fas fa-search"></i>
        Cari Barang
      </button>

        <div class="table-responsive">
        <table class="table table-hover" width="100%" cellspacing="0">
						<thead>
							<tr>
								<th>No</th>
								<th>Nama Barang</th>
								<th>Spesifikasi</th>
								<th>Satuan</th>
								<!-- <th>Bagian</th> -->
								<th>Harga</th>
								<th>Jumlah</th>
								<th>Total</th>
								<th>Aksi</th>
							</tr>
						</thead>
						<tbody id="showCart">
						</tbody>
            <tfoot>
              <tr>
                <th colspan="7" class="text-center">TOTAL</th>
                <th id="grandTotal"></th>
              </tr>
            </tfoot>
					</table>
        </div>
        <div class="pwr mt-2">
        <button class="btn btn-primary" id="cetakPenawaran"><i class="fas fa-print"></i> Cetak</button>
        <!-- <a href="<?= site_url('Penawaran/Cetak') ?>">Cetak</a> -->
        </div>
        </form>
  </div>
</div>
</div>

<!-- Modal Tambah Barang -->
<div class="modal fade" id="addBarang" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Tambah Barang</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="formBarang">
        <div class="form-group">
        <label for="namaBarang">Nama Barang</label>
        <input type="text" class="form-control" name="namaBarang" id="namaBarang" autocomplete="off" placeholder="Masukan nama barang">
        </div>
        <div class="form-group">
        <label for="spesifikasi">Spesifikasi</label>
        <textarea name="spesifikasi" id="spesifikasi" cols="50" rows="3" style="border: 1px solid gray" class="textarea"></textarea>
        </div>
        <div class="form-group">
        <label for="satuan">Satuan</label>
        <select class="form-control satuan" name="satuan" id="satuan" autocomplete="off" style="width: 100%;">
 					<option value=""></option>
 						<?php foreach ($satuan as $stn) : ?>
 							<option value="<?= $stn['nama_satuan']; ?>"><?= $stn['nama_satuan']; ?></option>
 						<?php endforeach; ?>
 				</select>
        </div>
        <!-- <div class="form-group">
        <label for="bagian">Bagian</label>
        <input type="text" class="form-control" name="bagian" id="bagian" autocomplete="off" placeholder="Masukan bagian">
        </div> -->
        <div class="form-group">
        <label for="harga">Harga</label>
        <input type="text" class="form-control" name="harga" id="harga" autocomplete="off" placeholder="(Rp.) Masukan harga">
        </div>
        <div class="form-group w-50">
        <label for="qty">Jumlah</label>
        <input type="number" class="form-control" name="qty" id="qty" autocomplete="off" placeholder="Masukan jumlah">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-info" data-dismiss="modal">Batal</button>
        <button type="submit" class="btn btn-primary" id="simpanBarang">Simpan</button>
      </div>
      </form>
    </div>
  </div>
</div>

<!-- Modal Tambah Customer -->
<div class="modal fade" id="modalCustomer" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Tambah Customer</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="formCust">
        <div class="form-group">
        <label for="namaCust">Nama Lengkap</label>
        <input type="text" class="form-control" name="namaCust" id="namaCust" autocomplete="off" placeholder="Masukan nama lengkap">
        </div>
        <div class="form-group">
        <label for="alamatCust">Alamat</label>
        <input type="text" class="form-control" name="alamatCust" id="alamatCust" autocomplete="off" placeholder="Masukan alamat">
        </div>
        <div class="form-group">
        <label for="hpCust">No. HP</label>
        <input type="text" class="form-control" name="hpCust" id="hpCust" autocomplete="off" placeholder="Masukan nomor handphone">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-info" data-dismiss="modal">Batal</button>
        <button type="submit" class="btn btn-primary" id="simpanCust">Simpan</button>
      </div>
      </form>
    </div>
  </div>
</div>

<!-- Modal Cari Barang -->
<div class="modal fade" id="cariBarang" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Cari Barang</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div class="table-responsive">
        <table class="table table-hover mt-4" width="100%" cellspacing="0">
						<thead>
							<tr>
								<th>No</th>
								<th>Nama Barang</th>
								<th>Spesifikasi</th>
								<th>Satuan</th>
								<!-- <th>Bagian</th> -->
								<th>Harga</th>
								<!-- <th>Jumlah</th> -->
								<!-- <th>Total</th> -->
								<th>Aksi</th>
							</tr>
						</thead>
						<tbody>
              <?php foreach ($barang as $key => $brg) : 
                $grand_total = $brg['harga']  * $brg['qty']; ?>
              <tr>
                <td><?= $key + 1 ?></td>
                <td><?= $brg['nama_barang']; ?></td>
                <td><?= $brg['spesifikasi']; ?></td>
                <td><?= $brg['nama_satuan']; ?></td>
                <td>Rp. <?= number_format($brg['harga']); ?></td>
                <!-- <td><?= $brg['qty']; ?></td> -->
                <!-- <td><?= number_format($grand_total); ?></td> -->
                <td><a href="javascript:void(0);"><i class="far fa-plus-square barang" data-id_barang="<?= $brg['id_barang'] ?>" data-nama_barang="<?= $brg['nama_barang'] ?>" data-spesifikasi="<?= $brg['spesifikasi'] ?>" data-satuan="<?= $brg['nama_satuan'] ?>" data-harga="<?= $brg['harga'] ?>" data-qty="<?= $brg['qty'] ?>" data-placement="bottom" title="Tambah" style="font-size: 22px"></i></a></td>
              </tr>
              <?php endforeach; ?>
						</tbody>
					</table>
        </div>
    </div>
  </div>
</div>