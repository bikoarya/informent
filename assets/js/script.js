// Set Timer Alert Login
window.setTimeout(function () {
	$("#alert").alert('close');
}, 2000);

// Validasi Huruf
jQuery.validator.addMethod("lettersonly", function (value, element) {
	return this.optional(element) || /^[a-z]+$/i.test(value);
}, "Harap masukkan karakter/huruf");

$('#showCart').load(site_url + 'Penawaran/load');
$("#grandTotal").load(site_url + "Penawaran/grandTotal");

// Tambah Role
$("#showRole").load(site_url + "Pengaturan/Role/viewRole");
$("#simpanRole").click(function () {
	$("#formRole").validate({
		rules: {
			namaRole: {
				required: true
			}
		},
		messages: {
			namaRole: {
				required: "Masukkan nama role!"
			}
		},
		errorElement: "span",
		errorPlacement: function (error, element) {
			error.addClass("invalid-feedback");
			element.closest(".form-group").append(error);
		},
		highlight: function (element, errorClass, validClass) {
			$(element).addClass("is-invalid");
		},
		unhighlight: function (element, errorClass, validClass) {
			$(element).removeClass("is-invalid");
		},
		submitHandler: function (form) {
			let namaRole = $("#namaRole").val();
			$.ajax({
				url: site_url + "Pengaturan/Role/insert",
				type: "POST",
				data: {
					namaRole: namaRole
				},
				success: function (data) {
					$("#namaRole").val("");
					$("#showRole").html(data);
					$("#addRole").modal("hide");

					Swal.fire(
						'Berhasil!',
						'Data berhasil ditambahkan.',
						'success'
					)
				}
			});
		}
	});
});

// Kirim Value Edit Role
$(document).on('click', '.editRole', function () {
	var id_role = $(this).attr('data-id_role');
	var editRole = $(this).attr('data-nama_role');

	$("#id_role").val(id_role);
	$("#editNamaRole").val(editRole);
});

// Update Role
$("#editRole").click(function () {
	$("#formEditRole").validate({
		rules: {
			editNamaRole: {
				required: true
			}
		},
		messages: {
			editNamaRole: {
				required: "Masukkan nama role!"
			}
		},
		errorElement: "span",
		errorPlacement: function (error, element) {
			error.addClass("invalid-feedback");
			element.closest(".form-group").append(error);
		},
		highlight: function (element, errorClass, validClass) {
			$(element).addClass("is-invalid");
		},
		unhighlight: function (element, errorClass, validClass) {
			$(element).removeClass("is-invalid");
		},
		submitHandler: function (form) {
			let id_role = $("#id_role").val();
			let editNamaRole = $("#editNamaRole").val();

			const swalWithBootstrapButtons = Swal.mixin({
				customClass: {
					confirmButton: 'btn btn-primary',
					cancelButton: 'btn btn-info mr-3'
				},
				buttonsStyling: false
			})

			swalWithBootstrapButtons.fire({
				title: 'Apakah Anda Yakin?',
				text: "Mengubah Data",
				icon: 'question',
				showCancelButton: true,
				confirmButtonText: 'Ya, Ubah',
				cancelButtonText: 'Batal',
				reverseButtons: true
			}).then((result) => {
				if (result.value) {

					$.ajax({
						type: "POST",
						url: site_url + "Pengaturan/Role/update",
						data: {
							id_role: id_role,
							editNamaRole: editNamaRole
						},
						success: function (data) {
							$("#editNamaRole").val("");
							$("#showRole").load(site_url + "Pengaturan/Role/viewRole");
							$("#editRole").modal("hide");

							Swal.fire(
								'Berhasil!',
								'Data berhasil diubah.',
								'success'
							)
						}
					});
				}
			});
		}
	});
});

// Hapus Role
$("#showRole").on('click', '.hapusRole', function () {
	var id_role = $(this).data("id_role");
	const swalWithBootstrapButtons = Swal.mixin({
		customClass: {
			confirmButton: 'btn btn-primary',
			cancelButton: 'btn btn-info mr-3'
		},
		buttonsStyling: false
	});

	swalWithBootstrapButtons.fire({
		title: 'Apakah Anda Yakin?',
		text: "Menghapus Data",
		icon: 'warning',
		showCancelButton: true,
		confirmButtonText: 'Ya, Hapus',
		cancelButtonText: 'Batal',
		reverseButtons: true
	}).then((result) => {
		if (result.value) {

			$.ajax({
				type: "POST",
				url: site_url + "Pengaturan/Role/delete",
				data: {
					id_role: id_role
				},
				success: function (data) {
					$("#showRole").load(site_url + "Pengaturan/Role/viewRole");

					Swal.fire(
						'Berhasil!',
						'Data berhasil dihapus.',
						'success'
					)
				}
			});
		}
	});
});

// Tambah Akun
$("#showAkun").load(site_url + "Pengaturan/Akun/viewAkun");
$("#simpanAkun").click(function () {
	$("#formAkun").validate({
		rules: {
			namaLengkap: {
				required: true
			},
			username: {
				required: true
			},
			password: {
				required: true,
				minlength: 4,
				maxlength: 16
			},
			password2: {
				required: true,
				equalTo: "#password"
			},
			role: {
				required: true
			}
		},
		messages: {
			namaLengkap: {
				required: "Masukkan nama lengkap!"
			},
			username: {
				required: "Masukkan username!"
			},
			password: {
				required: "Masukkan password!",
				minlength: "Masukkan minimal 4 karakter!",
				maxlength: "Masukkan maksimal 16 karakter!"
			},
			password2: {
				required: "Masukkan konfirmasi password!",
				equalTo: "Password tidak sama!"
			},
			role: {
				required: "Masukkan nama role!"
			}
		},
		errorElement: "span",
		errorPlacement: function (error, element) {
			error.addClass("invalid-feedback");
			element.closest(".form-group").append(error);
		},
		highlight: function (element, errorClass, validClass) {
			$(element).addClass("is-invalid");
		},
		unhighlight: function (element, errorClass, validClass) {
			$(element).removeClass("is-invalid");
		},
		submitHandler: function (form) {
			let namaLengkap = $("#namaLengkap").val();
			let username = $("#username").val();
			let password = $("#password").val();
			let role = $("#role").val();

			$.ajax({
				url: site_url + "Pengaturan/Akun/insert",
				method: "POST",
				data: {
					namaLengkap: namaLengkap,
					username: username,
					password: password,
					role: role
				},
				success: function (data) {
					$("#showAkun").html(data);
					$("#addAkun").modal("hide");
					$("#namaLengkap").val("");
					$("#username").val("");
					$("#password").val("");
					$("#role").val("");

					Swal.fire(
						'Berhasil!',
						'Data berhasil ditambahkan.',
						'success'
					)
				}
			});
		}
	});
});

// Kirim Value Edit Akun
$(document).on('click', '.editAkun', function () {
	var id_akun = $(this).attr('data-id_akun');
	var namaLengkap = $(this).attr('data-nama_lengkap');
	var username = $(this).attr('data-username');
	var role = $(this).attr('data-role');
	var password = $(this).attr('data-password');

	$("#id_akun").val(id_akun);
	$("#editNamaLengkap").val(namaLengkap);
	$("#editUsername").val(username);
	$("#oldPassword").val(password);
	$("#editRole")
		.val(role)
		.trigger("change");
});

// Update Akun
$("#editAkun").click(function () {
	$("#formEditAkun").validate({
		rules: {
			editNamaLengkap: {
				required: true
			},
			editUsername: {
				required: true
			},
			editRole: {
				required: true
			},
			editPassword2: {
				equalTo: "#newPassword"
			}
		},
		messages: {
			editNamaLengkap: {
				required: "Masukkan nama lengkap!"
			},
			editUsername: {
				required: "Masukkan username!"
			},
			editRole: {
				required: "Masukkan nama role!"
			},
			editPassword2: {
				equalTo: "Password tidak sama!"
			}
		},
		errorElement: "span",
		errorPlacement: function (error, element) {
			error.addClass("invalid-feedback");
			element.closest(".form-group").append(error);
		},
		highlight: function (element, errorClass, validClass) {
			$(element).addClass("is-invalid");
		},
		unhighlight: function (element, errorClass, validClass) {
			$(element).removeClass("is-invalid");
		},
		submitHandler: function (form) {
			let id_akun = $("#id_akun").val();
			let editNamaLengkap = $("#editNamaLengkap").val();
			let editUsername = $("#editUsername").val();
			let newPassword = $("#newPassword").val();
			let oldPassword = $("#oldPassword").val();
			let editRole = $("#editRole").val();

			const swalWithBootstrapButtons = Swal.mixin({
				customClass: {
					confirmButton: 'btn btn-primary',
					cancelButton: 'btn btn-info mr-3'
				},
				buttonsStyling: false
			})

			swalWithBootstrapButtons.fire({
				title: 'Apakah Anda Yakin?',
				text: "Mengubah Data",
				icon: 'question',
				showCancelButton: true,
				confirmButtonText: 'Ya, Ubah',
				cancelButtonText: 'Batal',
				reverseButtons: true
			}).then((result) => {
				if (result.value) {

					$.ajax({
						type: "POST",
						url: site_url + "Pengaturan/Akun/update",
						data: {
							id_akun: id_akun,
							editNamaLengkap: editNamaLengkap,
							editUsername: editUsername,
							newPassword: newPassword,
							oldPassword: oldPassword,
							editRole: editRole
						},
						success: function (data) {
							$("#editNamaLengkap").val("");
							$("#editUsername").val("");
							$("#newPassword").val("");
							$("#oldPassword").val("");
							$("#editRole")
								.val("")
								.trigger("change");
							$("#showAkun").load(site_url + "Pengaturan/Akun/viewAkun");
							$("#editAkun").modal("hide");

							Swal.fire(
								'Berhasil!',
								'Data berhasil diubah.',
								'success'
							)
						}
					});
				}
			});
		}
	});
});

// Hapus Akun
$("#showAkun").on('click', '.hapusAkun', function () {
	var id_akun = $(this).data("id_akun");
	const swalWithBootstrapButtons = Swal.mixin({
		customClass: {
			confirmButton: 'btn btn-primary',
			cancelButton: 'btn btn-info mr-3'
		},
		buttonsStyling: false
	})

	swalWithBootstrapButtons.fire({
		title: 'Apakah Anda Yakin?',
		text: "Menghapus Data",
		icon: 'warning',
		showCancelButton: true,
		confirmButtonText: 'Ya, Hapus',
		cancelButtonText: 'Batal',
		reverseButtons: true
	}).then((result) => {
		if (result.value) {

			$.ajax({
				type: "POST",
				url: site_url + "Pengaturan/Akun/delete",
				data: {
					id_akun: id_akun
				},
				success: function (data) {
					$("#showAkun").load(site_url + "Pengaturan/Akun/viewAkun");

					Swal.fire(
						'Berhasil!',
						'Data berhasil dihapus.',
						'success'
					)
				}
			});
		}
	});
});

// Tambah Rekening
$("#showRekening").load(site_url + "Master/Rekening/viewRekening");
$("#simpanRekening").click(function () {
	$("#formRekening").validate({
		rules: {
			namaBank: {
				required: true
			},
			norek: {
				required: true,
				number: true,
				minlength: 10,
				maxlength: 16
			},
			atasNama: {
				required: true
			}
		},
		messages: {
			namaBank: {
				required: "Masukkan nama bank!"
			},
			norek: {
				required: "Masukkan nomor rekening!",
				number: "Harap masukkan angka!",
				minlength: "Masukkan minimal 10 digit",
				maxlength: "Masukkan maksimal 16 digit"
			},
			atasNama: {
				required: "Masukkan nama!"
			}
		},
		errorElement: "span",
		errorPlacement: function (error, element) {
			error.addClass("invalid-feedback");
			element.closest(".form-group").append(error);
		},
		highlight: function (element, errorClass, validClass) {
			$(element).addClass("is-invalid");
		},
		unhighlight: function (element, errorClass, validClass) {
			$(element).removeClass("is-invalid");
		},
		submitHandler: function (form) {
			let namaBank = $("#namaBank").val();
			let norek = $("#norek").val();
			let atasNama = $("#atasNama").val();
			$.ajax({
				url: site_url + "Master/Rekening/insert",
				type: "POST",
				data: {
					namaBank: namaBank,
					norek: norek,
					atasNama: atasNama
				},
				success: function (data) {
					$("#showRekening").html(data);
					$("#addRekening").modal("hide");
					$("#namaBank").val("");
					$("#norek").val("");
					$("#atasNama").val("");

					Swal.fire(
						'Berhasil!',
						'Data berhasil ditambahkan.',
						'success'
					)
				}
			});
		}
	});
});

// Kirim Value Edit Rekening
$(document).on('click', '.editRekening', function () {
	var id_rekening = $(this).attr('data-id_rekening');
	var namaBank = $(this).attr('data-nama_bank');
	var norek = $(this).attr('data-norek');
	var atasNama = $(this).attr('data-atas_nama');

	$("#id_rekening").val(id_rekening);
	$("#editNamaBank").val(namaBank);
	$("#editNorek").val(norek);
	$("#editAtasNama").val(atasNama);
});

// Update Rekening
$("#editRekening").click(function () {
	$("#formEditRekening").validate({
		rules: {
			editNamaBank: {
				required: true
			},
			editNorek: {
				required: true,
				number: true,
				minlength: 10,
				maxlength: 16
			},
			editAtasNama: {
				required: true
			}
		},
		messages: {
			editNamaBank: {
				required: "Masukkan nama bank!"
			},
			editNorek: {
				required: "Masukkan nomor rekening!",
				number: "Harap masukkan angka!",
				minlength: "Masukkan minimal 10 digit",
				maxlength: "Masukkan maksimal 16 digit"
			},
			editAtasNama: {
				required: "Masukkan nama!"
			}
		},
		errorElement: "span",
		errorPlacement: function (error, element) {
			error.addClass("invalid-feedback");
			element.closest(".form-group").append(error);
		},
		highlight: function (element, errorClass, validClass) {
			$(element).addClass("is-invalid");
		},
		unhighlight: function (element, errorClass, validClass) {
			$(element).removeClass("is-invalid");
		},
		submitHandler: function (form) {
			let id_rekening = $("#id_rekening").val();
			let editNamaBank = $("#editNamaBank").val();
			let editNorek = $("#editNorek").val();
			let editAtasNama = $("#editAtasNama").val();

			const swalWithBootstrapButtons = Swal.mixin({
				customClass: {
					confirmButton: 'btn btn-primary',
					cancelButton: 'btn btn-info mr-3'
				},
				buttonsStyling: false
			})

			swalWithBootstrapButtons.fire({
				title: 'Apakah Anda Yakin?',
				text: "Mengubah Data",
				icon: 'question',
				showCancelButton: true,
				confirmButtonText: 'Ya, Ubah',
				cancelButtonText: 'Batal',
				reverseButtons: true
			}).then((result) => {
				if (result.value) {

					$.ajax({
						type: "POST",
						url: site_url + "Master/Rekening/update",
						data: {
							id_rekening: id_rekening,
							editNamaBank: editNamaBank,
							editNorek: editNorek,
							editAtasNama: editAtasNama
						},
						success: function (data) {
							$("#editNamaBank").val("");
							$("#editNorek").val("");
							$("#editAtasNama").val("");
							$("#showRekening").load(site_url + "Master/Rekening/viewRekening");
							$("#editRekening").modal("hide");

							Swal.fire(
								'Berhasil!',
								'Data berhasil diubah.',
								'success'
							)
						}
					});
				}
			});
		}
	});
});

// Hapus Rekening
$("#showRekening").on('click', '.hapusRekening', function () {
	var id_rekening = $(this).data("id_rekening");
	const swalWithBootstrapButtons = Swal.mixin({
		customClass: {
			confirmButton: 'btn btn-primary',
			cancelButton: 'btn btn-info mr-3'
		},
		buttonsStyling: false
	})

	swalWithBootstrapButtons.fire({
		title: 'Apakah Anda Yakin?',
		text: "Menghapus Data",
		icon: 'warning',
		showCancelButton: true,
		confirmButtonText: 'Ya, Hapus',
		cancelButtonText: 'Batal',
		reverseButtons: true
	}).then((result) => {
		if (result.value) {

			$.ajax({
				type: "POST",
				url: site_url + "Master/Rekening/delete",
				data: {
					id_rekening: id_rekening
				},
				success: function (data) {
					$("#showRekening").load(site_url + "Master/Rekening/viewRekening");

					Swal.fire(
						'Berhasil!',
						'Data berhasil dihapus.',
						'success'
					)
				}
			});
		}
	});
});

// Tambah Penanggung Jawab
$("#showPj").load(site_url + "Master/PenanggungJawab/viewPj");
$("#simpanPj").click(function () {
	$("#formPj").validate({
		rules: {
			namaPj: {
				required: true
			}
		},
		messages: {
			namaPj: {
				required: "Masukkan nama penanggung jawab!"
			}
		},
		errorElement: "span",
		errorPlacement: function (error, element) {
			error.addClass("invalid-feedback");
			element.closest(".form-group").append(error);
		},
		highlight: function (element, errorClass, validClass) {
			$(element).addClass("is-invalid");
		},
		unhighlight: function (element, errorClass, validClass) {
			$(element).removeClass("is-invalid");
		},
		submitHandler: function (form) {
			let namaPj = $("#namaPj").val();
			$.ajax({
				url: site_url + "Master/PenanggungJawab/insert",
				type: "POST",
				data: {
					namaPj: namaPj
				},
				success: function (data) {
					$("#namaPj").val("");
					$("#showPj").html(data);
					$("#addPj").modal("hide");

					Swal.fire(
						'Berhasil!',
						'Data berhasil ditambahkan.',
						'success'
					)
				}
			});
		}
	});
});

// Kirim Value Ke Edit Penanggung Jawab
$(document).on('click', '.editPj', function () {
	var id_pj = $(this).attr('data-id_pj');
	var namaPj = $(this).attr('data-nama_pj');

	$("#id_pj").val(id_pj);
	$("#editNamaPj").val(namaPj);
});

// Update Penanggung Jawab
$("#editPj").click(function () {
	$("#formEditPj").validate({
		rules: {
			editNamaPj: {
				required: true
			}
		},
		messages: {
			editNamaPj: {
				required: "Masukkan nama lengkap!"
			}
		},
		errorElement: "span",
		errorPlacement: function (error, element) {
			error.addClass("invalid-feedback");
			element.closest(".form-group").append(error);
		},
		highlight: function (element, errorClass, validClass) {
			$(element).addClass("is-invalid");
		},
		unhighlight: function (element, errorClass, validClass) {
			$(element).removeClass("is-invalid");
		},
		submitHandler: function (form) {
			let id_pj = $("#id_pj").val();
			let editNamaPj = $("#editNamaPj").val();

			const swalWithBootstrapButtons = Swal.mixin({
				customClass: {
					confirmButton: 'btn btn-primary',
					cancelButton: 'btn btn-info mr-3'
				},
				buttonsStyling: false
			})

			swalWithBootstrapButtons.fire({
				title: 'Apakah Anda Yakin?',
				text: "Mengubah Data",
				icon: 'question',
				showCancelButton: true,
				confirmButtonText: 'Ya, Ubah',
				cancelButtonText: 'Batal',
				reverseButtons: true
			}).then((result) => {
				if (result.value) {

					$.ajax({
						type: "POST",
						url: site_url + "Master/PenanggungJawab/update",
						data: {
							id_pj: id_pj,
							editNamaPj: editNamaPj
						},
						success: function (data) {
							$("#editNamaPj").val("");
							$("#showPj").load(site_url + "Master/PenanggungJawab/viewPj");
							$("#editPj").modal("hide");

							Swal.fire(
								'Berhasil!',
								'Data berhasil diubah.',
								'success'
							)
						}
					});
				}
			});
		}
	});
});

// Hapus Penanggung Jawab
$("#showPj").on('click', '.hapusPj', function () {
	var id_pj = $(this).data("id_pj");
	const swalWithBootstrapButtons = Swal.mixin({
		customClass: {
			confirmButton: 'btn btn-primary',
			cancelButton: 'btn btn-info mr-3'
		},
		buttonsStyling: false
	});

	swalWithBootstrapButtons.fire({
		title: 'Apakah Anda Yakin?',
		text: "Menghapus Data",
		icon: 'warning',
		showCancelButton: true,
		confirmButtonText: 'Ya, Hapus',
		cancelButtonText: 'Batal',
		reverseButtons: true
	}).then((result) => {
		if (result.value) {

			$.ajax({
				type: "POST",
				url: site_url + "Master/PenanggungJawab/delete",
				data: {
					id_pj: id_pj
				},
				success: function (data) {
					$("#showPj").load(site_url + "Master/PenanggungJawab/viewPj");

					Swal.fire(
						'Berhasil!',
						'Data berhasil dihapus.',
						'success'
					)
				}
			});
		}
	});
});

// Tambah Kuitansi
$("#showKuitansi").load(site_url + "Kuitansi/viewKuitansi");
$("#simpanKuitansi").click(function () {
	$("#formKuitansi").validate({
		rules: {
			noKuitansi: {
				required: true,
				number: true
			},
			tglKuitansi: {
				required: true
			},
			jumlahUang: {
				required: true
			},
			gunaPembayaran: {
				required: true
			},
			terimaDari: {
				required: true
			},
			pjKuitansi: {
				required: true
			}
		},
		messages: {
			noKuitansi: {
				required: "Masukkan nomor kuitansi!",
				number: "Masukkan angka!"
			},
			tglKuitansi: {
				required: "Masukkan tanggal!"
			},
			jumlahUang: {
				required: "Masukkan jumlah uang!"
			},
			gunaPembayaran: {
				required: "Masukkan guna pembayaran!"
			},
			terimaDari: {
				required: "Masukkan telah menerima dari!"
			},
			pjKuitansi: {
				required: "Masukkan penanggung jawab!"
			}
		},
		errorElement: "span",
		errorPlacement: function (error, element) {
			error.addClass("invalid-feedback");
			element.closest(".form-group").append(error);
		},
		highlight: function (element, errorClass, validClass) {
			$(element).addClass("is-invalid");
		},
		unhighlight: function (element, errorClass, validClass) {
			$(element).removeClass("is-invalid");
		},
		submitHandler: function (form) {
			let noKuitansi = $("#noKuitansi").val();
			let tglKuitansi = $("#tglKuitansi").val();
			let jumlahUang = $("#jumlahUang").val();
			let gunaPembayaran = $("#gunaPembayaran").val();
			let terimaDari = $("#terimaDari").val();
			let pjKuitansi = $("#pjKuitansi").val();
			let kodeKuitansi = $('#kodeKuitansi').val();
			$.ajax({
				url: site_url + "Kuitansi/insert",
				type: "POST",
				data: {
					noKuitansi: noKuitansi,
					tglKuitansi: tglKuitansi,
					jumlahUang: jumlahUang,
					gunaPembayaran: gunaPembayaran,
					terimaDari: terimaDari,
					pjKuitansi: pjKuitansi,
					kodeKuitansi: kodeKuitansi
				},
				success: function (data) {
					$("#noKuitansi").val("");
					$("#tglKuitansi").val("");
					$("#jumlahUang").val("");
					$("#gunaPembayaran").val("");
					$("#terimaDari").val("");
					$("#pjKuitansi").val("");
					$("#kode_kuitansi").val("");
					$("#showKuitansi").html(data);
					$("#addKuitansi").modal("hide");

					window.location = "Kuitansi/Cetak/" + noKuitansi; 
					
				}
			});
		}
	});
});

// Hapus Kuitansi
$("#showKuitansi").on('click', '.hapusKuitansi', function () {
	var id_kuitansi = $(this).data("id_kuitansi");
	const swalWithBootstrapButtons = Swal.mixin({
		customClass: {
			confirmButton: 'btn btn-primary',
			cancelButton: 'btn btn-info mr-3'
		},
		buttonsStyling: false
	});

	swalWithBootstrapButtons.fire({
		title: 'Apakah Anda Yakin?',
		text: "Menghapus Data",
		icon: 'warning',
		showCancelButton: true,
		confirmButtonText: 'Ya, Hapus',
		cancelButtonText: 'Batal',
		reverseButtons: true
	}).then((result) => {
		if (result.value) {

			$.ajax({
				type: "POST",
				url: site_url + "Kuitansi/delete",
				data: {
					id_kuitansi: id_kuitansi
				},
				success: function (data) {
					$("#showKuitansi").load(site_url + "Kuitansi/viewKuitansi");

					Swal.fire(
						'Berhasil!',
						'Data berhasil dihapus.',
						'success'
					)
				}
			});
		}
	});
});

// Tambah Invoice
$("#showInvoice").load(site_url + "Invoice/viewInvoice");
$("#simpanInvoice").click(function () {
	$("#formInvoice").validate({
		rules: {
			noInvoice: {
				required: true,
				number: true
			},
			tglInvoice: {
				required: true
			},
			tujuanInvoice: {
				required: true
			},
			desk: {
				required: true
			},
			hargaInvoice: {
				required: true,
				number: true
			},
			qty: {
				required: true,
				number: true
			},
			pjInvoice: {
				required: true
			}

		},
		messages: {
			noInvoice: {
				required: "Masukkan nomor invoice!",
				number: "Masukan angka!"
			},
			tglInvoice: {
				required: "Masukkan tanggal!"
			},
			tujuanInvoice: {
				required: "Masukkan tujuan!"
			},
			desk: {
				required: "Masukkan deskripsi!"
			},
			hargaInvoice: {
				required: "Masukkan harga!",
				number: "Masukkan angka!"
			},
			qty: {
				required: "Masukkan qty!",
				number: "Masukkan angka!"
			},
			pjInvoice: {
				required: "Masukkan penanggungjawab!"
			}
		},
		errorElement: "span",
		errorPlacement: function (error, element) {
			error.addClass("invalid-feedback");
			element.closest(".form-group").append(error);
		},
		highlight: function (element, errorClass, validClass) {
			$(element).addClass("is-invalid");
		},
		unhighlight: function (element, errorClass, validClass) {
			$(element).removeClass("is-invalid");
		},
		submitHandler: function (form) {
			let noInvoice = $("#noInvoice").val();
			let tglInvoice = $("#tglInvoice").val();
			let tujuanInvoice = $("#tujuanInvoice").val();
			let desk = $("#desk").val();
			let hargaInvoice = $("#hargaInvoice").val();
			let qty = $("#qty").val();
			let pjInvoice = $("#pjInvoice").val();
			$.ajax({
				url: site_url + "Invoice/insert",
				type: "POST",
				data: {
					noInvoice: noInvoice,
					tglInvoice: tglInvoice,
					tujuanInvoice: tujuanInvoice,
					desk: desk,
					hargaInvoice: hargaInvoice,
					qty: qty,
					pjInvoice: pjInvoice
				},
				success: function (data) {
					$("#noInvoice").val("");
					$("#tglInvoice").val("");
					$("#tujuanInvoice").val("");
					$("#desk").val("");
					$("#hargaInvoice").val("");
					$("#qty").val("");
					$("#pjInvoice").val("");
					$("#showInvoice").html(data);
					$("#addInvoice").modal("hide");

					window.location = "Invoice/Cetak";
				}
			});
		}
	});
});

// Tambah Satuan
$("#showSatuan").load(site_url + "Master/Satuan/viewSatuan");
$("#simpanSatuan").click(function () {
	$("#formSatuan").validate({
		rules: {
			namaSatuan: {
				required: true
			}
		},
		messages: {
			namaSatuan: {
				required: "Masukkan nama satuan!"
			}
		},
		errorElement: "span",
		errorPlacement: function (error, element) {
			error.addClass("invalid-feedback");
			element.closest(".form-group").append(error);
		},
		highlight: function (element, errorClass, validClass) {
			$(element).addClass("is-invalid");
		},
		unhighlight: function (element, errorClass, validClass) {
			$(element).removeClass("is-invalid");
		},
		submitHandler: function (form) {
			let namaSatuan = $("#namaSatuan").val();
			$.ajax({
				url: site_url + "Master/Satuan/insert",
				type: "POST",
				data: {
					namaSatuan: namaSatuan
				},
				success: function (data) {
					$("#namaSatuan").val("");
					$("#showSatuan").html(data);
					$("#addSatuan").modal("hide");

					Swal.fire(
						'Berhasil!',
						'Data berhasil ditambahkan.',
						'success'
					)
				}
			});
		}
	});
});

// Kirim Value Edit Satuan
$(document).on('click', '.editSatuan', function () {
	var id_satuan = $(this).attr('data-id_satuan');
	var editSatuan = $(this).attr('data-nama_satuan');

	$("#id_satuan").val(id_satuan);
	$("#editNamaSatuan").val(editSatuan);
});

// Update Satuan
$("#editSatuan").click(function () {
	$("#formEditSatuan").validate({
		rules: {
			editNamaSatuan: {
				required: true
			}
		},
		messages: {
			editNamaSatuan: {
				required: "Masukkan nama satuan!"
			}
		},
		errorElement: "span",
		errorPlacement: function (error, element) {
			error.addClass("invalid-feedback");
			element.closest(".form-group").append(error);
		},
		highlight: function (element, errorClass, validClass) {
			$(element).addClass("is-invalid");
		},
		unhighlight: function (element, errorClass, validClass) {
			$(element).removeClass("is-invalid");
		},
		submitHandler: function (form) {
			let id_satuan = $("#id_satuan").val();
			let editNamaSatuan = $("#editNamaSatuan").val();

			const swalWithBootstrapButtons = Swal.mixin({
				customClass: {
					confirmButton: 'btn btn-primary',
					cancelButton: 'btn btn-info mr-3'
				},
				buttonsStyling: false
			})

			swalWithBootstrapButtons.fire({
				title: 'Apakah Anda Yakin?',
				text: "Mengubah Data",
				icon: 'question',
				showCancelButton: true,
				confirmButtonText: 'Ya, Ubah',
				cancelButtonText: 'Batal',
				reverseButtons: true
			}).then((result) => {
				if (result.value) {

					$.ajax({
						type: "POST",
						url: site_url + "Master/Satuan/update",
						data: {
							id_satuan: id_satuan,
							editNamaSatuan: editNamaSatuan
						},
						success: function (data) {
							$("#editNamaSatuan").val("");
							$("#showSatuan").load(site_url + "Master/Satuan/viewSatuan");
							$("#editSatuan").modal("hide");

							Swal.fire(
								'Berhasil!',
								'Data berhasil diubah.',
								'success'
							)
						}
					});
				}
			});
		}
	});
});

// Hapus Satuan
$("#showSatuan").on('click', '.hapusSatuan', function () {
	var id_satuan = $(this).data("id_satuan");
	const swalWithBootstrapButtons = Swal.mixin({
		customClass: {
			confirmButton: 'btn btn-primary',
			cancelButton: 'btn btn-info mr-3'
		},
		buttonsStyling: false
	});

	swalWithBootstrapButtons.fire({
		title: 'Apakah Anda Yakin?',
		text: "Menghapus Data",
		icon: 'warning',
		showCancelButton: true,
		confirmButtonText: 'Ya, Hapus',
		cancelButtonText: 'Batal',
		reverseButtons: true
	}).then((result) => {
		if (result.value) {

			$.ajax({
				type: "POST",
				url: site_url + "Master/Satuan/delete",
				data: {
					id_satuan: id_satuan
				},
				success: function (data) {
					$("#showSatuan").load(site_url + "Master/Satuan/viewSatuan");

					Swal.fire(
						'Berhasil!',
						'Data berhasil dihapus.',
						'success'
					)
				}
			});
		}
	});
});

// Tambah Barang
$("#simpanBarang").click(function () {
	$("#formBarang").validate({
		rules: {
			namaBarang: {
				required: true
			},
			spesifikasi: {
				required: true
			},
			satuan: {
				required: true
			},
			bagian: {
				required: true
			},
			harga: {
				required: true
			},
			qty: {
				required: true,
				min: 1
			}
		},
		messages: {
			namaBarang: {
				required: "Masukkan nama barang!"
			},
			spesifikasi: {
				required: "Masukkan spesifikasi barang!"
			},
			satuan: {
				required: "Masukkan satuan!"
			},
			bagian: {
				required: "Masukkan bagian!"
			},
			harga: {
				required: "Masukkan harga!"
			},
			qty: {
				required: "Masukkan jumlah!",
				min: "Masukkan minimal 1!"
			}
		},
		errorElement: "span",
		errorPlacement: function (error, element) {
			error.addClass("invalid-feedback");
			element.closest(".form-group").append(error);
		},
		highlight: function (element, errorClass, validClass) {
			$(element).addClass("is-invalid");
		},
		unhighlight: function (element, errorClass, validClass) {
			$(element).removeClass("is-invalid");
		},
		submitHandler: function (form) {
			let kodePenawaran = $("#kodePenawaran").val();
			let namaBarang = $("#namaBarang").val();
			let spesifikasi = $("#spesifikasi").val();
			let satuan = $("#satuan").val();
			// let bagian = $("#bagian").val();
			let harga = $("#harga").val();
			let qty = $("#qty").val();
			$.ajax({
				url: site_url + "Penawaran/insert",
				type: "POST",
				data: {
					kodePenawaran: kodePenawaran,
					namaBarang: namaBarang,
					spesifikasi: spesifikasi,
					satuan: satuan,
					// bagian: bagian,
					harga: harga,
					qty: qty
				},
				success: function (data) {
					$("#namaBarang").val("");
					$("#spesifikasi").val("");
					$("#satuan").val("");
					$("#bagian").val("");
					$("#harga").val("");
					$("#qty").val("");
					$("#grandTotal").load(site_url + "Penawaran/grandTotal");
					$("#showCart").html(data);
					$("#addBarang").modal("hide");
					
					toastr.options = {
						"closeButton": true,
						"debug": false,
						"newestOnTop": false,
						"progressBar": true,
						"positionClass": "toast-top-right",
						"preventDuplicates": false,
						"onclick": null,
						"showDuration": "300",
						"hideDuration": "1000",
						"timeOut": "2000",
						"extendedTimeOut": "1000",
						"showEasing": "swing",
						"hideEasing": "linear",
						"showMethod": "fadeIn",
						"hideMethod": "fadeOut"
					}
					toastr["success"]("Data berhasil ditambahkan!")
				}
			});
		}
	});
});

// Hapus Cart
$("#showCart").on('click', '.hapusCart', function () {
	var rowid = $(this).data("id_cart");
	const swalWithBootstrapButtons = Swal.mixin({
		customClass: {
			confirmButton: 'btn btn-primary',
			cancelButton: 'btn btn-info mr-3'
		},
		buttonsStyling: false
	});

	swalWithBootstrapButtons.fire({
		title: 'Apakah Anda Yakin?',
		text: "Menghapus Data",
		icon: 'warning',
		showCancelButton: true,
		confirmButtonText: 'Ya, Hapus',
		cancelButtonText: 'Batal',
		reverseButtons: true
	}).then((result) => {
		if (result.value) {

			$.ajax({
				type: "POST",
				url: site_url + "Penawaran/Delete",
				data: {
					rowid: rowid
				},
				success: function (data) {
					$("#showCart").html(data);
					$("#grandTotal").load(site_url + "Penawaran/grandTotal");

					Swal.fire(
						'Berhasil!',
						'Data berhasil dihapus.',
						'success'
					)
				}
			});
		}
	});
});

$(document).on('click', '.barang', function () {
	var kodePenawaran = $("#kodePenawaran").val();
	var id_barang = $(this).data('id_barang');
	var nama_barang = $(this).data('nama_barang');
	var spek = $(this).data('spesifikasi');
	var satuann = $(this).data('satuan');
	var bagiann = $(this).data('bagian');
	var hargaa = $(this).data('harga');

	$("#id_barang").val(id_barang);

	$.ajax({
		url: base_url + 'Penawaran/Search',
		type: 'POST',
		data: {
			kodePenawaran: kodePenawaran,
			id_barang: id_barang,
			nama_barang: nama_barang,
			spek: spek,
			satuann: satuann,
			bagiann: bagiann,
			hargaa: hargaa
		},
		success: function (data) {
			$('#showCart').html(data);
			$("#grandTotal").load(site_url + "Penawaran/grandTotal");
			$("#cariBarang").modal('hide');
			toastr.options = {
				"closeButton": true,
				"debug": false,
				"newestOnTop": false,
				"progressBar": true,
				"positionClass": "toast-top-right",
				"preventDuplicates": false,
				"onclick": null,
				"showDuration": "300",
				"hideDuration": "1000",
				"timeOut": "2000",
				"extendedTimeOut": "1000",
				"showEasing": "swing",
				"hideEasing": "linear",
				"showMethod": "fadeIn",
				"hideMethod": "fadeOut"
			}
			toastr["success"]("Data berhasil ditambahkan!")
		}
	});
});

// Tambah Customer
$("#showCustomer").load(site_url + "Master/Customer/viewCustomer");
$("#simpanCustomer").click(function () {
	$("#formCustomer").validate({
		rules: {
			namaCustomer: {
				required: true
			},
			alamat: {
				required: true
			},
			noHp: {
				required: true,
				number: true,
				minlength: 10,
				maxlength: 13
			}
		},
		messages: {
			namaCustomer: {
				required: "Masukkan nama lengkap!"
			},
			alamat: {
				required: "Masukan alamat!"
			},
			noHp: {
				required: "Masukan nomor handphone!",
				number: "Harap masukkan angka!",
				minlength: "Masukan minimal 10 digit",
				maxlength: "Masukan maksimal 13 digit"
			}
		},
		errorElement: "span",
		errorPlacement: function (error, element) {
			error.addClass("invalid-feedback");
			element.closest(".form-group").append(error);
		},
		highlight: function (element, errorClass, validClass) {
			$(element).addClass("is-invalid");
		},
		unhighlight: function (element, errorClass, validClass) {
			$(element).removeClass("is-invalid");
		},
		submitHandler: function (form) {
			let namaCustomer = $("#namaCustomer").val();
			let alamat = $("#alamat").val();
			let noHp = $("#noHp").val();
			$.ajax({
				url: site_url + "Master/Customer/insert",
				type: "POST",
				data: {
					namaCustomer: namaCustomer,
					alamat: alamat,
					noHp: noHp
				},
				success: function (data) {
					$("#namaCustomer").val("");
					$("#alamat").val("");
					$("#noHp").val("");
					$("#showCustomer").html(data);
					$("#addCustomer").modal("hide");

					Swal.fire(
						'Berhasil!',
						'Data berhasil ditambahkan.',
						'success'
					)
				}
			});
		}
	});
});

// Tambah Customer Penawaran
// $("#showCustomer").load(site_url + "Master/Customer/viewCustomer");
$("#simpanCust").click(function () {
	$("#formCust").validate({
		rules: {
			namaCust: {
				required: true
			},
			alamatCust: {
				required: true
			},
			hpCust: {
				required: true,
				number: true,
				minlength: 10,
				maxlength: 13
			}
		},
		messages: {
			namaCust: {
				required: "Masukkan nama lengkap!"
			},
			alamatCust: {
				required: "Masukan alamat!"
			},
			hpCust: {
				required: "Masukan nomor handphone!",
				number: "Harap masukkan angka!",
				minlength: "Masukan minimal 10 digit",
				maxlength: "Masukan maksimal 13 digit"
			}
		},
		errorElement: "span",
		errorPlacement: function (error, element) {
			error.addClass("invalid-feedback");
			element.closest(".form-group").append(error);
		},
		highlight: function (element, errorClass, validClass) {
			$(element).addClass("is-invalid");
		},
		unhighlight: function (element, errorClass, validClass) {
			$(element).removeClass("is-invalid");
		},
		submitHandler: function (form) {
			let namaCust = $("#namaCust").val();
			let alamatCust = $("#alamatCust").val();
			let hpCust = $("#hpCust").val();
			$.ajax({
				url: site_url + "Master/Customer/newCust",
				type: "POST",
				data: {
					namaCust: namaCust,
					alamatCust: alamatCust,
					hpCust: hpCust
				},
				success: function (data) {
					window.location.reload();
					$("#namaCust").val("");
					$("#alamatCust").val("");
					$("#hpCust").val("");
					$("#modalCustomer").modal("hide");
				}
			});
		}
	});
});

// Kirim Value Edit Customer
$(document).on('click', '.editCustomer', function () {
	var id_customer = $(this).attr('data-id_customer');
	var editNamaCustomer = $(this).attr('data-nama_customer');
	var editAlamat = $(this).attr('data-alamat');
	var editNoHp = $(this).attr('data-no_hp');

	$("#id_customer").val(id_customer);
	$("#editNamaCustomer").val(editNamaCustomer);
	$("#editAlamat").val(editAlamat);
	$("#editNoHp").val(editNoHp);
});

// Update Customer
$("#editCustomer").click(function () {
	$("#formEditCustomer").validate({
		rules: {
			editNamaCustomer: {
				required: true
			},
			editAlamat: {
				required: true
			},
			editNoHp: {
				required: true,
				number: true,
				minlength: 10,
				maxlength: 13
			}
		},
		messages: {
			editNamaCustomer: {
				required: "Masukkan nama lengkap!"
			},
			editAlamat: {
				required: "Masukkan alamat!"
			},
			editNoHp: {
				required: "Masukkan nomor handphone!",
				number: "Harap masukkan angka!",
				minlength: "Masukan minimal 10 digit",
				maxlength: "Masukan maksimal 13 digit"
			}
		},
		errorElement: "span",
		errorPlacement: function (error, element) {
			error.addClass("invalid-feedback");
			element.closest(".form-group").append(error);
		},
		highlight: function (element, errorClass, validClass) {
			$(element).addClass("is-invalid");
		},
		unhighlight: function (element, errorClass, validClass) {
			$(element).removeClass("is-invalid");
		},
		submitHandler: function (form) {
			let id_customer = $("#id_customer").val();
			let editNamaCustomer = $("#editNamaCustomer").val();
			let editAlamat = $("#editAlamat").val();
			let editNoHp = $("#editNoHp").val();

			const swalWithBootstrapButtons = Swal.mixin({
				customClass: {
					confirmButton: 'btn btn-primary',
					cancelButton: 'btn btn-info mr-3'
				},
				buttonsStyling: false
			})

			swalWithBootstrapButtons.fire({
				title: 'Apakah Anda Yakin?',
				text: "Mengubah Data",
				icon: 'question',
				showCancelButton: true,
				confirmButtonText: 'Ya, Ubah',
				cancelButtonText: 'Batal',
				reverseButtons: true
			}).then((result) => {
				if (result.value) {

					$.ajax({
						type: "POST",
						url: site_url + "Master/Customer/Update",
						data: {
							id_customer: id_customer,
							editNamaCustomer: editNamaCustomer,
							editAlamat: editAlamat,
							editNoHp: editNoHp
						},
						success: function (data) {
							$("#editNamaCustomer").val("");
							$("#editAlamat").val("");
							$("#editNoHp").val("");
							$("#showCustomer").load(site_url + "Master/Customer/viewCustomer");
							$("#editCustomer").modal("hide");

							Swal.fire(
								'Berhasil!',
								'Data berhasil diubah.',
								'success'
							)
						}
					});
				}
			});
		}
	});
});

// Hapus Customer
$("#showCustomer").on('click', '.hapusCustomer', function () {
	var id_customer = $(this).data("id_customer");
	const swalWithBootstrapButtons = Swal.mixin({
		customClass: {
			confirmButton: 'btn btn-primary',
			cancelButton: 'btn btn-info mr-3'
		},
		buttonsStyling: false
	});

	swalWithBootstrapButtons.fire({
		title: 'Apakah Anda Yakin?',
		text: "Menghapus Data",
		icon: 'warning',
		showCancelButton: true,
		confirmButtonText: 'Ya, Hapus',
		cancelButtonText: 'Batal',
		reverseButtons: true
	}).then((result) => {
		if (result.value) {

			$.ajax({
				type: "POST",
				url: site_url + "Master/Customer/Delete",
				data: {
					id_customer: id_customer
				},
				success: function (data) {
					$("#showCustomer").load(site_url + "Master/Customer/viewCustomer");

					Swal.fire(
						'Berhasil!',
						'Data berhasil dihapus.',
						'success'
					)
				}
			});
		}
	});
});

// Kirim Value Edit Kuitansi
$(document).on('click', '.editKuitansi', function () {
	var id_kuitansi = $(this).attr('data-id_kuitansi');
	var no_kuitansi = $(this).attr('data-no_kuitansi');
	var tanggal_kuitansi = $(this).attr('data-tanggal_kuitansi');
	var jumlah_uang = $(this).attr('data-jumlah_uang');
	var guna_pembayaran = $(this).attr('data-guna_pembayaran');
	var terima_dari = $(this).attr('data-terima_dari');
	var id_pj = $(this).attr('data-id_pj');

	$("#id_kuitansi").val(id_kuitansi);
	$("#editNoKuitansi").val(no_kuitansi);
	$("#editTglKuitansi").val(tanggal_kuitansi);
	$("#editJumlahUang").val(jumlah_uang);
	$("#editGunaPembayaran").val(guna_pembayaran);
	$("#editTerimaDari").val(terima_dari);
	$("#editPjKuitansi")
		.val(id_pj)
		.trigger("change");
});

// Update Kuitansi
$("#editKuitansi").click(function () {
	$("#formEditKuitansi").validate({
		rules: {
			editNoKuitansi: {
				required: true
			},
			editTglKuitansi: {
				required: true
			},
			editJumlahUang: {
				required: true,
				number: true
			},
			editGunaPembayaran: {
				required: true
			},
			editTerimaDari: {
				required: true
			},
			editPjKuitansi: {
				required: true
			}
		},
		messages: {
			editNoKuitansi: {
				required: "Masukkan nomor kuitansi!"
			},
			editTglKuitansi: {
				required: "Masukkan tanggal!"
			},
			editJumlahUang: {
				required: "Masukkan jumlah uang!",
				number: "Harap masukkan angka!"
			},
			editGunaPembayaran: {
				required: "Masukkan guna pembayaran!"
			},
			editTerimaDari: {
				required: "Masukkan terima dari!"
			},
			editPjKuitansi: {
				required: "Masukkan penanggung jawab!"
			}
		},
		errorElement: "span",
		errorPlacement: function (error, element) {
			error.addClass("invalid-feedback");
			element.closest(".form-group").append(error);
		},
		highlight: function (element, errorClass, validClass) {
			$(element).addClass("is-invalid");
		},
		unhighlight: function (element, errorClass, validClass) {
			$(element).removeClass("is-invalid");
		},
		submitHandler: function (form) {
			let id_kuitansi = $("#id_kuitansi").val();
			let editNoKuitansi = $("#editNoKuitansi").val();
			let editTglKuitansi = $("#editTglKuitansi").val();
			let editJumlahUang = $("#editJumlahUang").val();
			let editGunaPembayaran = $("#editGunaPembayaran").val();
			let editTerimaDari = $("#editTerimaDari").val();
			let editPjKuitansi = $("#editPjKuitansi").val();

			const swalWithBootstrapButtons = Swal.mixin({
				customClass: {
					confirmButton: 'btn btn-primary',
					cancelButton: 'btn btn-info mr-3'
				},
				buttonsStyling: false
			})

			swalWithBootstrapButtons.fire({
				title: 'Apakah Anda Yakin?',
				text: "Mengubah Data",
				icon: 'question',
				showCancelButton: true,
				confirmButtonText: 'Ya, Ubah',
				cancelButtonText: 'Batal',
				reverseButtons: true
			}).then((result) => {
				if (result.value) {

					$.ajax({
						type: "POST",
						url: site_url + "Kuitansi/Update",
						data: {
							id_kuitansi: id_kuitansi,
							editNoKuitansi: editNoKuitansi,
							editTglKuitansi: editTglKuitansi,
							editJumlahUang: editJumlahUang,
							editGunaPembayaran: editGunaPembayaran,
							editTerimaDari: editTerimaDari,
							editPjKuitansi: editPjKuitansi
						},
						success: function (data) {
							$("#editNoKuitansi").val("");
							$("#editTglKuitansi").val("");
							$("#editJumlahUang").val("");
							$("#editGunaPembayaran").val("");
							$("#editTerimaDari").val("");
							$("#editPjKuitansi").val("").trigger("change");
							$("#showKuitansi").load(site_url + "Kuitansi/viewKuitansi");
							$("#editKuitansi").modal("hide");

							Swal.fire(
								'Berhasil!',
								'Data berhasil diubah.',
								'success'
							)
						}
					});
				}
			});
		}
	});
});

// Cetak Penawaran
// $("#showRole").load(site_url + "Pengaturan/Role/viewRole");
$("#cetakPenawaran").click(function () {
	$("#formPenawaran").validate({
		rules: {
			customerPenawaran: {
				required: true
			},
			noPenawaran: {
				required: true
			},
			tglPenawaran: {
				required: true
			},
			periode: {
				required: true,
				number: true
			},
			hal: {
				required: true
			},
			pjPenawaran: {
				required: true
			}
		},
		messages: {
			customerPenawaran: {
				required: ""
			},
			noPenawaran: {
				required: ""
			},
			tglPenawaran: {
				required: ""
			},
			periode: {
				required: "",
				number: "Masukkan angka!"
			},
			hal: {
				required: ""
			},
			pjPenawaran: {
				required: ""
			}
		},
		errorElement: "span",
		errorPlacement: function (error, element) {
			error.addClass("invalid-feedback");
			element.closest(".form-group").append(error);
		},
		highlight: function (element, errorClass, validClass) {
			$(element).addClass("is-invalid");
		},
		unhighlight: function (element, errorClass, validClass) {
			$(element).removeClass("is-invalid");
		},
		submitHandler: function (form) {
			let kodePenawaran = $("#kodePenawaran").val();
			let id_barang = $("#id_barang").val();
			let customerPenawaran = $("#customerPenawaran").val();
			let noPenawaran = $("#noPenawaran").val();
			let tglPenawaran = $("#tglPenawaran").val();
			let periode = $("#periode").val();
			let hal = $("#hal").val();
			let pjPenawaran = $("#pjPenawaran").val();
			$.ajax({
				url: site_url + "Penawaran/Simpan",
				type: "POST",
				data: {
					kodePenawaran: kodePenawaran,
					id_barang: id_barang,
					customerPenawaran: customerPenawaran,
					noPenawaran: noPenawaran,
					tglPenawaran: tglPenawaran,
					periode: periode,
					hal: hal,
					pjPenawaran: pjPenawaran
				},
				success: function (data) {
					window.location = 'Penawaran/Cetak/' + kodePenawaran;
					$("#customerPenawaran").val("");
					$("#noPenawaran").val("");
					$("#periode").val("");
					$("#hal").val("");
					$("#pjPenawaran").val("");
					$("#showRole").html(data);
					$("#addRole").modal("hide");
				}
			});
		}
	});
});
