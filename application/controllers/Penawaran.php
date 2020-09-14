<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Penawaran extends CI_Controller {

	public function index()
	{
        $data['title'] = 'Informent | Penawaran';
        $ar_agama = array(
 		'Biko Arya Maulana'=>'Biko Arya Maulana',
 		'Pevita Pearce'=>'Pevita Pearce'
		 );
 		$data['f_agama'] = form_dropdown('agama', $ar_agama);
  //       $data['status'] = ['Lelang', 'Tunjuk Langsung', 'Pembelian Langsung'];
		// $data['pelanggan'] = $this->m->get('t_customer');
		// $data['satuan'] = $this->m->get('t_satuan');
		$this->load->view('Templates/Header', $data);
		$this->load->view('Templates/Menu');
		$this->load->view('Penawaran/Index');
		$this->load->view('Templates/Footer');
	}

	function view()
	{
		$data = $this->model->get('t_penanggungjawab');
		$data = $this->model->get('t_penawaran');
		echo json_encode($data);
	}

	function CetakPenawaran(){
		$pj = $this->input->post('pj');
		$penerima = $this->input->post('penerima');
		$no = $this->input->post('no');
		$date = $this->input->post('date');
		$validity = $this->input->post('validity');
		$hal = $this->input->post('hal');
		$nodpb = $this->input->post('nodpb');
 
		$data = array(
			'pj' => $pj,
			'penerima' => $penerima,
			'no' => $no,
			'date' => $date,
			'validity' => $validity,
			'hal' => $hal,
			'nodpb' => $nodpb
			);
		$this->model->insert('t_penawaran',$data);
		redirect('Penawaran/index');
	}

}