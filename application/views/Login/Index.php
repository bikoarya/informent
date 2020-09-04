<div class="wrapper">
    <?= $this->session->flashdata('message'); ?>
    <div class="container">
            <form action="<?= site_url('Login'); ?>" method="POST" id="formLogin">
            <div class="box">
                <h2 class="title text-center">Masuk</h2>
                <div class="box-username">
                <label for="username">Username</label>
                <input type="text" class="username" name="username" id="username" autocomplete="off" placeholder="Masukkan Username">
                <?= form_error('username', '<small class="text-danger pl-1">', '</small>'); ?>
            </div>

                <div class="box-password">
                <label for="password" class="text-center">Password</label>
                <input type="password" class="password" name="password" id="password" autocomplete="off" placeholder="Masukkan Password">
                <?= form_error('password', '<small class="text-danger pl-1">', '</small>'); ?>
            </div>

            <button type="submit" class="text-white button mt-4" id="btn-login">Masuk</button>
            </div>
            </form>
    </div>
</div>