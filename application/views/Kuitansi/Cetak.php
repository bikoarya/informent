<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cetak Kuitansi</title>
    <!-- Style CSS -->
    <link rel="stylesheet" href="<?= base_url('assets/css/style.css'); ?>">
</head>
<body>
    <div class="wrapper">
        <img src="<?= base_url('assets/img/informent.png') ?>" class="img-logo" alt="Informent">
        <div class="text">
            <h3 class="header">INFORMENT</h3>
            <h5 class="sub-header">Innovation & Technology</h5>
        </div>
        <div class="right">
            <h4 class="nomor">No : <?= $value['no_kuitansi'] ?></h4>
            <hr class="no_line">
        </div>
        <div class="content">
            <h4 class="terima">Telah terima dari &nbsp;&nbsp;&nbsp; : <?= $value['terima_dari']; ?></h4>
            <h4 class="sejumlah">Uang sejumlah &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <?= ucwords(($this->model->terbilang($value['jumlah_uang']))); ?> Rupiah</h4>
            <h4 class="untuk">Untuk Pembayaran &nbsp;: <?= $value['guna_pembayaran'] ?> </h4>
        </div>
        <div class="haer">
        <hr style="margin-bottom: 0; margin-top: 60px">
        <h4 class="rupiah" style="font-weight: bold">Rp. <?= number_format($value['jumlah_uang']); ?></h4>
        <hr style="">
        </div>
            <h4 class="time">Malang, <?= date('d M Y', strtotime($value['tanggal_kuitansi'])) ?></h4>
            <h4 class="pj"><?= $value['nama_pj']; ?>
    </div>
</body>
</html>