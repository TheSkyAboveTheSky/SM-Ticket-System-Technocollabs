const Logout = () => {
  localStorage.removeItem('x-auth-token');
  window.location.reload();
}
export default Logout;