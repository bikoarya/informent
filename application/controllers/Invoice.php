<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Invoice extends CI_Controller {

	public function index()
	{
        $data['title'] = 'Informent | Invoice';
		$this->load->view('Templates/Header', $data);
		$this->load->view('Templates/Menu');
		$this->load->view('Invoice/Index');
		$this->load->view('Templates/Footer');
	}
}