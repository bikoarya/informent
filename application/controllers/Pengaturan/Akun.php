<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Akun extends CI_Controller {

	public function index()
    {
		$data['role'] = $this->model->get('t_role'); 
        $data['title'] = 'Informent | Akun';
		$this->load->view('Templates/Header', $data);
		$this->load->view('Templates/Menu');
		$this->load->view('Pengaturan/Akun');
		$this->load->view('Templates/Footer');
	}

	public function insert() 
    {
        $data = [
            'nama_lengkap' => htmlspecialchars($this->input->post('namaLengkap')),
            'username' => htmlspecialchars($this->input->post('username')),
            'password' => password_hash($this->input->post('password'), PASSWORD_DEFAULT),
            'id_role' => htmlspecialchars($this->input->post('role'))
            
		];

		$this->db->insert('t_akun', $data);
        echo $this->viewAkun();
    }

    public function viewAkun()
    {
        echo $this->view();
    }

    public function view()
    {
        $data = $this->model->join('t_akun', 't_role', 't_akun.id_role=t_role.id_role')->result_array();
		$output = '';
		
		foreach ($data as $row => $value) {
		$output .= '
				<tr>
				<td>' . ($row + 1) . '</td>
				<td>' . $value['nama_lengkap'] . '</td>
				<td>' . $value['username'] . '</td>
				<td>' . $value['nama_role'] . '</td>
				<td> <a href="javascript:void(0);" class="text-success editAkun" data-id_akun="' . $value['id_akun'] . '" data-nama_lengkap="' . $value['nama_lengkap'] . '" data-username="' . $value['username'] . '" data-password="' . $value['password'] . '" data-role="' . $value['id_role'] . '"><p class="text-primary d-inline mr-3" data-toggle="modal" data-target="#editAkun"><i class="fas fa-edit" style="font-size: 18px" data-placement="bottom" title="Edit"></i></p></a> <a href="javascript:void(0)" class="text-danger hapusAkun" data-id_akun="' . $value['id_akun'] . '"><p class="text-danger d-inline"><i class="fas fa-trash-alt text-danger" style="font-size: 18px" data-placement="bottom" title="Hapus"></i></p></a></td>
				</tr>';
		}

		return $output;
    }

    public function update()
    {
        $id_akun 	    	= htmlspecialchars($this->input->post('id_akun'));
		$editNamaLengkap	= htmlspecialchars($this->input->post('editNamaLengkap'));
		$editUsername 		= htmlspecialchars($this->input->post('editUsername'));
        $password 	    	= htmlspecialchars($this->input->post('newPassword'));
        $newPassword    	= password_hash($password, PASSWORD_DEFAULT);
		$oldPassword 		= htmlspecialchars($this->input->post('oldPassword'));
		$editRole 	    	= htmlspecialchars($this->input->post('editRole'));
			
		$where = ['id_akun' => $id_akun];
			
		if ($password != null) {
			$data = [
				'nama_lengkap' 	=> $editNamaLengkap,
				'username' 		=> $editUsername,
				'id_role' 		=> $editRole,
				'password' 		=> $newPassword
			];
			$this->model->put('t_akun', $data, $where);
		} else {
			$data = [
				'nama_lengkap' 	=> $editNamaLengkap,
				'username' 		=> $editUsername,
				'id_role' 		=> $editRole,
				'password' 		=> $oldPassword
			];
			$this->model->put('t_akun', $data, $where);
		}
    }

    public function delete()
	{
		$id_akun = $this->input->post('id_akun');
		$delete = $this->model->delete('t_akun', ['id_akun' => $id_akun]);
	}
    
}