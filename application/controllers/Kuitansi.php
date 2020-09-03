<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Kuitansi extends CI_Controller {

	public function index()
	{
        $data['title'] = 'Informent | Kuitansi';
		$this->load->view('Templates/Header', $data);
		$this->load->view('Templates/Menu');
		$this->load->view('Kuitansi/Index');
		$this->load->view('Templates/Footer');
	}
}