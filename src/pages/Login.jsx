import React from 'react';
import logo from '../assets/images/logo.png';

const Login = () => {
  return (
    <div className="login-container">
      <img src={logo} width="200px" alt="Chill Logo" />
      <h2>Masuk</h2>
      <p>Selamat Datang Kembali!</p>
      <form>
        <label className="login-help" htmlFor="name">Username</label>
        <input type="text" placeholder="Masukan username" required />
        <label className="login-help" htmlFor="password">Kata Sandi</label>
        <input type="password" placeholder="Masukan kata sandi" required />
        <div className="login-help">
          <p className="belum-punya-akun">Belum Punya Akun? <a href="/register">Daftar</a></p>
          <a href="#">Lupa Password?</a>
        </div>
        <button type="submit">Masuk</button>
        <p className="text-devider">Atau</p>
        <button className="google-login">
          <img src="images/goggle.webp" width="25px" alt="Google Logo" /> Masuk dengan Google
        </button>
      </form>
    </div>
  );
};

export default Login;
