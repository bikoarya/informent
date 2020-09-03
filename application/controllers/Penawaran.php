<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Penawaran extends CI_Controller {

	public function index()
	{
        $data['title'] = 'Informent | Penawaran';
		$this->load->view('Templates/Header', $data);
		$this->load->view('Templates/Menu');
		$this->load->view('Penawaran/Index');
		$this->load->view('Templates/Footer');
	}
}