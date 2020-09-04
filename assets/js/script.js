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
					$("#showRole").html(data);
					$("#addRole").modal("hide");
					$("#namaRole").val("");

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