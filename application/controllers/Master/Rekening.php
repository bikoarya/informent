<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Rekening extends CI_Controller {

	public function index()
	{
		if ($this->session->userdata('nama_lengkap') != null) {
        $data['title'] = 'Informent | Rekening';
		$this->load->view('Templates/Header', $data);
		$this->load->view('Templates/Menu');
		$this->load->view('Rekening/Index');
		$this->load->view('Templates/Footer');
		} else {
			redirect('Notfound');
		}
	}

	public function insert() 
	{
		$data = [
			'nama_bank' => htmlspecialchars($this->input->post('namaBank')),
			'no_rekening' => htmlspecialchars($this->input->post('norek')),
			'atas_nama' => htmlspecialchars($this->input->post('atasNama'))
		];

		$insert = $this->db->insert('t_rekening', $data);
		echo $this->viewRekening();
	}

	public function viewRekening()
	{
		echo $this->view();
	}
	public function view()
	{
		$query = $this->model->get('t_rekening');
		$output = '';
		
		foreach ($query as $row => $value) {
		$output .= '
				<tr>
				<td>' . ($row + 1) . '</td>
				<td>' . $value['nama_bank'] . '</td>
				<td>' . $value['no_rekening'] . '</td>
				<td>' . $value['atas_nama'] . '</td>
				<td> <a href="javascript:void(0);" class="text-success editRekening" data-id_rekening="' . $value['id_rekening'] . '" data-nama_bank="' . $value['nama_bank'] . '" data-norek="' . $value['no_rekening'] . '" data-atas_nama="' . $value['atas_nama'] . '"><p class="text-primary d-inline mr-4" data-toggle="modal" data-target="#editRekening"><i class="fas fa-edit" style="font-size: 18px" data-placement="bottom" title="Edit"></i></p></a> <a href="javascript:void(0);" class="text-danger hapusRekening" data-id_rekening="' . $value['id_rekening'] . '"><p class="text-danger d-inline"><i class="fas fa-trash-alt text-danger" style="font-size: 18px" data-placement="bottom" title="Hapus"></i></p></a></td>
				</tr>';
		}

		return $output;
	}
	
	public function update()
	{
		$id_rekening 	    = htmlspecialchars($this->input->post('id_rekening'));
		$editNamaBank 		= htmlspecialchars($this->input->post('editNamaBank'));
		$editNorek	 		= htmlspecialchars($this->input->post('editNorek'));
		$editAtasNama 		= htmlspecialchars($this->input->post('editAtasNama'));
			
		$where = ['id_rekening' => $id_rekening];

			$data = [
				'nama_bank' 	=> $editNamaBank,
				'no_rekening'	=> $editNorek,
				'atas_nama'		=> $editAtasNama
			];
			$this->model->put('t_rekening', $data, $where);
    }
    
    public function delete()
	{
		$id_rekening = $this->input->post('id_rekening');
		$delete = $this->model->delete('t_rekening', ['id_rekening' => $id_rekening]);
	}
}