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
}