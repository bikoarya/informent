<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title><?= $title; ?></title>

  <style>
    .img img[src=""] {
      display:none;
    }
    #img-preview
    {
      margin-left:50px;
      position: absolute;
      margin-top: -64px;
    }
  </style>
  <!-- Font Awesome -->
  <link href="<?= base_url('assets/vendor/fontawesome-free/css/all.min.css'); ?>" rel="stylesheet" type="text/css">
  <!-- SB Admin 2 -->
  <link href="<?= base_url('assets/css/sb-admin-2.min.css'); ?>" rel="stylesheet">
  <!-- Bootstrap 4 -->
  <link rel="stylesheet" href="<?= base_url('assets/bootstrap/css/bootstrap.min.css'); ?>">
  <!-- Data Tables -->
  <link rel="stylesheet" href="<?= base_url('assets/vendor/datatables/dataTables.bootstrap4.css'); ?>">
  <!-- Select 2 -->
  <link rel="stylesheet" href="<?= base_url('assets/select2/css/select2.min.css'); ?>">
  <link rel="stylesheet" href="<?= base_url('assets/select2/css/select2-bootstrap4.min.css'); ?>">
  <!-- Toastr -->
  <link rel="stylesheet" href="<?= base_url('assets/toastr/toastr.min.css'); ?>">
  <!-- Sweet Alert 2 -->
  <link rel="stylesheet" href="<?= base_url('assets/sweetalert2/sweetalert2.min.css'); ?>">
  <!-- JQuery UI -->
  <link rel="stylesheet" href="<?= base_url('assets/jquery-ui/jquery-ui.min.css'); ?>">
  <!-- Date Picker -->
  <link rel="stylesheet" href="<?= base_url('assets/datepicker/dist/css/bootstrap-datepicker.min.css'); ?>">
  <!-- Style CSS -->
  <link rel="stylesheet" href="<?= base_url('assets/css/style.css'); ?>">

  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap" rel="stylesheet">

  <script defer type="text/javascript">
		var base_url = '<?= base_url() ?>';
		var site_url = '<?= site_url() ?>';
	</script>
  
</head>

<body id="page-top">
<div class="loading-spinner"></div>