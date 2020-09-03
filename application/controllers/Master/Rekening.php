<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Rekening extends CI_Controller {

	public function index()
	{
        $data['title'] = 'Informent | Rekening';
		$this->load->view('Templates/Header', $data);
		$this->load->view('Templates/Menu');
		$this->load->view('Rekening/Index');
		$this->load->view('Templates/Footer');
	}
}