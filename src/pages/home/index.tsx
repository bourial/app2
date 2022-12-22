import jsCookie from 'js-cookie';

const Home = () => {
  const logout = () => {
    jsCookie.remove('token');
    window.location.reload();
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='mb-5 text-3xl'>This is the Home page</h1>
      <button
        className='bg-[#62C247] text-white font-semibold px-12 py-3 rounded-md active:scale-95 transition-all duration-150'
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
