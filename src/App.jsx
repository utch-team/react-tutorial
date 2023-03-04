import ImageJenny from "../public/img/chacalosaurio.jpeg";
import ImageJenny2 from "../public/img/Jenni20Rivera.png";

function App() {
  const arregloDeInfoDeJenny = [
    {
      id: 1,
      titulo: "Jenny se muere",
      description: "Jenny se muere en un avion pobrecita",
    },
    {
      id: 2,
      titulo: "Jenny revive en el infierno",
      description: "Jenny revive en el infierno y se vuelve un demonio",
    },
    {
      id: 3,
      titulo: "Jenny se vuelve un angel",
      description: "Jenny se vuelve un angel y se va a vivir a los cielos",
    },
    {
      id: 4,
      titulo: "Jenny se putea a dios",
      description: "Jenny se putea a dios y se va a vivir a la tierra",
    },
    {
      id: 5,
      titulo: "Jenny se vuelve un demonio",
      description: "Jenny se vuelve un demonio y se va a vivir al infierno",
    },
    {
      id: 6,
      titulo: "Jenny se enamora del chamuco",
      description: "Jenny se enamora del chamuco y se va a vivir con el",
    },
  ];

  return (
    <>
      <div className='bg-zinc-800 text-white flex items-center'>
        <div className='flex items-center justify-between w-full mx-8 py-6'>
          <img src={ImageJenny} alt='Jenny' className='rounded-full h-10 w-10' />
          <h1 className='text-2xl font-bold'>Jenny rivera</h1>
        </div>
      </div>
      <div className='h-full bg-zinc-700'>
        <div className='flex xl:flex-row gap-2 flex-col-reverse pt-4 justify-center items-center md:mx-24'>
          <div className='bg-white p-10 m-10 rounded-sm'>
            <h2 className='text-lg font-bold'>¿Quien es Jenny rivera?</h2>
            <p className=''>
              Jenny Rivera fue una cantante, compositora, actriz y empresaria
              mexicana-estadounidense nacida en Long Beach, California, en julio de 1969 y fallecida
              en un accidente de avión en diciembre de 2012. Rivera fue conocida como la "Diva de la
              Banda" y se convirtió en una de las artistas más exitosas de la música regional
              mexicana en la década de 2000, con más de 15 millones de álbumes vendidos en todo el
              mundo. A lo largo de su carrera, recibió varios premios y reconocimientos por su
              música, incluyendo múltiples premios Billboard Latin Music y nominaciones al Premio
              Grammy Latino. Además de su carrera musical, Rivera también se destacó en el mundo
              empresarial, fundando su propia compañía discográfica y una línea de ropa. También
              participó en varios programas de televisión, incluyendo "Jenny Rivera Presents:
              *Chiquis and Raq-C" y "I Love Jenny". La trágica muerte de Rivera a los 43 años
              conmocionó a la comunidad latina y dejó un gran vacío en la industria de la música.
            </p>
          </div>
          <img src={ImageJenny2} alt='Jenny' className='rounded-lg h-1/2 w-1/2' />
        </div>
      </div>
      <div className='h-full p-4 flex flex-col gap-8'>
        {arregloDeInfoDeJenny.map((info, index) => {
          return (
            <div className='bg-zinc-900 text-white text-center py-6 rounded-xl' key={index}>
              <h2 className='text-2xl font-bold '>{info.titulo}</h2>
              <p>{info.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
