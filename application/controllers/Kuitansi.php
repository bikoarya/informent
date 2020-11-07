<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Kuitansi extends CI_Controller {


	public function index()
	{
		$data['penanggungjawab'] = $this->model->get('t_penanggungjawab');
		if ($this->session->userdata('nama_lengkap') != null) {
        $data['title'] = 'Informent | Kuitansi';
		$this->load->view('Templates/Header', $data);
		$this->load->view('Templates/Menu');
		$this->load->view('Kuitansi/Index');
		$this->load->view('Templates/Footer');
		} else {
			redirect('Notfound');
		}
	}

	public function Cetak($id = null)
	{
		$mpdf = new \Mpdf\Mpdf();
		$mpdf->SetTitle('Cetak Kuitansi');
		$join = [
			't_penanggungjawab' => 't_kuitansi.id_pj=t_penanggungjawab.id_pj'
		];
		$where = [
			'no_kuitansi' => $id
		];
		$data['value'] 	= $this->model->joins('t_kuitansi', $where, $join)->row_array();
		$data 			= $this->load->view('Kuitansi/Cetak', $data, TRUE);
		// ['mode' => 'utf-8', 'format' => [210, 115]]
		$mpdf 			= new \Mpdf\Mpdf();
		$mpdf->WriteHTML($data);
		$mpdf->Output('Kuitansi.pdf', 'I');

	}

	// public function Print($id)
	// {
	// 	$mpdf = new \Mpdf\Mpdf();
	// 	$mpdf->SetTitle('Cetak Kuitansi');
	// 	$join = [
	// 		't_penanggungjawab' => 't_kuitansi.id_pj=t_penanggungjawab.id_pj'
	// 	];
	// 	$where = [
	// 		'no_kuitansi' => $id
	// 	];
	// 	$data['value'] 	= $this->model->joins('t_kuitansi', $where, $join)->row_array();
	// 	$data 			= $this->load->view('Kuitansi/Cetak', $data, TRUE);
	// 	$mpdf 			= new \Mpdf\Mpdf(['mode' => 'utf-8', 'format' => [210, 115]]);
	// 	$mpdf->WriteHTML($data);
	// 	$mpdf->Output('Kuitansi.pdf', 'I');

	// }

	public function insert() 
	{
		$kode_kuitansi 	= htmlspecialchars($this->input->post('kodeKuitansi'));
		$jml 			= htmlspecialchars($this->input->post('jumlahUang'));
		$jmlh 			= str_replace("Rp. ", "", $jml);
		$jumlahUang 	= str_replace(".", "", $jmlh);

		$data = [
			'no_kuitansi'		 	=> htmlspecialchars($this->input->post('noKuitansi')),
			'tanggal_kuitansi' 		=> date('Y-m-d', strtotime($this->input->post('tglKuitansi'))),
			'jumlah_uang' 			=> $jumlahUang,
			'guna_pembayaran' 		=> htmlspecialchars($this->input->post('gunaPembayaran')),
			'terima_dari' 			=> htmlspecialchars($this->input->post('terimaDari')),
			'id_pj' 				=> htmlspecialchars($this->input->post('pjKuitansi')),
			'kode_kuitansi' 		=> htmlspecialchars($this->input->post('kodeKuitansi'))
		];

		$insert = $this->db->insert('t_kuitansi', $data);
		echo $this->viewKuitansi();
	}

	public function viewKuitansi()
	{
		echo $this->view();
	}

	public function view()
	{
		$query = $this->model->join('t_kuitansi', 't_penanggungjawab', 't_kuitansi.id_pj=t_penanggungjawab.id_pj')->result_array();
		$output = '';
		
		foreach ($query as $row => $value) {
		$output .= '
				<tr>
				<td>' . ($row + 1) . '</td>
				<td>' . $value['no_kuitansi'] . '</td>
				<td>' . date('d M Y', strtotime($value['tanggal_kuitansi'])) . '</td>
				<td>' . 'Rp. ' . number_format($value['jumlah_uang']) . '</td>
				<td>' . $value['guna_pembayaran'] . '</td>
				<td>' . $value['terima_dari'] . '</td>
				<td>' . $value['nama_pj'] . '</td>
				<td> <a href="javascript:void(0)"><p class="text-primary d-inline mr-4 editKuitansi" data-id_kuitansi="' . $value['id_kuitansi'] . '" data-no_kuitansi="' . $value['no_kuitansi'] . '" data-tanggal_kuitansi="' . $value['tanggal_kuitansi'] . '" data-jumlah_uang="' . $value['jumlah_uang'] . '" data-guna_pembayaran="' . $value['guna_pembayaran'] . '" data-terima_dari="' . $value['terima_dari'] . '" data-id_pj="' . $value['id_pj'] . '" data-toggle="modal" data-target="#editKuitansi"><i class="fas fa-edit" style="font-size: 18px" data-placement="bottom" title="Edit"></i></p></a> 
				<a href="Kuitansi/Cetak/' . $value['no_kuitansi'] . '"><p class="text-info d-inline mr-4"><i class="fas fa-print" style="font-size: 18px" data-placement="bottom" title="Cetak"></i></p></a> 
				<a href="javascript:void(0);" class="text-danger hapusKuitansi" data-id_kuitansi="' . $value['id_kuitansi'] . '"><p class="text-danger d-inline"><i class="fas fa-trash-alt text-danger" style="font-size: 18px" data-placement="bottom" title="Hapus"></i></p></a></td>
				</tr>';
		}

		return $output;
		echo json_encode($query);
	}

	public function ajaxList()
    {
		$list = $this->model->get_datatables();
        $data = array();
        $no = $_POST['start'];
        foreach ($list as $kuitansi) {
            $no++;
            $row = array();
            $row[] = $no;
            $row[] = $kuitansi->no_kuitansi;
            $row[] = date('d M Y', strtotime($kuitansi->tanggal_kuitansi));
            $row[] = number_format($kuitansi->jumlah_uang);
            $row[] = $kuitansi->guna_pembayaran;
            $row[] = $kuitansi->terima_dari;
            $row[] = $kuitansi->nama_pj;
            $row[] = '<a href="javascript:void(0)"><p class="text-primary d-inline mr-4 editKuitansi" data-id_kuitansi="' . $kuitansi->id_kuitansi . '" data-no_kuitansi="' . $kuitansi->no_kuitansi . '" data-tanggal_kuitansi="' . $kuitansi->tanggal_kuitansi . '" data-jumlah_uang="' . $kuitansi->jumlah_uang . '" data-guna_pembayaran="' . $kuitansi->guna_pembayaran . '" data-terima_dari="' . $kuitansi->terima_dari . '" data-id_pj="' . $kuitansi->id_pj . '" data-toggle="modal" data-target="#editKuitansi"><i class="fas fa-edit" style="font-size: 18px" data-placement="bottom" title="Edit"></i></p></a> 
			<a href="Kuitansi/Cetak/' . $kuitansi->no_kuitansi . '"><p class="text-info d-inline mr-4"><i class="fas fa-print" style="font-size: 18px" data-placement="bottom" title="Cetak"></i></p></a> 
			<a href="javascript:void(0);" class="text-danger hapusKuitansi" data-id_kuitansi="' . $kuitansi->id_kuitansi . '"><p class="text-danger d-inline"><i class="fas fa-trash-alt text-danger" style="font-size: 18px" data-placement="bottom" title="Hapus"></i></p></a>';
 
			$data[] = $row;
        }
 
        $output = array(
                        "draw" => $_POST['draw'],
                        "recordsTotal" => $this->model->count_all(),
                        "recordsFiltered" => $this->model->count_filtered(),
                        "data" => $data,
				);
        //output to json format
		echo json_encode($output);
    }

	public function Update()
    {
        $id_kuitansi 	    	= htmlspecialchars($this->input->post('id_kuitansi'));
		$editNoKuitansi			= htmlspecialchars($this->input->post('editNoKuitansi'));
		$editTglKuitansi 		= date('Y-m-d', strtotime($this->input->post('editTglKuitansi')));
        $editJumlahUang 	    = htmlspecialchars($this->input->post('editJumlahUang'));
		$editGunaPembayaran 	= htmlspecialchars($this->input->post('editGunaPembayaran'));
		$editTerimaDari 	    = htmlspecialchars($this->input->post('editTerimaDari'));
		$editPjKuitansi 	    = htmlspecialchars($this->input->post('editPjKuitansi'));
			
		$where = ['id_kuitansi' => $id_kuitansi];
			
			$data = [
				'no_kuitansi' 		=> $editNoKuitansi,
				'tanggal_kuitansi' 	=> $editTglKuitansi,
				'jumlah_uang' 		=> $editJumlahUang,
				'guna_pembayaran' 	=> $editGunaPembayaran,
				'terima_dari' 		=> $editTerimaDari,
				'id_pj' 			=> $editPjKuitansi
			];
			$this->model->put('t_kuitansi', $data, $where);
			// echo json_encode($update);
    }
	
	public function delete()
	{
		$id_kuitansi = $this->input->post('id_kuitansi');
		$delete = $this->model->delete('t_kuitansi', ['id_kuitansi' => $id_kuitansi]);
		// echo json_encode($delete);
	}

		// public function tes()
	// {
	// 	$join = [
	// 		't_penanggungjawab' => 't_penanggungjawab.id_pj=t_kuitansi.id_pj'
	// 	];
	// 	$data = $this->model->getdata(null,'t_kuitansi', null, $join)->result_array();
	// 	var_dump($data);

	// }
}