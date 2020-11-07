<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cetak Invoice</title>
    <!-- Style CSS -->
    <link rel="stylesheet" href="<?= base_url('assets/css/style.css'); ?>">
</head>
<body>
    <div class="wrapper">
        <div class="logos">
            <img src="<?= base_url('assets/img/informent-logo.png') ?>" alt="Informent" width=300px class="lgo">
        </div>
        <div class="inv">
            <h3 class="invoice">INVOICE</h3>
            <div class="line-blue">
            </div>
            <h5 class="no-invoice">Invoice No : <?= $value['no_invoice']; ?></h5>
        </div>
        <div class="yth">
            <h5 class="cst-inv"><b>Yth</b> :</h5>
            <h5 class="cst-name"><?= $value['nama_customer']; ?></h5>
            <h5 class="cst-address"><?= $value['alamat']; ?></h5>
        </div>
        <div class="line-yellow"></div>

        <table class="table2">
            <tr>
                <th class="for" colspan="5">Untuk Pembayaran</th>
            </tr>
            <tr>
                <th class="no-inv">No</th>
                <th class="desc-inv">Description</th>
                <th class="price-inv">Price</th>
                <th class="qty-inv">Qty</th>
                <th class="total-inv">Total</th>
            </tr>
            <?php 
            $all = 0;
            foreach ($barang as $key => $value) : 
                $total = $value['harga']*$value['qty_invoice'];
            ?>
            <tr>
                <td class="no-val"><?= $key+1 ?></td>
                <td class="desc-val"><?= $value['nama_barang']; ?></td>
                <td class="price-val">Rp. <?= number_format($value['harga']); ?></td>
                <td class="qty-val"><?= $value['qty_invoice'] ?></td>
                <td class="total-val">Rp. <?= number_format($total); ?></td>
            </tr>
            <?php
                $all+=$total;
                $ppn = $all*10/100;
                $grandTotal = $all + $ppn;
            endforeach; ?>
            <tr>
                <td colspan="4" class="sub-tot">Sub Total</td>
                <td class="sub-val">Rp. <?= number_format($all); ?></td>
            </tr>
            <tr>
                <td class="ppn" colspan="4">PPN 10%</td>
                <td class="ppn-val">Rp. <?= number_format($ppn); ?></td>
            </tr>
            <tr>
                <td class="tot-inv" colspan="4">Total</td>
                <td class="tot-inv-val">Rp. <?= number_format($grandTotal); ?></td>
            </tr>
        </table>
        <div class="payment">
            <h5 class="pay-information">PAYMENT INFORMATION : </h5>
            <h5 class="bank-inv">Bank&emsp;&emsp; : <?= $value['nama_bank']; ?></h5>
            <h5 class="norek-inv">No. Rek&nbsp;&nbsp; : <?= $value['no_rekening']; ?></h5>
            <h5 class="an">An.&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : <?= $value['atas_nama']; ?></h5>
        </div>
        <div class="pj-inv">
            <h5 class="tgl-inv">Malang, <?= date('d M Y', strtotime($value['tanggal'])); ?></h5>
            <h5 class="inf-inv">CV. Informent</h5>
            <h5 class="pj-name-inv"><?= $value['nama_pj']; ?></h5>
        </div>
    </div>
</body>
</html>