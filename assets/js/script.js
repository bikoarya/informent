// Set Timer Alert Login
window.setTimeout(function () {
	$("#alert").alert('close');
}, 2000);

// Validasi Huruf
jQuery.validator.addMethod("lettersonly", function (value, element) {
	return this.optional(element) || /^[a-z]+$/i.test(value);
}, "Harap masukkan karakter/huruf");

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
