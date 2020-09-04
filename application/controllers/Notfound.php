<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Notfound extends CI_Controller {
    
    public function index()
    {
        $data['title'] = 'Informent | Notfound';
		$this->load->view('Templates/Header', $data);
		$this->load->view('Notfound/Index');
		$this->load->view('Templates/Footer');
    }
}