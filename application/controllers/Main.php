<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller {

	public function index()
	{
        $data['title'] = 'Informent | Dashboard';
		$this->load->view('Templates/Header', $data);
		$this->load->view('Templates/Menu');
		$this->load->view('Dashboard');
		$this->load->view('Templates/Footer');
	}
}
