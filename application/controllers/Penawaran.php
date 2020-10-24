<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Penawaran extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->library('cart');
	}

	public function index()
	{
		$data['title'] = 'Informent | Penawaran';
		$data['barang'] = $this->model->join('t_barang', 't_satuan', 't_barang.nama_satuan=t_satuan.nama_satuan')->result_array();
		$data['satuan'] = $this->model->get('t_satuan');
		$data['customer'] = $this->model->get('t_customer');
		$data['penanggungjawab'] = $this->model->get('t_penanggungjawab');
		$this->load->view('Templates/Header', $data);
		$this->load->view('Templates/Menu');
		$this->load->view('Penawaran/Index');
		$this->load->view('Templates/Footer');
	}

	public function insert() 
	{
		$kodePenawaran 	= htmlspecialchars($this->input->post('kodePenawaran'));
		$namaBarang 	= htmlspecialchars($this->input->post('namaBarang'));
		$spesifikasi 	= htmlspecialchars($this->input->post('spesifikasi'));
		$satuan 		= htmlspecialchars($this->input->post('satuan'));
		// $bagian 		= htmlspecialchars($this->input->post('bagian'));
		$qty 			= htmlspecialchars($this->input->post('qty'));
		$price 			= htmlspecialchars($this->input->post('harga'));
		$fprice 		= str_replace("Rp. ", "", $price);
		$harga 			= str_replace(".", "", $fprice);

		$cart = [
			'id' 			=> $this->model->createKode(),
			'name' 			=> $namaBarang,
			'price' 		=> $harga,
			'qty' 			=> $qty,
			'spesifikasi' 	=> $spesifikasi,
			'satuan' 		=> $satuan,
			// 'bagian' 		=> $bagian
		];

		$kode_penawaran = $this->model->kodePenawaran();

		$session = [
			'kode_penawaran' => $kode_penawaran
		];
		$this->session->set_userdata($session);

		$data = [
			'nama_barang' 	=> $namaBarang,
			'spesifikasi' 	=> $spesifikasi,
			'nama_satuan' 	=> $satuan,
			// 'bagian' 		=> $bagian,
			'qty' 			=> $qty,
			'harga' 		=> $harga
		];

		$this->db->insert('t_barang', $data);
		$this->cart->insert($cart);
		echo $this->show_cart();
	}

	function load()
	{
		echo $this->show_cart();
	}

	function show_cart()
	{
		$output = '';
		$no = 0;
		foreach ($this->cart->contents() as $items) {
			// code...
			$no++;
			$total = $items['qty'] * $items['price'];
			$output .= '
			<tr>
			<td>' . $no . '</td>
			<td>' . $items['name'] . '</td>
			<td>' . $items['spesifikasi'] . '</td>
			<td>' . $items['satuan'] . '</td>
			<td>Rp. ' . number_format($items['price'], 0, ',', '.') . '</td>
			<td>' . $items['qty'] . '</td>
			<td>Rp. ' . number_format($total, 0, ',', '.') . '</td>
			<td><a href="javascript:void(0);" class="text-danger hapusCart" data-id_cart="' . $items['rowid'] . '"><p class="text-danger d-inline"><i class="fas fa-trash-alt text-danger" style="font-size: 18px" data-placement="bottom" title="Hapus"></i></p></a></td>
			</tr>
			';
		}
		return $output;
	}

	public function grandTotal()
	{
		echo 'Rp. ' . number_format($this->cart->total(), 0, ',', '.');
	}

	function Delete(){ 
        $data = array(
            'rowid' => $this->input->post('rowid'), 
            'qty' => 0, 
        );
        $this->cart->update($data);
        echo $this->show_cart();
	}
	
	public function Search()
	{
		$kode_penawaran	= htmlspecialchars($this->input->post('kodePenawaran'));
		$id_barang 		= htmlspecialchars($this->input->post('id_barang'));
		$nama_barang 	= htmlspecialchars($this->input->post('nama_barang'));
		$spesifikasi 	= htmlspecialchars($this->input->post('spek'));
		$satuan 		= htmlspecialchars($this->input->post('satuann'));
		$bagiann 		= htmlspecialchars($this->input->post('bagiann'));
		$hargaa 		= htmlspecialchars($this->input->post('hargaa'));
		$fprice 		= str_replace("Rp. ", "", $hargaa);
		$harga 			= str_replace(".", "", $fprice);

		$cart = [
			'id' => $id_barang,
			'name' => $nama_barang,
			'price' => $harga,
			'qty' => 1,
			'spesifikasi' => $spesifikasi,
			'satuan' => $satuan,
			'bagian' => $bagiann
		];

		$session = [
			'kode_penawaran' => $kode_penawaran
		];
		$this->session->set_userdata($session);
		$this->cart->insert($cart);
		echo $this->show_cart();
	}

	public function Simpan()
	{
		$customer = htmlspecialchars($this->input->post('customerPenawaran'));
		$nomor = htmlspecialchars($this->input->post('noPenawaran'));
		$date = date('Y-m-d', strtotime($this->input->post('tglPenawaran')));
		$periode = htmlspecialchars($this->input->post('periode'));
		$hal = htmlspecialchars($this->input->post('hal'));
		$pj = htmlspecialchars($this->input->post('pjPenawaran'));

		foreach ($this->cart->contents() as $items) {
			$insert = [
				'kode_penawaran' => $this->session->userdata('kode_penawaran'),
				'id_barang' => $items['id'],
				'qty' => $items['qty'],
				'id_customer' => $customer,
				'id_pj' => $pj,
				'no_penawaran' => $nomor,
				'date' => $date,
				'periode' => $periode,
				'hal' => $hal
			];
			$this->model->insert('t_penawaran', $insert);
		}
	}

	public function Cetak($id)
	{
		$mpdf = new \Mpdf\Mpdf();
		$mpdf->SetTitle('Cetak Penawaran');
		$mpdf->AddPage('L');
		$mpdf->SetHTMLFooter('
		<h5 class="alamat">Office : <br> Jl. Satsui tubun Gadang Sukun Malang Jawa Timur 65149<br>+ 62 8213 9881 507<br>Email : Informentmalang@gmail.com</h5>'
		);
		$join = [
			't_customer' => 't_penawaran.id_customer=t_customer.id_customer',
			't_barang'	=> 't_barang.id_barang=t_penawaran.id_barang',
			't_penanggungjawab' => 't_penanggungjawab.id_pj=t_penawaran.id_pj'
		];
		$where = [
			'kode_penawaran' => $id
		];
		$data['value'] 	= $this->model->joins('t_penawaran', $where, $join)->row_array();
		$data['barang'] = $this->model->joins('t_penawaran', $where, $join)->result_array();
		$data 			= $this->load->view('Penawaran/Cetak', $data, TRUE);
		$mpdf->WriteHTML($data);
		$mpdf->Output('Penawaran.pdf', 'I');
	}

}