-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 24, 2020 at 09:28 PM
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
(3, 'Pevita Pearce', 'pevita', '$2y$10$wodqSv72Nbtytt5Rgm56EevMtHl3NxJKzs3LMFDuKKfZDWs9LDgpq', 4);

-- --------------------------------------------------------

--
-- Table structure for table `t_barang`
--

CREATE TABLE `t_barang` (
  `id_barang` int(11) NOT NULL,
  `nama_barang` varchar(100) NOT NULL,
  `spesifikasi` text NOT NULL,
  `nama_satuan` varchar(50) NOT NULL,
  `qty` int(20) NOT NULL,
  `harga` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `t_barang`
--

INSERT INTO `t_barang` (`id_barang`, `nama_barang`, `spesifikasi`, `nama_satuan`, `qty`, `harga`) VALUES
(32, 'Sempak kasogi', 'Autentik', 'UNIT', 2, 75000),
(33, 'Sepatu Ardiles', 'Warna hitam, ukuran 40', 'UNIT', 1, 250000),
(35, 'Kaos Nevada', 'Cotton, size L', 'UNIT', 1, 150000),
(42, 'Laptop ASUS', 'Core i7, SSD 512 GB PCIe NVMe, AMD Ryzen 7-3750H, 144 Hz', 'UNIT', 1, 15000000),
(43, 'sdfdfdfdfdfdfdf', 'dfdfdfdfd', 'LEMBAR', 2, 100000);

-- --------------------------------------------------------

--
-- Table structure for table `t_customer`
--

CREATE TABLE `t_customer` (
  `id_customer` int(11) NOT NULL,
  `nama_customer` varchar(100) NOT NULL,
  `alamat` varchar(100) NOT NULL,
  `no_hp` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `t_customer`
--

INSERT INTO `t_customer` (`id_customer`, `nama_customer`, `alamat`, `no_hp`) VALUES
(1, 'Anya Geraldine', 'Malang, Indonesia', '081259464280'),
(2, 'Chelsea Islan', 'Kemang, Jakarta Selatan', '081300750875'),
(3, 'Pevita Pearce', 'Menteng, Jakarta Pusat', '081550785365');

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
(97, '0001', '2020-10-13', '5000000', 'asknfals', 'asmf', 1, 'KUI0001'),
(98, '0002', '2020-10-14', '3000000', 'klansf', 'klnasfss', 4, 'KUI0002'),
(99, '0003', '2020-10-20', '300000000', 'ljasnf', 'ljnamsf', 2, 'KUI0003');

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
(2, 'Pevita Pearce'),
(4, 'Yuniar A. Arsandi S.T.');

-- --------------------------------------------------------

--
-- Table structure for table `t_penawaran`
--

CREATE TABLE `t_penawaran` (
  `id_penawaran` int(11) NOT NULL,
  `kode_penawaran` varchar(50) NOT NULL,
  `id_barang` int(11) NOT NULL,
  `qty_penawaran` int(50) NOT NULL,
  `id_customer` int(11) NOT NULL,
  `id_pj` int(11) NOT NULL,
  `no_penawaran` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `periode` int(20) NOT NULL,
  `hal` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `t_penawaran`
--

INSERT INTO `t_penawaran` (`id_penawaran`, `kode_penawaran`, `id_barang`, `qty_penawaran`, `id_customer`, `id_pj`, `no_penawaran`, `date`, `periode`, `hal`) VALUES
(69, 'PWR0001', 32, 1, 3, 4, '112/INF/XII/2020', '2020-10-24', 15, 'Penawaran Pengadaan Barang'),
(70, 'PWR0001', 35, 2, 3, 4, '112/INF/XII/2020', '2020-10-24', 15, 'Penawaran Pengadaan Barang'),
(71, 'PWR0001', 33, 1, 3, 4, '112/INF/XII/2020', '2020-10-24', 15, 'Penawaran Pengadaan Barang'),
(72, 'PWR0002', 32, 1, 1, 1, '567', '2020-10-21', 10, 'asf'),
(73, 'PWR0002', 33, 2, 1, 1, '567', '2020-10-21', 10, 'asf'),
(74, 'PWR0002', 35, 1, 1, 1, '567', '2020-10-21', 10, 'asf'),
(75, 'PWR0003', 43, 2, 1, 2, '44', '2020-10-24', 11, 'xzds');

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

-- --------------------------------------------------------

--
-- Table structure for table `t_satuan`
--

CREATE TABLE `t_satuan` (
  `id_satuan` int(11) NOT NULL,
  `nama_satuan` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `t_satuan`
--

INSERT INTO `t_satuan` (`id_satuan`, `nama_satuan`) VALUES
(1, 'UNIT'),
(2, 'LEMBAR'),
(4, 'INCHI'),
(5, 'METER');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `t_akun`
--
ALTER TABLE `t_akun`
  ADD PRIMARY KEY (`id_akun`);

--
-- Indexes for table `t_barang`
--
ALTER TABLE `t_barang`
  ADD PRIMARY KEY (`id_barang`);

--
-- Indexes for table `t_customer`
--
ALTER TABLE `t_customer`
  ADD PRIMARY KEY (`id_customer`);

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
-- Indexes for table `t_penawaran`
--
ALTER TABLE `t_penawaran`
  ADD PRIMARY KEY (`id_penawaran`);

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
-- Indexes for table `t_satuan`
--
ALTER TABLE `t_satuan`
  ADD PRIMARY KEY (`id_satuan`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `t_akun`
--
ALTER TABLE `t_akun`
  MODIFY `id_akun` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `t_barang`
--
ALTER TABLE `t_barang`
  MODIFY `id_barang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `t_customer`
--
ALTER TABLE `t_customer`
  MODIFY `id_customer` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `t_kuitansi`
--
ALTER TABLE `t_kuitansi`
  MODIFY `id_kuitansi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

--
-- AUTO_INCREMENT for table `t_penanggungjawab`
--
ALTER TABLE `t_penanggungjawab`
  MODIFY `id_pj` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `t_penawaran`
--
ALTER TABLE `t_penawaran`
  MODIFY `id_penawaran` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

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

--
-- AUTO_INCREMENT for table `t_satuan`
--
ALTER TABLE `t_satuan`
  MODIFY `id_satuan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
