<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Kuitansi extends CI_Controller {

	public function index()
	{
		if ($this->session->userdata('nama_lengkap') != null) {
        $data['title'] = 'Informent | Kuitansi';
		$this->load->view('Templates/Header', $data);
		$this->load->view('Templates/Menu');
		$this->load->view('Kuitansi/Index');
		$this->load->view('Templates/Footer');
		} else {
			redirect('Notfound');
		}
	}

	public function cetak()
	{
		$mpdf = new \Mpdf\Mpdf();
		$mpdf->SetTitle('Cetak Kuitansi');
		$data = $this->load->view('PrintKuitansi', [], TRUE);
		$mpdf->WriteHTML($data);
		$mpdf->Output('Kuitansi.pdf', 'I');
	}
}