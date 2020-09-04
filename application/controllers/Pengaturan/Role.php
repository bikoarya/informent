<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Role extends CI_Controller {

	public function index()
    {
		if ($this->session->userdata('nama_lengkap') != null) {
        $data['title'] = 'Informent | Role';
		$this->load->view('Templates/Header', $data);
		$this->load->view('Templates/Menu');
		$this->load->view('Pengaturan/Role');
		$this->load->view('Templates/Footer');
		} else {
			redirect('Notfound');
		}
    }

    public function insert() 
	{
		$data = [
			'nama_role' => htmlspecialchars($this->input->post('namaRole'))
		];

		$insert = $this->db->insert('t_role', $data);
		echo $this->viewRole();
	}

	public function viewRole()
	{
		echo $this->view();
	}
	public function view()
	{
		$query = $this->model->get('t_role');
		$output = '';
		
		foreach ($query as $row => $value) {
		$output .= '
				<tr>
				<td>' . ($row + 1) . '</td>
				<td>' . $value['nama_role'] . '</td>
				<td> <a href="javascript:void(0);" class="text-success editRole" data-id_role="' . $value['id_role'] . '" data-nama_role="' . $value['nama_role'] . '"><p class="text-primary d-inline mr-4" data-toggle="modal" data-target="#editRole"><i class="fas fa-edit" style="font-size: 18px" data-placement="bottom" title="Edit"></i></p></a> <a href="javascript:void(0);" class="text-danger hapusRole" data-id_role="' . $value['id_role'] . '"><p class="text-danger d-inline"><i class="fas fa-trash-alt text-danger" style="font-size: 18px" data-placement="bottom" title="Hapus"></i></p></a></td>
				</tr>';
		}

		return $output;
    }

    public function update()
	{
		$id_role 	    = htmlspecialchars($this->input->post('id_role'));
		$editNamaRole 	= htmlspecialchars($this->input->post('editNamaRole'));
			
		$where = ['id_role' => $id_role];

			$data = [
				'nama_role' 	=> $editNamaRole
			];
			$this->model->put('t_role', $data, $where);
    }
    
    public function delete()
	{
		$id_role = $this->input->post('id_role');
		$delete = $this->model->delete('t_role', ['id_role' => $id_role]);
	}
    
}