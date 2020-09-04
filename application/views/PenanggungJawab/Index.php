<div class="container-fluid">
<div class="card" style="border-top: 5px solid #4E73DF;">
  <div class="card-body">
    <h4 class="card-title">Penanggung Jawab</h4>
    <div class="table-responsive" style="margin-top: 10px">
    	<div class="card-body">
 			<button class="btn btn-primary mb-3" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus"></i> Tambah Penanggung Jawab</button>
 			<table class="table table-bordered" width="100%" cellspacing="0" style="white-space: nowrap">
					<thead>
						<tr>
							<th width=20>No</th>
							<th>Nama</th>
							<th>No.Telp</th>
							<th>Email</th>
							<th class="text-center" Width=120>Aksi</th>
						</tr>
					</thead>
					<tbody id="target">
					</tbody>
			</table>
  		</div>
	</div>



<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog  modal-xl" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLabel">Data Pemesanan</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body" style="overflow:scroll;height:500px;">
			<?= $this->session->flashdata('message'); ?>
				<table class="table table-bordered" id="dataTable1" width="100%" cellspacing="0" style="white-space: nowrap">
					<thead>
						<tr>
							<th>Nama</th>
							<th>No.Telp</th>
							<th>Email</th>
							<th class="text-center" Width=120>Aksi</th>
						</tr>
					</thead>
					<tbody id="viewTambahPJ">
					</tbody>
				</table>

			</div>

		</div>
	</div>
</div>
</div>
</div>
</div>

