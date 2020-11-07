<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Invoice extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->library('cart');
	}
	
	public function index()
	{
		$data['title'] = 'Informent | Invoice';
		$data['barang'] = $this->model->join('t_barang', 't_satuan', 't_barang.nama_satuan=t_satuan.nama_satuan')->result_array();
		$data['customer'] = $this->model->get('t_customer');
		$data['bank'] = $this->model->get('t_rekening');
		$data['pjs'] = $this->model->get('t_penanggungjawab');
		$data['satuan'] = $this->model->get('t_satuan');
		$this->load->view('Templates/Header', $data);
		$this->load->view('Templates/Menu');
		$this->load->view('Invoice/Index');
		$this->load->view('Templates/Footer');
	}

	public function insert() 
	{
		$namaBarang 	= htmlspecialchars($this->input->post('namaBrg'));
		$deskripsi	 	= htmlspecialchars($this->input->post('deskripsi'));
		$satuan 		= htmlspecialchars($this->input->post('satuanInv'));
		$qty			= htmlspecialchars($this->input->post('qtyInv'));
		$price 			= htmlspecialchars($this->input->post('hargaInv'));
		$fprice 		= str_replace("Rp. ", "", $price);
		$harga 			= str_replace(".", "", $fprice);

		$cart = [
			'id' 			=> $this->model->id_barang(),
			'name' 			=> $namaBarang,
			'price' 		=> $harga,
			'qty' 			=> $qty,
			'spesifikasi' 	=> $deskripsi,
			'satuan' 		=> $satuan
		];

		$kode_invoice = $this->model->kode_invoice();

		$session = [
			'kode_invoice' => $kode_invoice
		];
		$this->session->set_userdata($session);

		$data = [
			'id_barang'		=> $this->model->id_barang(),
			'nama_barang' 	=> $namaBarang,
			'spesifikasi' 	=> $deskripsi,
			'nama_satuan' 	=> $satuan,
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
			<td>Rp. ' . number_format($items['price'], 0, ',', '.') . '</td>
			<td>' . $items['qty'] . '</td>
			<td>Rp. ' . number_format($total, 0, ',', '.') . '</td>
			<td><a href="javascript:void(0);" class="text-danger deleteCart" data-id_cart="' . $items['rowid'] . '"><p class="text-danger d-inline"><i class="fas fa-trash-alt text-danger" style="font-size: 18px" data-placement="bottom" title="Hapus"></i></p></a></td>
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
		$kode_invoice	= htmlspecialchars($this->input->post('kode_invoice'));
		
		$id_barang 		= htmlspecialchars($this->input->post('id_barang'));
		$nama_barang 	= htmlspecialchars($this->input->post('nama_barang'));
		$deskripsi	 	= htmlspecialchars($this->input->post('spesifikasi'));
		$satuan 		= htmlspecialchars($this->input->post('satuan'));
		$hargaa 		= htmlspecialchars($this->input->post('harga'));
		$fprice 		= str_replace("Rp. ", "", $hargaa);
		$harga 			= str_replace(".", "", $fprice);

		$cart = [
			'id' => $id_barang,
			'name' => $nama_barang,
			'price' => $harga,
			'qty' => 1,
			'spesifikasi' => $deskripsi,
			'satuan' => $satuan
		];

		$session = [
			'kode_invoice' => $kode_invoice
		];
		$this->session->set_userdata($session);
		$this->cart->insert($cart);
		echo $this->show_cart();
	}

	public function Cetak($id)
	{
		$rows = count($this->cart->contents());
		if ($rows == 0) {
			$this->session->set_flashdata('msg', '<div class="alert alert-danger alert-dismissible fade show" id="pesanku" role="alert">
                    <b>Cart Empty!</b>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                    </div>');
				redirect('Invoice');
		}
		$this->cart->destroy();
		$mpdf = new \Mpdf\Mpdf();
		$mpdf->SetTitle('Cetak Penawaran');
		$join = [
			't_customer' => 't_invoice.id_customer=t_customer.id_customer',
			't_barang'	=> 't_barang.id_barang=t_invoice.id_barang',
			't_penanggungjawab' => 't_penanggungjawab.id_pj=t_invoice.id_pj',
			't_rekening' => 't_rekening.id_rekening=t_invoice.id_rekening'
		];
		$where = [
			'kode_invoice' => $id
		];
		$data['value'] 	= $this->model->joins('t_invoice', $where, $join)->row_array();
		$data['barang'] = $this->model->joins('t_invoice', $where, $join)->result_array();
		$data 			= $this->load->view('Invoice/Cetak', $data, TRUE);
		$mpdf->WriteHTML($data);
		$mpdf->Output('Invoice.pdf', 'I');
	}

	public function Simpan()
	{
		$customer = htmlspecialchars($this->input->post('customer'));
		$nomor = htmlspecialchars($this->input->post('noInvoice'));
		$date = date('Y-m-d', strtotime($this->input->post('tglInvoice')));
		$bank = htmlspecialchars($this->input->post('bank'));
		$pj = htmlspecialchars($this->input->post('pj'));

			foreach ($this->cart->contents() as $items) {
					$insert = [
						'kode_invoice' => $this->session->userdata('kode_invoice'),
						'id_barang' => $items['id'],
						'qty_invoice' => $items['qty'],
						'id_customer' => $customer,
						'id_pj' => $pj,
						'no_invoice' => $nomor,
						'tanggal' => $date,
						'id_rekening' => $bank
					];
					$insert = $this->model->insert('t_invoice', $insert);
			}
			// var_dump($insert);die;
	}
}