import ImageJenny from "../public/img/chacalosaurio.jpeg";

function App() {
  return (
    <>
      <div className='bg-zinc-800 text-white flex items-center'>
        <div className='flex items-center justify-between w-full mx-8 pt-6'>
          <img src={ImageJenny} alt='Jenny' className='rounded-full h-10 w-10' />
          <h1 className='text-2xl font-bold'>Jenny</h1>
        </div>
      </div>
    </>
  );
}

export default App;
