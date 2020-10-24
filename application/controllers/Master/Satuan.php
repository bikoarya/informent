<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Satuan extends CI_Controller {

    public function index()
	{
		$data['title'] = 'Informent | Satuan';
        $this->load->view('Templates/Header', $data);
        $this->load->view('Templates/Menu');
        $this->load->view('Satuan/Index');
        $this->load->view('Templates/Footer');
    }

    public function insert() 
	{
		$data = [
			'nama_satuan' => htmlspecialchars($this->input->post('namaSatuan'))
		];

		$insert = $this->db->insert('t_satuan', $data);
		echo $this->viewSatuan();
	}

	public function viewSatuan()
	{
		echo $this->view();
	}
	public function view()
	{
		$query = $this->model->get('t_satuan');
		$output = '';
		
		foreach ($query as $row => $value) {
		$output .= '
				<tr>
				<td>' . ($row + 1) . '</td>
				<td>' . $value['nama_satuan'] . '</td>
				<td> <a href="javascript:void(0);" class="text-success editSatuan" data-id_satuan="' . $value['id_satuan'] . '" data-nama_satuan="' . $value['nama_satuan'] . '"><p class="text-primary d-inline mr-4" data-toggle="modal" data-target="#editSatuan"><i class="fas fa-edit" style="font-size: 18px" data-placement="bottom" title="Edit"></i></p></a> <a href="javascript:void(0);" class="text-danger hapusSatuan" data-id_satuan="' . $value['id_satuan'] . '"><p class="text-danger d-inline"><i class="fas fa-trash-alt text-danger" style="font-size: 18px" data-placement="bottom" title="Hapus"></i></p></a></td>
				</tr>';
		}

		return $output;
    }

    public function update()
	{
		$id_satuan 	    = htmlspecialchars($this->input->post('id_satuan'));
		$editNamaSatuan = htmlspecialchars($this->input->post('editNamaSatuan'));
			
		$where = ['id_satuan' => $id_satuan];

			$data = [
				'nama_satuan' 	=> $editNamaSatuan
			];
			$this->model->put('t_satuan', $data, $where);
    }
    
    public function delete()
	{
		$id_satuan = $this->input->post('id_satuan');
		$delete = $this->model->delete('t_satuan', ['id_satuan' => $id_satuan]);
	}
}