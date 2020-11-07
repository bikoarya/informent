<div class="container-fluid">
<div class="card" style="border-top: 5px solid #4E73DF;">
  <div class="card-body" id="inv">
  <h4 class="card-title">Invoice</h4>
  <?= $this->session->flashdata('msg'); ?>
    <div class="containerz mt-4">
      <form id="formInvoice">
      <div class="row">
        <div class="col-6">
        <input type="hidden" name="id_brg" id="id_brg">
        <input type="hidden" name="kode_invoice" id="kode_invoice" value="<?= $this->model->kode_invoice(); ?>">
        <div class="form-group row">
              <label for="noInvoice" class="col-md-4 col-form-label">No. Invoice &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;: </label>
              <div class="col-md-8">
                <input type="text" class="form-control" autocomplete="off" name="noInvoice" id="noInvoice" placeholder="Masukan nomor invoice" value="<?= $this->session->userdata('no_invoice'); ?>" style="width: 270px">
              </div>
            </div>
            <div class="form-group row">
              <label for="hal" class="col-md-4 col-form-label">Customer &emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;: </label>
              <div class="col-md-8">
              <select class="form-control custInvoice" name="custInvoice" id="custInvoice" autocomplete="off" style="width: 270px;">
 					      <option value=""></option>
                 <?php foreach ($customer as $cust) : ?>
                  <?php if ($this->session->userdata('id_customer') == $cust['id_customer']) { ?>
               <option value="<?= $cust['id_customer']; ?>" selected><?= $cust['nama_customer']; ?></option>
               <?php }else { ?>
                <option value="<?= $cust['id_customer']; ?>"><?= $cust['nama_customer']; ?></option>
               <?php } ?>
 						<?php endforeach; ?>
 				      </select>
              </div>
              </div>
        </div>
        <div class="col-6">
        <div class="form-group row">
              <label for="tglInvoice" class="col-md-5 col-form-label">Tanggal &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </label>
              <div class="col-md-7">
              <input type="text" class="form-control" data-date-format="dd M yyyy" autocomplete="off" name="tglInvoice" id="tglInvoice" placeholder="Masukan tanggal" style="width: 200px" value="<?= $this->session->userdata('tanggal'); ?>">
              </div>
            </div>
            <div class="form-group row">
              <label for="bankInvoice" class="col-md-5 col-form-label">Bank &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </label>
              <div class="col-md-7">
              <select class="form-control bank" name="bankInvoice" id="bankInvoice" autocomplete="off" style="width: 270px;">
 					      <option value=""></option>
                 <?php foreach ($bank as $bnk) : ?>
                  <?php if ($this->session->userdata('id_rekening') == $bnk['id_rekening']) { ?>
               <option value="<?= $bnk['id_rekening']; ?>" selected><?= $bnk['nama_bank']; ?></option>
               <?php }else { ?>
                <option value="<?= $bnk['id_rekening']; ?>"><?= $bnk['nama_bank']; ?></option>
               <?php } ?>
 						<?php endforeach; ?>
 				      </select>
              </div>
              </div>
        <div class="form-group row">
              <label for="pjInvoice" class="col-md-5 col-form-label">Penanggung Jawab &emsp;&emsp;&nbsp;&nbsp;: </label>
              <div class="col-md-7">
              <select class="form-control pjInvoice" name="pjInvoice" id="pjInvoice" autocomplete="off" style="width: 270px;">
 					      <option value=""></option>
                 <?php foreach ($pjs as $pj) : ?>
                  <?php if ($this->session->userdata('id_pj') == $pj['id_pj']) { ?>
               <option value="<?= $pj['id_pj']; ?>" selected><?= $pj['nama_pj']; ?></option>
               <?php }else { ?>
                <option value="<?= $pj['id_pj']; ?>"><?= $pj['nama_pj']; ?></option>
               <?php } ?>
 						<?php endforeach; ?>
 				      </select>
              </div>
              </div>
        </div>
      </div>
    </div>
      <button type="button" class="btn btn-primary mt-3 mb-4 mr-2" data-toggle="modal" data-target="#addInvoice">
      <i class="fas fa-plus-square"></i>
        Tambah Barang
      </button>
      <button type="button" class="btn btn-info mt-3 mb-4" data-toggle="modal" data-target="#cariBrg">
      <i class="fas fa-search"></i>
        Cari Barang
      </button>

        <div class="table-responsive">
        <table class="table table-hover" width="100%" cellspacing="0" id="tabelRole">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Barang</th>
                <th>Deskripsi</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody id="showCartInvoice">

            </tbody>
            <tfoot>
              <tr>
                <th colspan="6" class="text-center">TOTAL</th>
                <th id="totalInv"></th>
              </tr>
            </tfoot>
        </table>
        </div>
        <div class="invc mt-2 text-center">
        <button class="btn btn-primary" id="cetakInvoice"><i class="fas fa-print"></i> Cetak</button>
        </div>
        </form>
  </div>
</div>
</div>

<!-- Modal tambah barang -->
<div class="modal fade" id="addInvoice" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Tambah Barang</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="formBrg">
        <div class="form-group">
        <label for="namaBrg">Nama Barang</label>
        <input type="text" class="form-control" name="namaBrg" id="namaBrg" autocomplete="off" placeholder="Masukan nama barang">
        </div>
        <div class="form-group">
        <label for="deskripsi">Deskripsi</label>
        <textarea name="deskripsi" id="deskripsi" cols="50" rows="3" style="border: 1px solid gray" class="textarea"></textarea>
        </div>
        <div class="form-group">
        <label for="satuanInv">Satuan</label>
        <select class="form-control satuanInv" name="satuanInv" id="satuanInv" autocomplete="off" style="width: 100%;">
 					<option value=""></option>
 						<?php foreach ($satuan as $stn) : ?>
 							<option value="<?= $stn['nama_satuan']; ?>"><?= $stn['nama_satuan']; ?></option>
 						<?php endforeach; ?>
 				</select>
        </div>
        <div class="form-group">
        <label for="hargaInv">Harga</label>
        <input type="text" class="form-control" name="hargaInv" id="hargaInv" autocomplete="off" placeholder="(Rp.) Masukan harga">
        </div>
        <div class="form-group w-50">
        <label for="qtyInv">Jumlah</label>
        <input type="number" class="form-control" name="qtyInv" id="qtyInv" autocomplete="off" placeholder="Masukan jumlah">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-info" data-dismiss="modal">Batal</button>
        <button type="submit" class="btn btn-primary" id="simpanBrg">Simpan</button>
      </div>
      </form>
    </div>
  </div>
</div>

<!-- Modal Cari Barang -->
<div class="modal fade" id="cariBrg" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle"><i class="fas fa-search"></i> Cari Barang</h5>
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
								<th>Harga</th>
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
                <td><a href="javascript:void(0);"><i class="far fa-plus-square addBrg" data-id_brg="<?= $brg['id_barang'] ?>" data-nama_brg="<?= $brg['nama_barang'] ?>" data-deskripsi="<?= $brg['spesifikasi'] ?>" data-stn="<?= $brg['nama_satuan'] ?>" data-hrg="<?= $brg['harga'] ?>" data-qtyi="<?= $brg['qty'] ?>" data-placement="bottom" title="Tambah" style="font-size: 22px"></i></a></td>
              </tr>
              <?php endforeach; ?>
						</tbody>
					</table>
        </div>
    </div>
  </div>
</div>