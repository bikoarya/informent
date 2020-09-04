<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {

	public function index()
	{
		$this->form_validation->set_rules('username', 'Username', 'trim|required', [
			'required' => 'Masukkan Username anda!'
		]);
		$this->form_validation->set_rules('password', 'Password', 'trim|required', [
			'required' => 'Masukkan Password anda!'
		]);

		if ($this->form_validation->run() == false) {
			$data['title'] = 'Informent | Login';
			$this->load->view('Templates/Header', $data);
			$this->load->view('Login/Index', $data);
			$this->load->view('Templates/Footer', $data);
		} else {
			$this->_Masuk();
		}
	}

	private function _Masuk()
	{
		$username = $this->input->post('username');
		$password = $this->input->post('password');

		$user = $this->db->get_where('t_akun', ['username' => $username])->row_array();

		if ($user) {
			if (password_verify($password, $user['password'])) {
				$data = [
					'nama_lengkap' => $user['nama_lengkap'],
					'username' => $user['username'],
					'id_role' => $user['id_role']
				];
				$this->session->set_userdata($data);
				redirect('Main');
			} else {
				$this->session->set_flashdata('message', '<div class="alert alert-danger alert-dismissible fade show" id="alert" role="alert">
                    <b>Password salah!</b>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                    </div>');
				redirect('Login');
			}
		} else {
			$this->session->set_flashdata('message', '<div class="alert alert-danger alert-dismissible fade show" id="alert" role="alert">
                    <b>Akun tidak terdaftar!</b>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                    </div>');
			redirect('Login');
		}
	}

	public function Logout()
	{
		$this->session->sess_destroy();
		redirect('Login');
	}
}