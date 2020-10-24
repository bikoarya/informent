<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Customer extends CI_Controller {

    public function index()
	{
		$data['title'] = 'Informent | Customer';
        $this->load->view('Templates/Header', $data);
        $this->load->view('Templates/Menu');
        $this->load->view('Customer/Index');
        $this->load->view('Templates/Footer');
    }

    public function insert() 
	{
		$data = [
            'nama_customer' => htmlspecialchars($this->input->post('namaCustomer')),
            'alamat' => htmlspecialchars($this->input->post('alamat')),
            'no_hp' => htmlspecialchars($this->input->post('noHp'))
		];

		$insert = $this->db->insert('t_customer', $data);
		echo $this->viewCustomer();
	}

	public function newCust() 
	{
		$data = [
            'nama_customer' => htmlspecialchars($this->input->post('namaCust')),
            'alamat' => htmlspecialchars($this->input->post('alamatCust')),
            'no_hp' => htmlspecialchars($this->input->post('hpCust'))
		];

		$insert = $this->db->insert('t_customer', $data);
	}

	public function viewCustomer()
	{
		echo $this->view();
	}
	public function view()
	{
		$query = $this->model->get('t_customer');
		$output = '';
		
		foreach ($query as $row => $value) {
		$output .= '
				<tr>
				<td>' . ($row + 1) . '</td>
				<td>' . $value['nama_customer'] . '</td>
				<td>' . $value['alamat'] . '</td>
				<td>' . $value['no_hp'] . '</td>
				<td> <a href="javascript:void(0);" class="text-success editCustomer" data-id_customer="' . $value['id_customer'] . '" data-nama_customer="' . $value['nama_customer'] . '" data-alamat="' . $value['alamat'] . '" data-no_hp="' . $value['no_hp'] . '"><p class="text-primary d-inline mr-4" data-toggle="modal" data-target="#editCustomer"><i class="fas fa-edit" style="font-size: 18px" data-placement="bottom" title="Edit"></i></p></a> <a href="javascript:void(0);" class="text-danger hapusCustomer" data-id_customer="' . $value['id_customer'] . '"><p class="text-danger d-inline"><i class="fas fa-trash-alt text-danger" style="font-size: 18px" data-placement="bottom" title="Hapus"></i></p></a></td>
				</tr>';
		}

		return $output;
    }

    public function Update()
	{
		$id_customer 	        = htmlspecialchars($this->input->post('id_customer'));
		$editNamaCustomer       = htmlspecialchars($this->input->post('editNamaCustomer'));
		$editAlamat             = htmlspecialchars($this->input->post('editAlamat'));
		$editNoHp               = htmlspecialchars($this->input->post('editNoHp'));
			
		$where = ['id_customer' => $id_customer];

			$data = [
                'nama_customer' 	=> $editNamaCustomer,
                'alamat'            => $editAlamat,
                'no_hp'             => $editNoHp
			];
			$this->model->put('t_customer', $data, $where);
    }

    public function Delete()
    {
        $id_customer = htmlspecialchars($this->input->post('id_customer'));
        $where = ['id_customer' => $id_customer];
        $delete = $this->model->delete('t_customer', $where);
    }
}