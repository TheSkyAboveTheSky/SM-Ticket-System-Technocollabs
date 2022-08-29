const Logout = () => {
  localStorage.removeItem('x-auth-token');
  window.location.ref("/login");
}
export default Logout;