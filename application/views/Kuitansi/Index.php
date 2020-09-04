<div class="container-fluid">
<div class="card" style="border-top: 5px solid #4E73DF;">
  <div class="card-body">
    <h4 class="card-title">Kuitansi</h4>
    <div class="box-right" style="position: absolute; margin-left: 1030px; background-color: #f7f7f7; padding: 40px 20px 34px 20px; margin-top: -25px; border: 1px solid black; border-radius: 5px">
        <h5 class="text-center font-weight-bold">Cetak Kuitansi</h5>
    </div>
    <form action="" method="POST">
  <div class="row mt-4">
  <div class="col-6">
    <label for="pj">Penanggung Jawab</label>
    <select class="form-control form-control-sm pj w-50" id="pj">
        <option></option>
        <option>Arsandi</option>
    </select>
    <div class="form-group mt-3">
    <label for="tujuanPembayaran">Pembayaran Untuk</label>
    <input type="text" class="form-control w-50" id="tujuanPembayaran" placeholder="Masukan tujuan pembayaran">
    </div>
    <div class="form-group mt-2">
    <label for="terima">Telah Menerima Dari</label>
    <input type="text" class="form-control w-50" id="terima" placeholder="Masukan nama perusahaan/individu">
    </div>
</div>
<div class="col-6">
    <div class="form-group mt-2">
    <label for="uang">Jumlah Uang</label>
    <input type="text" class="form-control w-50" id="uang" placeholder="(Rp.) Masukan nominal uang">
    </div>
    <div class="form-group mt-2">
    <label for="terbilang">Banyaknya Uang (Terbilang)</label>
    <input type="text" class="form-control w-50" id="terbilang" placeholder="Masukan banyaknya uang">
    </div>
</div>
</div>
<a href="javascript:void(0);" class="btn btn-primary mb-3" style="width: 80px; margin-left: 840px">Cetak</a>
    </form>
  </div>
</div>
</div>