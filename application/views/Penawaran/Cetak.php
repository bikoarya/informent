<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cetak Penawaran</title>
    <!-- Style CSS -->
    <link rel="stylesheet" href="<?= base_url('assets/css/style.css'); ?>">
</head>
<body>
    <div class="wrapper">
        <div class="logo">
            <img src="assets/img/informent-logo.png" alt="Informent" class="inf-logo">
        </div>
        <div class="header2">
            <h6 class="kepada">Kepada Yth &nbsp;&nbsp;&nbsp; : </h6>
            <h6 class="tertuju"><?= $value['nama_customer']; ?> <br>
                <?= $value['alamat']; ?>
            </h6>
            <h6 class="noPenawaran">No &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;:&nbsp; <?= $value['no_penawaran']; ?></h6>
            <h6 class="date">Date&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; <?= date('d M Y', strtotime($value['date'])); ?></h6>
            <h6 class="periode">Validity Period &ensp;&emsp;:&nbsp; <?= $value['periode'] ?> days</h6>
            <h6 class="hal">Hal &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; <?= $value['hal']; ?></h6>
        </div>
        <div class="content">
            <table class="tabel">
                <tr>
                    <th colspan="7" class="hargaPenawaran">Harga Penawaran</th>
                </tr>
                <tr>
                    <th class="no">No</th>
                    <th class="jenis">Jenis</th>
                    <th class="spek">Specification</th>
                    <th class="uni">Uni</th>
                    <th class="qty">Qty</th>
                    <th class="harga">@ Harga</th>
                    <th class="total">Total</th>
                </tr>
                <?php 
                    $no = 1;
                    $all = 0;
                    foreach ($barang as $key => $items) : 
                    $tot = $items['harga'] * $items['qty_penawaran'];
                    ?>
                <tr>                    
                    <td class="noo"><?= $no++ ?></td>
                    <td class="jns"><?= $items['nama_barang']; ?></td>
                    <td class="spk"><?= $items['spesifikasi']; ?></td>
                    <td class="satuan"><?= $items['nama_satuan']; ?></td>
                    <td class="jml"><?= $items['qty_penawaran'] ?></td>
                    <td class="hrg">Rp. <?= number_format($items['harga']) ?></td>
                    <td class="tot">Rp. <?= number_format($tot) ?></td>
                </tr>
                    <?php
                        $all+=$tot;
                    endforeach; ?>
                <tr>
                    <td colspan="3" class="colspan"></td>
                    <td class="blank1"></td>
                    <td class="blank2"></td>
                    <td class="blank3"></td>
                    <td class="fulltotal"><b>Rp. <?= number_format($all); ?></b></td>
                </tr>
            </table>
        </div>
        <div class="footer">
            <h6 class="tgl">Malang, <?= date('d M Y', strtotime($value['date'])); ?></h6>
            <h6 class="cv">CV. Informent</h6>
            <h6 class="name"><?= $value['nama_pj'] ?></h6>
        </div>
    </div>
</body>
</html>