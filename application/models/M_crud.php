<?php
defined('BASEPATH') or exit('No direct script access allowed');

class M_crud extends CI_Model
{

	function get($tabel)
	{
		return $this->db->get($tabel)->result_array();
	}

	function get_where($tabel, $where)
	{
		return $this->db->get_where($tabel, $where)->result_array();
	}

	function insert($tabel, $data)
	{
		$this->db->insert($tabel, $data);
	}

	function put($tabel, $data, $where)
	{
		$this->db->update($tabel, $data, $where);
	}

	function delete($table, $where)
	{
		$this->db->delete($table, $where);
	}

	public function createKode() // digunakan untuk membuat kode member
	{
		# code...
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

		$kodemax = str_pad($kode, 1, "0", STR_PAD_LEFT);
		$kodejadi = $kodemax;

		return $kodejadi;
	}

	function join($table, $tabel2 = null, $kondisi2 = null, $tabel3 = null, $kondisi3 = null, $tabel4 = null, $kondisi4 = null, $tabel5 = null, $kondisi5 = null, $tabel6 = null, $kondisi6 = null, $where = null, $where2 = null, $where3 = null)
	{
		if ($tabel2 != null && $tabel3 != null && $tabel4 != null && $tabel5 != null && $tabel6 != null) {
			$this->db->join($tabel2, $kondisi2);
			$this->db->join($tabel3, $kondisi3);
			$this->db->join($tabel4, $kondisi4);
			$this->db->join($tabel5, $kondisi5);
			$this->db->join($tabel6, $kondisi6);
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
	
	function barang($table, $atribut = null, $tabel2 = null, $kondisi2 = null, $tabel3 = null, $kondisi3 = null, $tabel4 = null, $kondisi4 = null, $where = null)
	{
		if ($tabel2 != null) {
			$this->db->select();
			$this->db->from($table);
			$this->db->join($tabel2, $kondisi2);
			if ($where != null) {
				# code...
				$this->db->where($where);
			}
		} elseif ($table2 != null && $tabel3 != null) {
			$this->db->select();
			$this->db->from($table);
			$this->db->join($tabel2, $kondisi2);
			$this->db->join($tabel3, $kondisi3);
			
			if ($where != null) {
				# code...
				$this->db->where($where);
			}
		} else {
			$this->db->select();
			$this->db->from($table);
			$this->db->join($tabel2, $kondisi2);
			$this->db->join($tabel3, $kondisi3);
			$this->db->join($tabel4, $kondisi4);
			if ($where != null) {
				# code...
				$this->db->where($where);
			}
		}
		return $this->db->GET()->result_array();
	}
	function kode_penawaran()
	{
		$q = $this->db->query("SELECT MAX(RIGHT(kode_penawaran,6)) AS kd_max FROM t_penawaran WHERE DATE(date_penawaran)=CURDATE()");
		$kd = "";
		if ($q->num_rows() > 0) {
			foreach ($q->result() as $k) {
				$tmp = ((int) $k->kd_max) + 1;
				$kd = sprintf("%06s", $tmp);
			}
		} else {
			$kd = "000001";
		}
		return date('dmy') . $kd;
	}

	function tampil($table = null, $where = null, $join = null){
		if ($join != null) {
			# code...
			foreach ($join as $keyj => $valuej) {
				# code...
				$this->db->join($keyj, $valuej);
			}	
		}
		if ($where != null) {
			# code...
			foreach ($where as $keyw => $dataw) {
				# code...
				$this->db->where($keyw, $dataw);
			}
		}
		$data = $this->db->get($table);
		return $data;
	}

}

/* End of file ModelName.php */
