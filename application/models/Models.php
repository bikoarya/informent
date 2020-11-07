<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Models extends CI_Model {

	var $table = 't_kuitansi';
	var $column_order = array(null, 'no_kuitansi','tanggal_kuitansi','jumlah_uang','guna_pembayaran','terima_dari','id_pj'); //set column field database for datatable orderable
    var $column_search = array('no_kuitansi','guna_pembayaran','terima_dari','tanggal_kuitansi', 'nama_pj'); //set column field database for datatable searchable 
	var $order = array('id_kuitansi' => 'asc'); // default order

	public function getdata($select = null, $tabel = null, $where = null, $join = null)
	{
		if ($select != null) {
			# code...
			$this->db->select($select);
		} else {
			# code...
			$this->db->select();
		}

		if ($tabel != null) {
			# code...
			$this->db->from($tabel);
		}
		if ($where != null) {
			# code...
			foreach ($where as $keywer => $valuewer) {
				# code...
				$this->db->where($keywer, $valuewer);
			}
		}

		if ($join != null) {
			# code...
			foreach ($join as $keyjoin => $valuejoin) {
				# code...
				$this->db->join($keyjoin, $valuejoin);
			}
		}
		return $this->db->get();
	}
	
	private function _get_datatables_query()
    {
		$this->db->select('*');
    	$this->db->from('t_kuitansi');
		$this->db->join('t_penanggungjawab', 't_penanggungjawab.id_pj = t_kuitansi.id_pj');
 
        $i = 0;
     
        foreach ($this->column_search as $item) // loop column 
        {
            if($_POST['search']['value']) // if datatable send POST for search
            {
                 
                if($i===0) // first loop
                {
                    $this->db->group_start(); // open bracket. query Where with OR clause better with bracket. because maybe can combine with other WHERE with AND.
                    $this->db->like($item, $_POST['search']['value']);
                }
                else
                {
                    $this->db->or_like($item, $_POST['search']['value']);
                }
 
                if(count($this->column_search) - 1 == $i) //last loop
                    $this->db->group_end(); //close bracket
            }
            $i++;
        }
         
        if(isset($_POST['order'])) // here order processing
        {
            $this->db->order_by($this->column_order[$_POST['order']['0']['column']], $_POST['order']['0']['dir']);
        } 
        else if(isset($this->order))
        {
            $order = $this->order;
            $this->db->order_by(key($order), $order[key($order)]);
        }
    }
 
    function get_datatables()
    {
        $this->_get_datatables_query();
        if($_POST['length'] != -1)
        $this->db->limit($_POST['length'], $_POST['start']);
        $query = $this->db->get();
        return $query->result();
	}
	
	function count_filtered()
    {
        $this->_get_datatables_query();
        $query = $this->db->get();
        return $query->num_rows();
    }
 
    public function count_all()
    {
        $this->db->from($this->table);
        return $this->db->count_all_results();
    }

    function get($tabel)
	{
		return $this->db->get($tabel)->result_array();
	}

	function get_where($tabel, $where)
	{
		return $this->db->get_where($tabel, $where);
	}

	function insert($tabel, $data)
	{
		$this->db->insert($tabel, $data);
	}

	function put($tabel, $data, $where)
	{
		$this->db->where($where);
		$this->db->update($tabel, $data);
	}

	function delete($table = null, $where = null)
	{
		$this->db->delete($table, $where);
	}

	function joins($table = null, $where = null, $join = null){
		if ($join != null) {
			foreach ($join as $keyj => $valuej) {
				$this->db->join($keyj, $valuej);
			}	
		}
		if ($where != null) {
			foreach ($where as $keyw => $dataw) {
				$this->db->where($keyw, $dataw);
			}
		}
		$data = $this->db->get($table);
		return $data;
	}

	public function join($table, $tabel2 = null, $kondisi2 = null, $tabel3 = null, $kondisi3 = null, $tabel4 = null, $kondisi4 = null, $tabel5 = null, $kondisi5 = null, $tabel6 = null, $kondisi6 = null, $tabel7 = null, $kondisi7 = null, $where = null, $where2 = null, $where3 = null)
	{
		if ($tabel2 != null && $tabel3 != null && $tabel4 != null && $tabel5 != null && $tabel6 != null && $tabel7 != null) {
			$this->db->join($tabel2, $kondisi2);
			$this->db->join($tabel3, $kondisi3);
			$this->db->join($tabel4, $kondisi4);
			$this->db->join($tabel5, $kondisi5);
			$this->db->join($tabel6, $kondisi6);
			$this->db->join($tabel7, $kondisi7);
			if ($where != null && $where2 != null && $where3 != null) {
				# code...
				$this->db->where($where);
				$this->db->where($where2);
				$this->db->where($where3);
			} elseif ($where != null && $where2 != null) {
				$this->db->where($where);
				$this->db->where($where2);
			} elseif ($where != null) {
				$this->db->where($where);
			} elseif ($where2 != null) {
				$this->db->where($where2);
			} elseif ($where3 != null) {
				$this->db->where($where3);
			} else {
			}
		} elseif ($tabel2 != null && $tabel3 != null && $tabel4 != null) {
			$this->db->join($tabel2, $kondisi2);
			$this->db->join($tabel3, $kondisi3);
			$this->db->join($tabel4, $kondisi4);
			if ($where != null && $where2 != null && $where3 != null) {
				# code...
				$this->db->where($where);
				$this->db->where($where2);
				$this->db->where($where3);
			} elseif ($where != null && $where2 != null) {
				$this->db->where($where);
				$this->db->where($where2);
			} elseif ($where != null) {
				$this->db->where($where);
			} elseif ($where2 != null) {
				$this->db->where($where2);
			} elseif ($where3 != null) {
				$this->db->where($where3);
			} else {
			}
		} elseif ($tabel2 != null && $tabel3 != null) {
			$this->db->join($tabel2, $kondisi2);
			$this->db->join($tabel3, $kondisi3);
			if ($where != null && $where2 != null && $where3 != null) {
				# code...
				$this->db->where($where);
				$this->db->where($where2);
				$this->db->where($where3);
			} elseif ($where != null && $where2 != null) {
				$this->db->where($where);
				$this->db->where($where2);
			} elseif ($where != null) {
				$this->db->where($where);
			} elseif ($where2 != null) {
				$this->db->where($where2);
			} elseif ($where3 != null) {
				$this->db->where($where3);
			} else {
			}
		} else {
			$this->db->join($tabel2, $kondisi2);
			if ($where != null && $where2 != null && $where3 != null) {
				# code...
				$this->db->where($where);
				$this->db->where($where2);
				$this->db->where($where3);
			} elseif ($where != null && $where2 != null) {
				$this->db->where($where);
				$this->db->where($where2);
			} elseif ($where != null) {
				$this->db->where($where);
			} elseif ($where2 != null) {
				$this->db->where($where2);
			} elseif ($where3 != null) {
				$this->db->where($where3);
			} else {
			}
		}

		return $this->db->GET($table);
	}

	function kodePenawaran()
	{
		$this->db->SELECT('RIGHT(t_penawaran.kode_penawaran,4) as kode', FALSE);
		$this->db->order_by('kode_penawaran', 'DESC');
		$this->db->limit(1);
		$query = $this->db->get('t_penawaran');
		if ($query->num_rows() <> 0) {
			// jika kodesudah ada
			$data = $query->row();
			$kode = intval($data->kode) + 1;
		} else {
			//jika kode belum ada
			$kode = 1;
		}
		$kodemax = str_pad($kode, 4, "0", STR_PAD_LEFT);
		$kodejadi = "PWR" . $kodemax;

		return $kodejadi;
	}

	function kode_kuitansi()
	{
		$this->db->SELECT('RIGHT(t_kuitansi.kode_kuitansi,4) as kode', FALSE);
		$this->db->order_by('kode_kuitansi', 'DESC');
		$this->db->limit(1);
		$query = $this->db->get('t_kuitansi');
		if ($query->num_rows() <> 0) {
			// jika kodesudah ada
			$data = $query->row();
			$kode = intval($data->kode) + 1;
		} else {
			//jika kode belum ada
			$kode = 1;
		}
		$kodemax = str_pad($kode, 4, "0", STR_PAD_LEFT);
		$kodejadi = "KUI" . $kodemax;

		return $kodejadi;
	}

	public function kode_invoice()
	{
		$this->db->SELECT('RIGHT(t_invoice.kode_invoice,4) as kode', FALSE);
		$this->db->order_by('kode_invoice', 'DESC');
		$this->db->limit(1);
		$query = $this->db->get('t_invoice');
		if ($query->num_rows() <> 0) {
			// jika kodesudah ada
			$data = $query->row();
			$kode = intval($data->kode) + 1;
		} else {
			//jika kode belum ada
			$kode = 1;
		}
		$kodemax = str_pad($kode, 4, "0", STR_PAD_LEFT);
		$kodejadi = "INV" . $kodemax;

		return $kodejadi;
	}

	function no_kuitansi()
	{
		$this->db->SELECT('RIGHT(t_kuitansi.no_kuitansi,4) as kode', FALSE);
		$this->db->order_by('no_kuitansi', 'DESC');
		$this->db->limit(1);
		$query = $this->db->get('t_kuitansi');
		if ($query->num_rows() <> 0) {
			// jika kodesudah ada
			$data = $query->row();
			$kode = intval($data->kode) + 1;
		} else {
			//jika kode belum ada
			$kode = 1;
		}
		$kodemax = str_pad($kode, 4, "0", STR_PAD_LEFT);
		$kodejadi = $kodemax;

		return $kodejadi;
	}

	public function id_barang() // digunakan untuk membuat kode member
	{
		$this->db->SELECT('RIGHT(t_barang.id_barang,4) as kode', FALSE);
		$this->db->order_by('id_barang', 'DESC');
		$this->db->limit(1);
		$query = $this->db->get('t_barang');
		if ($query->num_rows() <> 0) {
			// jika kodesudah ada
			$data = $query->row();
			$kode = intval($data->kode) + 1;
		} else {
			//jika kode belum ada
			$kode = 1;
		}
		$kodemax = str_pad($kode, 4, "0", STR_PAD_LEFT);
		$kodejadi = "BRG" . $kodemax;

		return $kodejadi;

		// $this->db->SELECT('RIGHT(t_barang.id_barang,4) as kode', FALSE);
		// $this->db->order_by('id_barang', 'DESC');
		// $this->db->limit(1);
		// $query = $this->db->get('t_barang');
		// if ($query->num_rows() <> 0) {
		// 	// jika kodesudah ada
		// 	$data = $query->row();
		// 	$kode = intval($data->kode) + 1;
		// } else {
		// 	//jika kode belum ada
		// 	$kode = 1;
		// }

		// $kodemax = str_pad($kode, 1, "0", STR_PAD_LEFT);
		// $kodejadi = $kodemax;
		// // var_dump($kodejadi);die;

		// return $kodejadi;
	}

	function penyebut($nilai) {
		$nilai = abs($nilai);
		$huruf = array("", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas");
		$temp = "";
		if ($nilai < 12) {
			$temp = " ". $huruf[$nilai];
		} else if ($nilai <20) {
			$temp = $this->penyebut($nilai - 10). " belas";
		} else if ($nilai < 100) {
			$temp = $this->penyebut($nilai/10)." puluh". $this->penyebut($nilai % 10);
		} else if ($nilai < 200) {
			$temp = " seratus" . $this->penyebut($nilai - 100);
		} else if ($nilai < 1000) {
			$temp = $this->penyebut($nilai/100) . " ratus" . $this->penyebut($nilai % 100);
		} else if ($nilai < 2000) {
			$temp = " seribu" . $this->penyebut($nilai - 1000);
		} else if ($nilai < 1000000) {
			$temp = $this->penyebut($nilai/1000) . " ribu" . $this->penyebut($nilai % 1000);
		} else if ($nilai < 1000000000) {
			$temp = $this->penyebut($nilai/1000000) . " juta" . $this->penyebut($nilai % 1000000);
		} else if ($nilai < 1000000000000) {
			$temp = $this->penyebut($nilai/1000000000) . " milyar" . $this->penyebut(fmod($nilai,1000000000));
		} else if ($nilai < 1000000000000000) {
			$temp = $this->penyebut($nilai/1000000000000) . " trilyun" . $this->penyebut(fmod($nilai,1000000000000));
		}     
		return $temp;
	}
	
	function terbilang($nilai) {
		if($nilai<0) {
			$hasil = "minus ". trim($this->penyebut($nilai));
		} else {
			$hasil = trim($this->penyebut($nilai));
		}     		
		return $hasil;
	}
}
