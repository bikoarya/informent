<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class PenanggungJawab extends CI_Controller {

	public function index()
	{
		$data['title'] = 'Informent | Penanggung Jawab';
        $this->load->view('Templates/Header', $data);
        $this->load->view('Templates/Menu');
        $this->load->view('PenanggungJawab/Index');
        $this->load->view('Templates/Footer');
	}

	public function insert() 
	{
		$data = [
			'nama_pj' => htmlspecialchars($this->input->post('namaPj'))
		];

		$insert = $this->db->insert('t_penanggungjawab', $data);
		echo $this->viewPj();
	}

	public function viewPj()
	{
		echo $this->view();
	}
	public function view()
	{
		$query = $this->model->get('t_penanggungjawab');
		$output = '';
		
		foreach ($query as $row => $value) {
		$output .= '
				<tr>
				<td>' . ($row + 1) . '</td>
				<td>' . $value['nama_pj'] . '</td>
				<td> <a href="javascript:void(0);" class="text-success editPj" data-id_pj="' . $value['id_pj'] . '" data-nama_pj="' . $value['nama_pj'] . '"><p class="text-primary d-inline mr-4" data-toggle="modal" data-target="#editPj"><i class="fas fa-edit" style="font-size: 18px" data-placement="bottom" title="Edit"></i></p></a> <a href="javascript:void(0);" class="text-danger hapusPj" data-id_pj="' . $value['id_pj'] . '"><p class="text-danger d-inline"><i class="fas fa-trash-alt text-danger" style="font-size: 18px" data-placement="bottom" title="Hapus"></i></p></a></td>
				</tr>';
		}

		return $output;
	}
	
	public function update()
	{
		$id_pj 	    	= htmlspecialchars($this->input->post('id_pj'));
		$editNamaPj 	= htmlspecialchars($this->input->post('editNamaPj'));
			
		$where = ['id_pj' => $id_pj];

			$data = [
				'nama_pj' 	=> $editNamaPj
			];
			$this->model->put('t_penanggungjawab', $data, $where);
    }
    
    public function delete()
	{
		$id_pj = $this->input->post('id_pj');
		$delete = $this->model->delete('t_penanggungjawab', ['id_pj' => $id_pj]);
	}

}
