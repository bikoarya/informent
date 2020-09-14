<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Models extends CI_Model {

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
}
