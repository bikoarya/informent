<!-- Page Wrapper -->
<div id="wrapper">

<!-- Sidebar -->
<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

  <!-- Sidebar - Brand -->
  <a class="sidebar-brand d-flex align-items-center justify-content-center" href="<?= site_url('Dashboard'); ?>">
    <div class="sidebar-brand-text mx-2" style="font-family: 'Roboto', sans-serif; font-size: 24px; letter-spacing: 4px; font-weight: 700">INFORMENT</div>
  </a>

  <!-- Divider -->
  <hr class="sidebar-divider my-0">

  <!-- Nav Item - Dashboard -->
  <li class="nav-item active">
    <a class="nav-link" href="<?= site_url('Dashboard'); ?>">
      <i class="fas fa-fw fa-tachometer-alt"></i>
      <span>Dashboard</span></a>
  </li>

  <!-- Divider -->
  <hr class="sidebar-divider">

  <!-- Heading -->
  <div class="sidebar-heading">
    Menu
  </div>

  <!-- Nav Item - Utilities Collapse Menu -->
  <li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
    <i class="far fa-question-circle"></i>
      <span>Master</span>
    </a>
    <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
      <div class="bg-white py-2 collapse-inner rounded">
        <h6 class="collapse-header">Sub Menu:</h6>
        <a class="collapse-item" href="<?= site_url('Master/Satuan'); ?>">Satuan</a>
        <a class="collapse-item" href="<?= site_url('Master/Rekening'); ?>">Rekening</a>
        <a class="collapse-item" href="<?= site_url('Master/Customer'); ?>">Customer</a>
        <a class="collapse-item" href="<?= site_url('Master/PenanggungJawab'); ?>">Penanggung Jawab</a>
      </div>
    </div>
  </li>

<!-- Nav Item - Tables -->
  <li class="nav-item">
    <a class="nav-link" href="<?= site_url('Penawaran'); ?>">
    <i class="fas fa-comments-dollar"></i>
      <span>Penawaran</span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="<?= site_url('Invoice'); ?>">
    <i class="fas fa-coins"></i>
      <span>Invoice</span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="<?= site_url('Kuitansi'); ?>">
    <i class="fas fa-wallet"></i>
      <span>Kuitansi</span></a>
  </li>


  <li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
      <i class="fas fa-fw fa-cog"></i>
      <span>Pengaturan</span>
    </a>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
      <div class="bg-white py-2 collapse-inner rounded">
        <h6 class="collapse-header">Sub Menu:</h6>
        <a class="collapse-item" href="<?= site_url('Pengaturan/Akun'); ?>">Akun</a>
        <a class="collapse-item" href="<?= site_url('Pengaturan/Role'); ?>">Role</a>
      </div>
    </div>
  </li>

  <!-- Divider -->
  <hr class="sidebar-divider d-none d-md-block">

  <!-- Sidebar Toggler (Sidebar) -->
  <div class="text-center d-none d-md-inline">
    <button class="rounded-circle border-0" id="sidebarToggle"></button>
  </div>

</ul>
<!-- End of Sidebar -->

<!-- Content Wrapper -->
<div id="content-wrapper" class="d-flex flex-column">

  <!-- Main Content -->
  <div id="content">

    <!-- Topbar -->
    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

      <h5 class="mt-2" style="color: #4E73DF;">Informent Administration</h5>
      <!-- Sidebar Toggle (Topbar) -->
      <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
        <i class="fa fa-bars"></i>
      </button>

      <!-- Topbar Navbar -->
      <ul class="navbar-nav ml-auto">
      
        <div class="topbar-divider d-none d-sm-block"></div>
        <!-- Nav Item - User Information -->
        <li class="nav-item dropdown no-arrow">
          <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="mr-2 d-none d-lg-inline text-gray-600 small"><?= $this->session->userdata('nama_lengkap'); ?></span>
            <img class="img-profile rounded-circle" src="<?= base_url('assets/img/default.png'); ?>">
          </a>
          <!-- Dropdown - User Information -->
          <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
            <!-- <div class="dropdown-divider"></div> -->
            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
              <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              Keluar
            </a>
          </div>
        </li>

      </ul>

    </nav>
    <!-- End of Topbar -->