import '../estilos/home.css';

const Home = () => {
  return (
    <main>
      <div className='titular'>
        <img className='imagen-titular' src='/img/imagenes-titular/frente.jpeg' alt='Frente del salon de fiestas' />
        <div className='titular-principal'>
          <h2 className='image-texto h2'>VENÍ A CONOCERNOS!!!</h2>
          <p className='image-texto p'><b>NUESTRO HORARIO DE ATENCIÓN ES DE MARTES A VIERNES DE 18.00 A 20.00 HS.</b></p>
          <p className='image-texto p'><b>CAPACIDAD 80 PERSONAS.</b></p>
          <a className='enlace-solicitud' href="/Contacto">Solicitá tu presupuesto</a>
        </div>
      </div>
      <div className='holder'>
        <div className='columna-lugar'>
          <div className='columna-casamiento'>
            <img className='img-lugar' src='/img/imagenes-titular/casamiento.jpg' />
            <div>
              <h3>Viví tu experiencia a Puro</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus voluptate soluta enim molestias
                explicabo, maxime perspiciatis nihil beatae at, alias doloribus expedita fugit sequi labore aliquid
                ab! Aspernatur, dolor ducimus.
                Accusamus earum aperiam adipisci distinctio cum nostrum quae fugiat sed tempore fuga amet, numquam
                sunt eaque eos ipsa impedit. </p>
            </div>
          </div>
          <div className='columna-baile'>
            <img className='img-lugar' src='/img/imagenes-titular/baile.jpg' />
            <div>
              <h3>No hay límites para soñar</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates excepturi totam temporibus porro
                impedit dicta. Distinctio cum obcaecati aliquam harum aperiam assumenda nesciunt, voluptates velit
                voluptatem! Velit voluptate commodi deserunt.
                Laborum sequi, id ipsa, inventore dolorum laudantium cum in recusandae nihil ducimus praesentium
                sunt ex ipsum iure! Facere nihil necessitatibus voluptas, non ipsum quae voluptates soluta!
                Quibusdam earum aliquam nisi.
                Distinctio repellendus consequatur soluta beatae temporibus tenetur ad quia eaque exercitationem
                repellat iusto cupiditate atque facilis a culpa, dolore rerum quo commodi magnam, ipsa maxime ut
                veniam! Inventore, officia deserunt.
                Dolorem saepe accusantium dolore nisi nostrum nam neque minima, eum libero, </p>
            </div>
          </div>

          <div>
            <h3>Quienes somos</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae porro animi nam explicabo numquam hic
              ratione quam saepe est. Ex sequi quidem libero modi fugiat est sint laudantium incidunt suscipit.
              Laboriosam in mollitia sunt amet, voluptate, ducimus ut dolorum ratione error velit necessitatibus
              non quas quisquam minima consequuntur totam. Quia perferendis assumenda accusantium quis voluptate
              consequatur cumque beatae, maxime cum.
              Ipsa maxime reprehenderit placeat omnis dolorem fugiat accusantium, molestias, repellat quo,
              officiis nulla animi impedit itaque praesentium illo voluptatem repellendus. Recusandae quasi error
              ad similique nesciunt a cupiditate perspiciatis voluptates?
              Cum veniam beatae eligendi pariatur excepturi voluptatibus aliquam facilis facere. Ducimus dolorum
              similique ullam quod reiciendis numquam fugiat nemo beatae, non expedita earum quisquam ad omnis
              temporibus, pariatur dolore maiores!</p>
          </div>
        </div>


      </div>
    </main>
  );
}
export default Home;