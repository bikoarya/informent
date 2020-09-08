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
            <h4 class="nomor">No : </h4>
            <hr class="no_line">
        </div>
        <div class="content">
            <h4 class="terima">Telah terima dari &nbsp;&nbsp;&nbsp; :</h4>
            <h4 class="sejumlah">Uang sejumlah &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</h4>
            <h4 class="untuk">Untuk Pembayaran &nbsp;: </h4>
            <hr style="margin-bottom: 0; margin-top: 60px">
            <h4 class="rupiah">Rp.</h4>
            <hr style="">
        </div>
            <h4 class="time">Malang, <?= date('Y-m-d') ?></h4>
            <h4 class="pj">Biko Arya Maulana</h4>
    </div>
</body>
</html>