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
	$("#formLevel").validate({
		rules: {
			nama_role: {
				required: true
			}
		},
		messages: {
			nama_role: {
				required: "Nama role tidak boleh kosong"
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
			let nama_role = $("#nama_role").val();
			$.ajax({
				url: site_url + "Pengaturan/Role/insert",
				type: "POST",
				data: {
					nama_role: nama_role
				},
				success: function (data) {
					$("#showRole").html(data);
					$("#modalTambahRole").modal("hide");
					$("#nama_role").val("");

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
					toastr["success"]("Data berhasil disimpan!")
				}
			});
		}
	});
});

// Kirim Value Edit Role
$(document).on('click', '.editRole', function () {
	var id_role = $(this).attr('data-id_role');
	var namaRoleEdit = $(this).attr('data-nama_role');

	$("#id_role").val(id_role);
	$("#namaRoleEdit").val(namaRoleEdit);
});

// Update Role
$("#editRole").click(function () {
	$("#formEditRole").validate({
		rules: {
			namaRoleEdit: {
				required: true
			}
		},
		messages: {
			namaRoleEdit: {
				required: "Nama role tidak boleh kosong"
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
			let namaRoleEdit = $("#namaRoleEdit").val();

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
							namaRoleEdit: namaRoleEdit
						},
						success: function (data) {
							$("#namaRoleEdit").val("");
							$("#showRole").load(site_url + "Pengaturan/Role/viewRole");
							$("#modalEditRole").modal("hide");

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
							toastr["success"]("Data berhasil diubah!")
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
					toastr["success"]("Data berhasil dihapus!")
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
			nama_lengkap: {
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
				minlength: 4,
				maxlength: 16,
				equalTo: "#password"
			},
			role: {
				required: true
			}
		},
		messages: {
			nama_lengkap: {
				required: "Nama lengkap tidak boleh kosong"
			},
			username: {
				required: "Username tidak boleh kosong"
			},
			password: {
				required: "Password tidak boleh kosong",
				minlength: "Masukkan minimal 4 karakter",
				maxlength: "Masukkan maksimal 16 karakter"
			},
			password2: {
				required: "Konfirmasi password tidak boleh kosong",
				minlength: "Masukkan minimal 4 karakter",
				maxlength: "Masukkan maksimal 16 karakter",
				equalTo: "Password tidak sama"
			},
			role: {
				required: "Nama role tidak boleh kosong"
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
			let nama_lengkap = $("#nama_lengkap").val();
			let username = $("#username").val();
			let password = $("#password").val();
			let role = $("#role").val();

			$.ajax({
				url: site_url + "Pengaturan/Akun/insert",
				method: "POST",
				data: {
					nama_lengkap: nama_lengkap,
					username: username,
					password: password,
					role: role
				},
				success: function (data) {
					$("#showAkun").html(data);
					$("#modalTambahAkun").modal("hide");
					$("#nama_lengkap").val("");
					$("#username").val("");
					$("#password").val("");
					$("#role").val("");

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
					toastr["success"]("Data berhasil disimpan!")
				}
			});
		}
	});
});

// Kirim Value Edit Akun
$(document).on('click', '.editAkun', function () {
	var id_akun = $(this).attr('data-id_akun');
	var nama_lengkap = $(this).attr('data-nama_lengkap');
	var username = $(this).attr('data-username');
	var role = $(this).attr('data-role');
	var password = $(this).attr('data-password');

	$("#id_akun").val(id_akun);
	$("#editNama").val(nama_lengkap);
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
			editNama: {
				required: true
			},
			editUsername: {
				required: true
			},
			editRole: {
				required: true
			}
		},
		messages: {
			editNama: {
				required: "Nama lengkap tidak boleh kosong"
			},
			editUsername: {
				required: "Username tidak boleh kosong"
			},
			editRole: {
				required: "Role tidak boleh kosong"
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
			let editNama = $("#editNama").val();
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
							editNama: editNama,
							editUsername: editUsername,
							newPassword: newPassword,
							oldPassword: oldPassword,
							editRole: editRole
						},
						success: function (data) {
							$("#editNama").val("");
							$("#editUsername").val("");
							$("#newPassword").val("");
							$("#oldPassword").val("");
							$("#editRole")
								.val("")
								.trigger("change");
							$("#showAkun").load(site_url + "Pengaturan/Akun/viewAkun");
							$("#modalEditAkun").modal("hide");

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
							toastr["success"]("Data berhasil diubah!")
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
					toastr["success"]("Data berhasil dihapus!")
				}
			});
		}
	});

});

// Tambah Jenis Kelamin
$("#showJenisKelamin").load(site_url + "Informasi/JenisKelamin/viewJenisKelamin");
$("#simpanJenisKelamin").click(function () {
	$("#formJenisKelamin").validate({
		rules: {
			jenis_kelamin: {
				required: true
			}
		},
		messages: {
			jenis_kelamin: {
				required: "Jenis kelamin tidak boleh kosong"
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
			let jenis_kelamin = $("#jenis_kelamin").val();
			$.ajax({
				url: site_url + "Informasi/JenisKelamin/insert",
				type: "POST",
				data: {
					jenis_kelamin: jenis_kelamin
				},
				success: function (data) {
					$("#showJenisKelamin").html(data);
					$("#modalTambahJenisKelamin").modal("hide");
					$("#jenis_kelamin").val("");

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
					toastr["success"]("Data berhasil disimpan!")
				}
			});
		}
	});
});

// Kirim Value Edit Jenis Kelamin
$(document).on('click', '.editJenisKelamin', function () {
	var id_jeniskelamin = $(this).attr('data-id_jeniskelamin');
	var nama_jeniskelamin = $(this).attr('data-nama_jeniskelamin');

	$("#id_jeniskelamin").val(id_jeniskelamin);
	$("#editNamaJenisKelamin").val(nama_jeniskelamin);
});

// Update Jenis Kelamin
$("#editJenisKelamin").click(function () {
	$("#formEditJenisKelamin").validate({
		rules: {
			editNamaJenisKelamin: {
				required: true
			}
		},
		messages: {
			editNamaJenisKelamin: {
				required: "Jenis kelamin tidak boleh kosong"
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
			let id_jeniskelamin = $("#id_jeniskelamin").val();
			let editNamaJenisKelamin = $("#editNamaJenisKelamin").val();

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
						url: site_url + "Informasi/JenisKelamin/update",
						type: "POST",
						data: {
							id_jeniskelamin: id_jeniskelamin,
							editNamaJenisKelamin: editNamaJenisKelamin
						},
						success: function (data) {
							$("#editNamaJenisKelamin").val("");
							$("#showJenisKelamin").load(site_url + "Informasi/JenisKelamin/viewJenisKelamin");
							$("#modalEditJenisKelamin").modal("hide");

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
							toastr["success"]("Data berhasil diubah!")
						}
					});
				}
			});
		}
	});
});

// Hapus Jenis Kelamin
$("#showJenisKelamin").on('click', '.hapusJenisKelamin', function () {
	var id_jeniskelamin = $(this).data("id_jeniskelamin");
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
				url: site_url + "Informasi/JenisKelamin/delete",
				data: {
					id_jeniskelamin: id_jeniskelamin
				},
				success: function (data) {
					$("#showJenisKelamin").load(site_url + "Informasi/JenisKelamin/viewJenisKelamin");

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
					toastr["success"]("Data berhasil dihapus!")
				}
			});
		}
	});
});

// Tambah Agama
$("#showAgama").load(site_url + "Informasi/Agama/viewAgama");
$("#simpanAgama").click(function () {
	$("#formAgama").validate({
		rules: {
			nama_agama: {
				required: true
			}
		},
		messages: {
			nama_agama: {
				required: "Nama agama tidak boleh kosong"
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
			let nama_agama = $("#nama_agama").val();
			$.ajax({
				url: site_url + "Informasi/Agama/insert",
				type: "POST",
				data: {
					nama_agama: nama_agama
				},
				success: function (data) {
					$("#nama_agama").val("");
					$("#showAgama").html(data);
					$("#modalTambahAgama").modal("hide");

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
					toastr["success"]("Data berhasil disimpan!")
				}
			});
		}
	});
});

// Kirim Value Edit Agama
$(document).on('click', '.editAgama', function () {
	var id_agama = $(this).attr('data-id_agama');
	var nama_agama = $(this).attr('data-nama_agama');

	$("#id_agama").val(id_agama);
	$("#editNamaAgama").val(nama_agama);
});

// Update Agama
$("#editAgama").click(function () {
	$("#formEditAgama").validate({
		rules: {
			editNamaAgama: {
				required: true
			}
		},
		messages: {
			editNamaAgama: {
				required: "Nama agama tidak boleh kosong"
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
			let id_agama = $("#id_agama").val();
			let editNamaAgama = $("#editNamaAgama").val();

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
						url: site_url + "Informasi/Agama/update",
						type: "POST",
						data: {
							id_agama: id_agama,
							editNamaAgama: editNamaAgama
						},
						success: function (data) {
							$("#editNamaAgama").val("");
							$("#showAgama").load(site_url + "Informasi/Agama/viewAgama");
							$("#modalEditAgama").modal("hide");

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
							toastr["success"]("Data berhasil diubah!")
						}
					});
				}
			});
		}
	});
});

// Hapus Agama
$("#showAgama").on('click', '.hapusAgama', function () {
	var id_agama = $(this).data("id_agama");
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
				url: site_url + "Informasi/Agama/delete",
				data: {
					id_agama: id_agama
				},
				success: function (data) {
					$("#showAgama").load(site_url + "Informasi/Agama/viewAgama");

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
					toastr["success"]("Data berhasil dihapus!")
				}
			});
		}
	});
});

// Tambah Penduduk
$("#showPenduduk").load(site_url + "Kependudukan/Penduduk/viewPenduduk");
$("#simpanPenduduk").click(function () {
	$("#formPenduduk").validate({
		rules: {
			nik: {
				required: true,
				number: true,
				minlength: 16,
				maxlength: 16
			},
			nama_penduduk: {
				required: true
			},
			tempat_lahir: {
				required: true
			},
			tanggal_lahir: {
				required: true
			},
			dusunPenduduk: {
				required: true
			},
			rtPenduduk: {
				required: true,
				number: true
			},
			rwPenduduk: {
				required: true,
				number: true
			},
			jns_kelamin: {
				required: true
			},
			agamaPenduduk: {
				required: true
			},
			pendidikanPenduduk: {
				required: true
			}
		},
		messages: {
			nik: {
				required: "NIK tidak boleh kosong",
				number: "Harap masukkan angka",
				minlength: "Masukkan 16 karakter",
				maxlength: "Masukkan 16 karakter"
			},
			nama_penduduk: {
				required: "Nama lengkap tidak boleh kosong"
			},
			tempat_lahir: {
				required: "Tempat lahir tidak boleh kosong"
			},
			tanggal_lahir: {
				required: "Tanggal lahir tidak boleh kosong"
			},
			dusunPenduduk: {
				required: "Dusun tidak boleh kosong"
			},
			rtPenduduk: {
				required: "RT tidak boleh kosong",
				number: "Harap masukkan angka"
			},
			rwPenduduk: {
				required: "RW tidak boleh kosong",
				number: "Harap masukkan angka"
			},
			jns_kelamin: {
				required: "Jenis kelamin tidak boleh kosong"
			},
			agamaPenduduk: {
				required: "Agama tidak boleh kosong"
			},
			pendidikanPenduduk: {
				required: "Pendidikan terakhir tidak boleh kosong"
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
			let nik = $("#nik").val();
			let nama_penduduk = $("#nama_penduduk").val();
			let tempat_lahir = $("#tempat_lahir").val();
			let tanggal_lahir = $("#tanggal_lahir").val();
			let dusunPenduduk = $("#dusunPenduduk").val();
			let rtPenduduk = $("#rtPenduduk").val();
			let rwPenduduk = $("#rwPenduduk").val();
			let jns_kelamin = $("#jns_kelamin").val();
			let agamaPenduduk = $("#agamaPenduduk").val();
			let pendidikanPenduduk = $("#pendidikanPenduduk").val();
			$.ajax({
				url: site_url + "Kependudukan/Penduduk/insert",
				type: "POST",
				data: {
					nik: nik,
					nama_penduduk: nama_penduduk,
					tempat_lahir: tempat_lahir,
					tanggal_lahir: tanggal_lahir,
					dusunPenduduk: dusunPenduduk,
					rtPenduduk: rtPenduduk,
					rwPenduduk: rwPenduduk,
					jns_kelamin: jns_kelamin,
					agamaPenduduk: agamaPenduduk,
					pendidikanPenduduk: pendidikanPenduduk
				},
				success: function (data) {
					$("#nik").val("");
					$("#nama_penduduk").val("");
					$("#tempat_lahir").val("");
					$("#tanggal_lahir").val("");
					$("#dusunPenduduk").val("");
					$("#rtPenduduk").val("");
					$("#rwPenduduk").val("");
					$("#jns_kelamin").val("");
					$("#agamaPenduduk").val("");
					$("#pendidikanPenduduk").val("");
					$("#showPenduduk").html(data);
					$("#modalTambahPenduduk").modal("hide");

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
					toastr["success"]("Data berhasil disimpan!")
				}
			});
		}
	});
});

// Kirim Value ke Edit Penduduk
$(document).on('click', '.editPenduduk', function () {
	var id_penduduk = $(this).attr('data-id_penduduk');
	var nik = $(this).attr('data-nik');
	var nama_penduduk = $(this).attr('data-nama_penduduk');
	var tempat_lahir = $(this).attr('data-tempat_lahir');
	var tanggal_lahir = $(this).attr('data-tanggal_lahir');
	var dusun_penduduk = $(this).attr('data-dusun_penduduk');
	var rt_penduduk = $(this).attr('data-rt_penduduk');
	var rw_penduduk = $(this).attr('data-rw_penduduk');
	var jnskelamin = $(this).attr('data-jnskelamin');
	var agama_penduduk = $(this).attr('data-agama_penduduk');
	var pendidikan_penduduk = $(this).attr('data-pendidikan_penduduk');

	$("#id_penduduk").val(id_penduduk);
	$("#editNik").val(nik);
	$("#editNamaPenduduk").val(nama_penduduk);
	$("#editTempatLahir").val(tempat_lahir);
	$("#editTanggalLahir").val(tanggal_lahir);
	$("#editDusunPenduduk").val(dusun_penduduk).trigger("change");
	$("#editRtPenduduk").val(rt_penduduk).trigger("change");
	$("#editRwPenduduk").val(rw_penduduk).trigger("change");
	$("#editJk")
		.val(jnskelamin)
		.trigger("change");
	$("#editAgamaPenduduk").val(agama_penduduk).trigger("change");
	$("#editPendidikanPenduduk").val(pendidikan_penduduk).trigger("change");
});

// Update Penduduk
$("#editPenduduk").click(function () {
	$("#formEditPenduduk").validate({
		rules: {
			editNik: {
				required: true,
				number: true,
				minlength: 16,
				maxlength: 16
			},
			editNamaPenduduk: {
				required: true
			},
			editTempatLahir: {
				required: true,
				lettersonly: true
			},
			editTanggalLahir: {
				required: true
			},
			editDusunPenduduk: {
				required: true
			},
			editRtPenduduk: {
				required: true
			},
			editRwPenduduk: {
				required: true
			},
			editJk: {
				required: true
			},
			editAgamaPenduduk: {
				required: true
			},
			editPendidikanPenduduk: {
				required: true
			}
		},
		messages: {
			editNik: {
				required: "NIK tidak boleh kosong",
				number: "Harap masukkan angka",
				minlength: "Masukkan 16 karakter",
				maxlength: "Masukkan 16 karakter"
			},
			editNamaPenduduk: {
				required: "Nama lengkap tidak boleh kosong"
			},
			editTempatLahir: {
				required: "Tempat lahir tidak boleh kosong"
			},
			editTanggalLahir: {
				required: "Tanggal lahir tidak boleh kosong"
			},
			editDusunPenduduk: {
				required: "Alamat tidak boleh kosong"
			},
			editRtPenduduk: {
				required: "RT tidak boleh kosong"
			},
			editRwPenduduk: {
				required: "RW tidak boleh kosong"
			},
			editJk: {
				required: "Jenis kelamin tidak boleh kosong"
			},
			editAgamaPenduduk: {
				required: "Agama tidak boleh kosong"
			},
			editPendidikanPenduduk: {
				required: "Pendidikan terakhir tidak boleh kosong"
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
			let id_penduduk = $("#id_penduduk").val();
			let editNik = $("#editNik").val();
			let editNamaPenduduk = $("#editNamaPenduduk").val();
			let editTempatLahir = $("#editTempatLahir").val();
			let editTanggalLahir = $("#editTanggalLahir").val();
			let editDusunPenduduk = $("#editDusunPenduduk").val();
			let editRtPenduduk = $("#editRtPenduduk").val();
			let editRwPenduduk = $("#editRwPenduduk").val();
			let editJk = $("#editJk").val();
			let editAgamaPenduduk = $("#editAgamaPenduduk").val();
			let editPendidikanPenduduk = $("#editPendidikanPenduduk").val();

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
						url: site_url + "Kependudukan/Penduduk/update",
						type: "POST",
						data: {
							id_penduduk: id_penduduk,
							editNik: editNik,
							editNamaPenduduk: editNamaPenduduk,
							editTempatLahir: editTempatLahir,
							editTanggalLahir: editTanggalLahir,
							editDusunPenduduk: editDusunPenduduk,
							editRtPenduduk: editRtPenduduk,
							editRwPenduduk: editRwPenduduk,
							editJk: editJk,
							editAgamaPenduduk: editAgamaPenduduk,
							editPendidikanPenduduk: editPendidikanPenduduk
						},
						success: function (data) {
							$("#editNik").val("");
							$("#editNamaPenduduk").val("");
							$("#editTempatLahir").val("");
							$("#editTanggalLahir").val("");
							$("#editDusunPenduduk").val("").trigger("change");
							$("#editRtPenduduk").val("").trigger("change");
							$("#editRwPenduduk").val("").trigger("change");
							$("#editJk").val("").trigger("change");
							$("#editAgamaPenduduk").val("").trigger("change");
							$("#editPendidikanPenduduk").val("").trigger("change");
							$("#showPenduduk").load(site_url + "Kependudukan/Penduduk/viewPenduduk");
							$("#modalEditPenduduk").modal("hide");

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
							toastr["success"]("Data berhasil diubah!")
						}
					});
				}
			});
		}
	});
});

// Hapus Penduduk
$("#showPenduduk").on('click', '.hapusPenduduk', function () {
	var id_penduduk = $(this).data("id_penduduk");
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
				url: site_url + "Kependudukan/Penduduk/delete",
				data: {
					id_penduduk: id_penduduk
				},
				success: function (data) {
					$("#showPenduduk").load(site_url + "Kependudukan/Penduduk/viewPenduduk");

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
					toastr["success"]("Data berhasil dihapus!")
				}
			});
		}
	});
});

// Tambah Dusun
$("#showDusun").load(site_url + "Wilayah/Dusun/viewDusun");
$("#simpanDusun").click(function () {
	$("#formDusun").validate({
		rules: {
			namaDusun: {
				required: true
			},
			jumlahPendudukDusun: {
				required: true,
				number: true
			}
		},
		messages: {
			namaDusun: {
				required: "Nama dusun tidak boleh kosong"
			}
			// jumlahPendudukDusun: {
			// 	required: "Jumlah penduduk tidak boleh kosong",
			// 	number: "Harap masukkan angka"
			// }
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
			let namaDusun = $("#namaDusun").val();
			// let jumlahPendudukDusun = $("#jumlahPendudukDusun").val();
			$.ajax({
				url: site_url + "Wilayah/Dusun/insert",
				type: "POST",
				data: {
					namaDusun: namaDusun,
					// jumlahPendudukDusun: jumlahPendudukDusun
				},
				success: function (data) {
					$("#namaDusun").val("");
					$("#jumlahPendudukDusun").val("");
					$("#showDusun").html(data);
					$("#modalTambahDusun").modal("hide");

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
					toastr["success"]("Data berhasil disimpan!")
				}
			});
		}
	});
});

// Kirim Value ke Edit Dusun
$(document).on('click', '.editDusun', function () {
	var id_dusun = $(this).attr('data-id_dusun');
	var nama_dusun = $(this).attr('data-nama_dusun');
	// var jumlah_penduduk_dusun = $(this).attr('data-jumlah_penduduk_dusun');

	$("#id_dusun").val(id_dusun);
	$("#editNamaDusun").val(nama_dusun);
	// $("#editJumlahPendudukDusun").val(jumlah_penduduk_dusun);
});

// Update Dusun
$("#editDusun").click(function () {
	$("#formEditDusun").validate({
		rules: {
			editNamaDusun: {
				required: true,
				lettersonly: true
			}
		},
		messages: {
			editNamaDusun: {
				required: "Nama dusun tidak boleh kosong"
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
			let id_dusun = $("#id_dusun").val();
			let editNamaDusun = $("#editNamaDusun").val();

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
						url: site_url + "Wilayah/Dusun/update",
						type: "POST",
						data: {
							id_dusun: id_dusun,
							editNamaDusun: editNamaDusun
						},
						success: function (data) {
							$("#editNamaDusun").val("");
							$("#showDusun").load(site_url + "Wilayah/Dusun/viewDusun");
							$("#modalEditDusun").modal("hide");

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
							toastr["success"]("Data berhasil diubah!")
						}
					});
				}
			});
		}
	});
});

// Hapus Dusun
$("#showDusun").on('click', '.hapusDusun', function () {
	var id_dusun = $(this).data("id_dusun");
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
				url: site_url + "Wilayah/Dusun/delete",
				data: {
					id_dusun: id_dusun
				},
				success: function (data) {
					$("#showDusun").load(site_url + "Wilayah/Dusun/viewDusun");

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
					toastr["success"]("Data berhasil dihapus!")
				}
			});
		}
	});
});

// Tambah RW
$("#showRw").load(site_url + "Wilayah/Rw/viewRw");
$("#simpanRw").click(function () {
	$("#formRw").validate({
		rules: {
			noRw: {
				required: true,
				number: true
			},
			dusun: {
				required: true
			}
		},
		messages: {
			noRw: {
				required: "Nomor RW tidak boleh kosong",
				number: "Harap masukkan angka"
			},
			dusun: {
				required: "Nama dusun tidak boleh kosong"
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
			let noRw = $("#noRw").val();
			let dusun = $("#dusun").val();
			$.ajax({
				url: site_url + "Wilayah/Rw/insert",
				type: "POST",
				data: {
					noRw: noRw,
					dusun: dusun
				},
				success: function (data) {
					$("#noRw").val("");
					$("#dusun").val("");
					$("#showRw").html(data);
					$("#modalTambahRw").modal("hide");

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
					toastr["success"]("Data berhasil disimpan!")
				}
			});
		}
	});
});

// Kirim Value ke Edit RW
$(document).on('click', '.editRw', function () {
	var id_rw = $(this).attr('data-id_rw');
	var no_rw = $(this).attr('data-no_rw');
	var dusun = $(this).attr('data-dusun_rw');

	$("#id_rw").val(id_rw);
	$("#editNoRw").val(no_rw);
	$("#editDusunRw").val(dusun).trigger("change");
});

// Update RW
$("#editRw").click(function () {
	$("#formEditRw").validate({
		rules: {
			editNoRw: {
				required: true,
				number: true
			},
			editDusunRw: {
				required: true
			}
		},
		messages: {
			editNoRw: {
				required: "Nomor RW tidak boleh kosong",
				number: "Harap masukkan angka"
			},
			editDusunRw: {
				required: "Nama dusun tidak boleh kosong"
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
			let id_rw = $("#id_rw").val();
			let editNoRw = $("#editNoRw").val();
			let editDusunRw = $("#editDusunRw").val();

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
						url: site_url + "Wilayah/Rw/update",
						data: {
							id_rw: id_rw,
							editNoRw: editNoRw,
							editDusunRw: editDusunRw
						},
						success: function (data) {
							$("#editNoRw").val("");
							$("#editDusunRw")
								.val("")
								.trigger("change");
							$("#showRw").load(site_url + "Wilayah/Rw/viewRw");
							$("#modalEditRw").modal("hide");

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
							toastr["success"]("Data berhasil diubah!")
						}
					});
				}
			});
		}
	});
});

// Hapus RW
$("#showRw").on('click', '.hapusRw', function () {
	var id_rw = $(this).data("id_rw");
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
				url: site_url + "Wilayah/Rw/delete",
				data: {
					id_rw: id_rw
				},
				success: function (data) {
					$("#showRw").load(site_url + "Wilayah/Rw/viewRw");

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
					toastr["success"]("Data berhasil dihapus!")
				}
			});
		}
	});
});

// Tambah RT
$("#showRt").load(site_url + "Wilayah/Rt/viewRt");
$("#simpanRt").click(function () {
	$("#formRt").validate({
		rules: {
			noRt: {
				required: true,
				number: true
			},
			dusunRt: {
				required: true
			}
		},
		messages: {
			noRt: {
				required: "Nomor RT tidak boleh kosong",
				number: "Harap masukkan angka"
			},
			dusunRt: {
				required: "Nama dusun tidak boleh kosong"
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
			let noRt = $("#noRt").val();
			let dusunRt = $("#dusunRt").val();
			$.ajax({
				url: site_url + "Wilayah/Rt/insert",
				type: "POST",
				data: {
					noRt: noRt,
					dusunRt: dusunRt
				},
				success: function (data) {
					$("#noRt").val("");
					$("#dusunRt").val("");
					$("#showRt").html(data);
					$("#modalTambahRt").modal("hide");

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
					toastr["success"]("Data berhasil disimpan!")
				}
			});
		}
	});
});

// Kirim Value ke Edit RT
$(document).on('click', '.editRt', function () {
	var id_rt = $(this).attr('data-id_rt');
	var no_rt = $(this).attr('data-no_rt');
	var dusun_rt = $(this).attr('data-dusun_rt');

	$("#id_rt").val(id_rt);
	$("#editNoRt").val(no_rt);
	$("#editDusunRt").val(dusun_rt).trigger("change");
});

// Update RT
$("#editRt").click(function () {
	$("#formEditRt").validate({
		rules: {
			editNoRt: {
				required: true,
				number: true
			},
			editDusunRt: {
				required: true
			}
		},
		messages: {
			editNoRt: {
				required: "Nomor RT tidak boleh kosong",
				number: "Harap masukkan angka"
			},
			editDusunRt: {
				required: "Nama dusun tidak boleh kosong"
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
			let id_rt = $("#id_rt").val();
			let editNoRt = $("#editNoRt").val();
			let editDusunRt = $("#editDusunRt").val();

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
						url: site_url + "Wilayah/Rt/update",
						data: {
							id_rt: id_rt,
							editNoRt: editNoRt,
							editDusunRt: editDusunRt
						},
						success: function (data) {
							$("#editNoRt").val("");
							$("#editDusunRt")
								.val("")
								.trigger("change");
							$("#showRt").load(site_url + "Wilayah/Rt/viewRt");
							$("#modalEditRt").modal("hide");

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
							toastr["success"]("Data berhasil diubah!")
						}
					});
				}
			});
		}
	});
});

// Hapus RT
$("#showRt").on('click', '.hapusRt', function () {
	var id_rt = $(this).data("id_rt");
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
				url: site_url + "Wilayah/Rt/delete",
				data: {
					id_rt: id_rt
				},
				success: function (data) {
					$("#showRt").load(site_url + "Wilayah/Rt/viewRt");

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
					toastr["success"]("Data berhasil dihapus!")
				}
			});
		}
	});
});

// Tambah Pendidikan
$("#showPendidikan").load(site_url + "Informasi/Pendidikan/viewPendidikan");
$("#simpanPendidikan").click(function () {
	$("#formPendidikan").validate({
		rules: {
			deskripsi_pendidikan: {
				required: true
			}
		},
		messages: {
			deskripsi_pendidikan: {
				required: "Deskripsi tidak boleh kosong"
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
			let deskripsi_pendidikan = $("#deskripsi_pendidikan").val();
			$.ajax({
				url: site_url + "Informasi/Pendidikan/insert",
				type: "POST",
				data: {
					deskripsi_pendidikan: deskripsi_pendidikan
				},
				success: function (data) {
					$("#deskripsi_pendidikan").val("");
					$("#showPendidikan").html(data);
					$("#modalTambahPendidikan").modal("hide");

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
					toastr["success"]("Data berhasil disimpan!")
				}
			});
		}
	});
});

// Kirim Value ke Edit Pendidikan
$(document).on('click', '.editPendidikan', function () {
	var id_pendidikan = $(this).attr('data-id_pendidikan');
	var deskripsi_pendidikan = $(this).attr('data-deskripsi_pendidikan');

	$("#id_pendidikan").val(id_pendidikan);
	$("#editDeskripsiPendidikan").val(deskripsi_pendidikan);
});

// Update Pendidikan
$("#editPendidikan").click(function () {
	$("#formEditPendidikan").validate({
		rules: {
			editDeskripsiPendidikan: {
				required: true
			}
		},
		messages: {
			editDeskripsiPendidikan: {
				required: "Deskripsi tidak boleh kosong"
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
			let id_pendidikan = $("#id_pendidikan").val();
			let editDeskripsiPendidikan = $("#editDeskripsiPendidikan").val();

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
						url: site_url + "Informasi/Pendidikan/update",
						data: {
							id_pendidikan: id_pendidikan,
							editDeskripsiPendidikan: editDeskripsiPendidikan
						},
						success: function (data) {
							$("#editDeskripsiPendidikan").val("");
							$("#showPendidikan").load(site_url + "Informasi/Pendidikan/viewPendidikan");
							$("#modalEditPendidikan").modal("hide");

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
							toastr["success"]("Data berhasil diubah!")
						}
					});
				}
			});
		}
	});
});

// Hapus Pendidikan
$("#showPendidikan").on('click', '.hapusPendidikan', function () {
	var id_pendidikan = $(this).data("id_pendidikan");
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
				url: site_url + "Informasi/Pendidikan/delete",
				data: {
					id_pendidikan: id_pendidikan
				},
				success: function (data) {
					$("#showPendidikan").load(site_url + "Informasi/Pendidikan/viewPendidikan");

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
					toastr["success"]("Data berhasil dihapus!")
				}
			});
		}
	});
});

// Tambah Pendidikan
$("#showPajak").load(site_url + "Pajak/viewPajak");
$("#simpanPajak").click(function () {
	$("#formPajak").validate({
		rules: {
			nop: {
				required: true
			},
			namaWajibPajak: {
				required: true
			},
			alamatPajak: {
				required: true
			},
			luasPajak: {
				required: true
			},
			bangunanPajak: {
				required: true
			},
			pajakTerhutang: {
				required: true
			},
			keteranganPajak: {
				required: true
			}
		},
		messages: {
			nop: {
				required: "NOP tidak boleh kosong"
			},
			namaWajibPajak: {
				required: "Nama wajib pajak tidak boleh kosong"
			},
			alamatPajak: {
				required: "Alamat tidak boleh kosong"
			},
			luasPajak: {
				required: "Luas wilayah tidak boleh kosong"
			},
			bangunanPajak: {
				required: "Bangunan tidak boleh kosong"
			},
			pajakTerhutang: {
				required: "Pajak terhutang tidak boleh kosong"
			},
			keteranganPajak: {
				required: "Keterangan tidak boleh kosong"
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
			let nop = $("#nop").val();
			let namaWajibPajak = $("#namaWajibPajak").val();
			let alamatPajak = $("#alamatPajak").val();
			let luasPajak = $("#luasPajak").val();
			let bangunanPajak = $("#bangunanPajak").val();
			let pajakTerhutang = $("#pajakTerhutang").val();
			let scanpbb = $("#scanpbb").val();
			let keteranganPajak = $("#keteranganPajak").val();
			$.ajax({
				url: site_url + "Pajak/insert",
				type: "POST",
				data: {
					nop: nop,
					namaWajibPajak: namaWajibPajak,
					alamatPajak: alamatPajak,
					luasPajak: luasPajak,
					bangunanPajak: bangunanPajak,
					pajakTerhutang: pajakTerhutang,
					scanpbb: scanpbb,
					keteranganPajak: keteranganPajak
				},
				success: function (data) {
					$("#showPajak").html(data);
					$("#modalTambahPajak").modal("hide");
					$("#nop").val("");
					$("#namaWajibPajak").val("");
					$("#alamatPajak").val("");
					$("#luasPajak").val("");
					$("#bangunanPajak").val("");
					$("#pajakTerhutang").val("");
					$("#scanpbb").val(outputData.pic);
					$("#keteranganPajak").val("").trigger("change");

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
					toastr["success"]("Data berhasil disimpan!")
				}
			});
		}
	});
});

// Hapus Pajak
$("#showPajak").on('click', '.hapusPajak', function () {
	var id_pajak = $(this).data("id_pajak");
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
				url: site_url + "Pajak/delete",
				data: {
					id_pajak: id_pajak
				},
				success: function (data) {
					$("#showPajak").load(site_url + "Pajak/viewPajak");

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
					toastr["success"]("Data berhasil dihapus!")
				}
			});
		}
	});

});
