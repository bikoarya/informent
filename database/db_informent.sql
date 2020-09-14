-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 14, 2020 at 02:41 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_informent`
--

-- --------------------------------------------------------

--
-- Table structure for table `t_akun`
--

CREATE TABLE `t_akun` (
  `id_akun` int(11) NOT NULL,
  `nama_lengkap` varchar(100) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `id_role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `t_akun`
--

INSERT INTO `t_akun` (`id_akun`, `nama_lengkap`, `username`, `password`, `id_role`) VALUES
(1, 'Administrator', 'admin', '$2y$10$c0iKtNNwkGQWIqvoriikZOEladDtbVRrvdrNZpph23Bgh9/O6lgTa', 3),
(2, 'Biko Arya', 'bikoarya', '$2y$10$LqaGfbWHRjG6yE67F0X4uOaCMxENjl09n70iVZAnyLr0D84xpl/mi', 4),
(3, 'Pevita Pearce', 'pevita', '$2y$10$QKv70x4q76ElKA4T4uzi3.WLwo761./DNl97VeYk6Y1Wv0vTUyJFO', 4);

-- --------------------------------------------------------

--
-- Table structure for table `t_kuitansi`
--

CREATE TABLE `t_kuitansi` (
  `id_kuitansi` int(11) NOT NULL,
  `no_kuitansi` varchar(50) NOT NULL,
  `tanggal_kuitansi` date NOT NULL,
  `jumlah_uang` varchar(50) NOT NULL,
  `guna_pembayaran` varchar(100) NOT NULL,
  `terima_dari` varchar(100) NOT NULL,
  `id_pj` int(11) NOT NULL,
  `kode_kuitansi` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `t_kuitansi`
--

INSERT INTO `t_kuitansi` (`id_kuitansi`, `no_kuitansi`, `tanggal_kuitansi`, `jumlah_uang`, `guna_pembayaran`, `terima_dari`, `id_pj`, `kode_kuitansi`) VALUES
(32, '67', '2020-09-14', '2.500.000', 'Pembelian alat elektronik', 'Bank BCA', 1, 'KUI0001'),
(34, '34', '2020-09-27', '5.000.000', 'Membayar karyawan', 'Si Bos', 2, 'KUI0002'),
(35, '78', '2020-09-07', '7.000.000', 'Beli jajan', 'Mamak', 1, 'KUI0003'),
(36, '4567', '2020-09-21', '5.000.000', 'Beli laptop', 'Aku', 2, 'KUI0004');

-- --------------------------------------------------------

--
-- Table structure for table `t_penanggungjawab`
--

CREATE TABLE `t_penanggungjawab` (
  `id_pj` int(11) NOT NULL,
  `nama_pj` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `t_penanggungjawab`
--

INSERT INTO `t_penanggungjawab` (`id_pj`, `nama_pj`) VALUES
(1, 'Biko Arya Maulana'),
(2, 'Pevita Pearce');

-- --------------------------------------------------------

--
-- Table structure for table `t_rekening`
--

CREATE TABLE `t_rekening` (
  `id_rekening` int(11) NOT NULL,
  `nama_bank` varchar(50) NOT NULL,
  `no_rekening` varchar(20) NOT NULL,
  `atas_nama` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `t_rekening`
--

INSERT INTO `t_rekening` (`id_rekening`, `nama_bank`, `no_rekening`, `atas_nama`) VALUES
(1, 'BCA', '1234567890', 'Biko Arya'),
(2, 'BRI', '5871530778365', 'Pevita Pearce'),
(3, 'BTN', '906307466712985', 'Rafa Athalla');

-- --------------------------------------------------------

--
-- Table structure for table `t_role`
--

CREATE TABLE `t_role` (
  `id_role` int(11) NOT NULL,
  `nama_role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `t_role`
--

INSERT INTO `t_role` (`id_role`, `nama_role`) VALUES
(3, 'Administrator'),
(4, 'Pengelola');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `t_akun`
--
ALTER TABLE `t_akun`
  ADD PRIMARY KEY (`id_akun`);

--
-- Indexes for table `t_kuitansi`
--
ALTER TABLE `t_kuitansi`
  ADD PRIMARY KEY (`id_kuitansi`);

--
-- Indexes for table `t_penanggungjawab`
--
ALTER TABLE `t_penanggungjawab`
  ADD PRIMARY KEY (`id_pj`);

--
-- Indexes for table `t_rekening`
--
ALTER TABLE `t_rekening`
  ADD PRIMARY KEY (`id_rekening`);

--
-- Indexes for table `t_role`
--
ALTER TABLE `t_role`
  ADD PRIMARY KEY (`id_role`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `t_akun`
--
ALTER TABLE `t_akun`
  MODIFY `id_akun` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `t_kuitansi`
--
ALTER TABLE `t_kuitansi`
  MODIFY `id_kuitansi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `t_penanggungjawab`
--
ALTER TABLE `t_penanggungjawab`
  MODIFY `id_pj` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `t_rekening`
--
ALTER TABLE `t_rekening`
  MODIFY `id_rekening` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `t_role`
--
ALTER TABLE `t_role`
  MODIFY `id_role` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
