<div class="container-fluid">
<div class="card" style="border-top: 5px solid #4E73DF;">
  <div class="card-body">
    <h4 class="card-title">Penawaran</h4>
    	<div class="card-body">
    			
				<div class="col-lg-6">
					<form action="<?php echo base_url(). 'penawaran/CetakPenawaran'; ?>" method="POST">
						<div class="input-group mb-3 w-50">
    						<label class="col col-form-label">Penanggung Jawab:</label>
							<select name="pj" class="form-control" data-width="100%" <?php echo $f_agama;?>>
							</select>
						</div>

							<div class="form-group row">
								<label class="col-sm-2 col-form-label">Kepada Yth:</label>
								<div class="col-sm-10">
									<input type="text" class="form-control w-75" name="penerima" placeholder="Penerima">
								</div>

								<label class="col-sm-2 col-form-label">No:</label>
								<div class="col-sm-10">
									<input type="text" class="form-control w-75" name="no" placeholder="No">
								</div>

								<label class="col-sm-2 col-form-label">Date:</label>
								<div class="col-sm-10">
									<input type="text" class="form-control w-75" name="date" placeholder="Date">
								</div>

								<label class="col-sm-2 col-form-label">Validity Period:</label>
								<div class="col-sm-10">
									<input type="text" class="form-control w-75" name="validity" placeholder="Validity Period">
								</div>

								<label class="col-sm-2 col-form-label">Hal:</label>
								<div class="col-sm-10">
									<input type="text" class="form-control w-75" name="hal" placeholder="Hal">
								</div>

								<label class="col-sm-2 col-form-label">No.DPB:</label>
								<div class="col-sm-10">
									<input type="text" class="form-control w-75" name="nodpb" placeholder="No.dpb">
								</div>
							<tr>
							<td></td>
								<td><input style="margin-left: 100%" type="submit" value="Cetak Penawaran"></td>
							</tr>
					</form>
				</div>
			</div>

    	</div>

  </div>
</div>