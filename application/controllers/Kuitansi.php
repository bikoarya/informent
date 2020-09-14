<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Kuitansi extends CI_Controller {

	public function index()
	{
		$data['penanggungjawab'] = $this->model->get('t_penanggungjawab');
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

	public function Cetak()
	{
		$mpdf = new \Mpdf\Mpdf();
		$mpdf->SetTitle('Cetak Kuitansi');
		$join = [
			't_penanggungjawab' => 't_kuitansi.id_pj=t_penanggungjawab.id_pj'
		];
		$where = [
			'kode_kuitansi' => $this->session->userdata('kode_kuitansi')
		];
		$data['value'] = $this->model->joins('t_kuitansi', $where, $join)->row_array();
		$data = $this->load->view('Kuitansi/Cetak', $data, TRUE);
		$mpdf = new \Mpdf\Mpdf(['mode' => 'utf-8', 'format' => [210, 115]]);
		$mpdf->WriteHTML($data);
		$mpdf->Output('Kuitansi.pdf', 'I');

		$unset = [
			'kode_kuitansi'
		];
		$this->session->unset_userdata($unset);
	}

	public function insert() 
	{
		$kode_kuitansi = htmlspecialchars($this->input->post('kodeKuitansi'));

		$data = [
			'no_kuitansi' => htmlspecialchars($this->input->post('noKuitansi')),
			'tanggal_kuitansi' => date('Y-m-d', strtotime($this->input->post('tglKuitansi'))),
			'jumlah_uang' => htmlspecialchars($this->input->post('jumlahUang')),
			'guna_pembayaran' => htmlspecialchars($this->input->post('gunaPembayaran')),
			'terima_dari' => htmlspecialchars($this->input->post('terimaDari')),
			'id_pj' => htmlspecialchars($this->input->post('pjKuitansi')),
			'kode_kuitansi' => htmlspecialchars($this->input->post('kodeKuitansi'))
		];

		$sess = [
			'kode_kuitansi' => $kode_kuitansi
		];
		$this->session->set_userdata($sess);

		$insert = $this->db->insert('t_kuitansi', $data);
		echo $this->viewKuitansi();
	}

	public function viewKuitansi()
	{
		echo $this->view();
	}

	public function view()
	{
		$query = $this->model->join('t_kuitansi', 't_penanggungjawab', 't_kuitansi.id_pj=t_penanggungjawab.id_pj')->result_array();
		$output = '';
		
		foreach ($query as $row => $value) {
		$output .= '
				<tr>
				<td>' . ($row + 1) . '</td>
				<td>' . $value['no_kuitansi'] . '</td>
				<td>' . date('d M Y', strtotime($value['tanggal_kuitansi'])) . '</td>
				<td>' . $value['jumlah_uang'] . '</td>
				<td>' . $value['guna_pembayaran'] . '</td>
				<td>' . $value['terima_dari'] . '</td>
				<td>' . $value['nama_pj'] . '</td>
				<td> <a href="Kuitansi/Cetak"><p class="text-primary d-inline mr-4" data-toggle="modal" data-target="#cetak"><i class="fas fa-print" style="font-size: 18px" data-placement="bottom" title="Cetak"></i></p></a> <a href="javascript:void(0);" class="text-danger hapusKuitansi" data-id_kuitansi="' . $value['id_kuitansi'] . '"><p class="text-danger d-inline"><i class="fas fa-trash-alt text-danger" style="font-size: 18px" data-placement="bottom" title="Hapus"></i></p></a></td>
				</tr>';
		}

		return $output;
	}
	
	public function delete()
	{
		$id_kuitansi = $this->input->post('id_kuitansi');
		$delete = $this->model->delete('t_kuitansi', ['id_kuitansi' => $id_kuitansi]);
	}
}