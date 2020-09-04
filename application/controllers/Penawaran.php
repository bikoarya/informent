<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Penawaran extends CI_Controller {

	public function index()
	{
        $data['title'] = 'Informent | Penawaran';
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
		// $data = $this->m->get('t_barang');
		// echo json_encode($data);
	}

	function show_data()
	{
		$output = '';
		$no = 0;
		$query = $this->db->query('SELECT name FROM grade');
		$data  =   array();
		foreach ($query->result_array() as $row):  {
		// foreach ($this->cart->contents() as $items) {
			// code...
			$no++;
			$total = $items['qty'] * $items['price'];
			$output .= '
			<tr>
			<td>' . $no . '</td>
			<td>' . $row['nama'] . '</td>
			<td>' . $row['notelp'] . '</td>
			<td>' . $row['email'] . '</td>
			<td><a class="hapus_cart" id="' . $row['rowid'] . '"><i class="far fa-trash-alt text-danger fa-fw" style="font-size: 20px"></i></a></td>
			</tr>
			';
		}
		return $output;
	}

	function load()
	{
		echo $this->show_data();
	}
}