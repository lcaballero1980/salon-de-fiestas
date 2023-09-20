import '../estilos/contacto.css'

const Contactos = () => {
  return (
    <main>s
      <div className="holder">
        <h3>ENVIANOS TU CONSULTA O SOLICITÁ TU PRESUPUESTO</h3>
        <p>Consultá las condiciones y los servicios incluidos para cada tipo de Evento. Solicitanos tu presupuesto.</p>
        <p>Vení a visitarnos y Reservá tu fecha!!!</p>
        <div className="contenerdor-formulario-contacto">
          
          {/* formulario */}

          <div className="formulario">
            <form method="post" action=''>
              <fieldset>
                <label for="nombres">Nombre: <input id="nombre" name="nombre" type="text" required /></label>
                <label for="apellido">Apellido: <input id="apellido" name="apellido" type="text" required /></label>
                <label for="email">Email: <input id="email" name="email" type="email" required /></label>
              </fieldset>
              <fieldset>
                <label for="referencia">Como se entero de nosotros?
                  <select id="referencia" name="referencia">
                    <option value="">(Seleccione uno)</option>
                    <option value="1">Intagram</option>
                    <option value="2">Facebook</option>
                    <option value="3">Amigos</option>
                    <option value="4">Other</option>
                  </select>
                </label>
                <label for="mensaje">Por favor envio la consulta:
                  <textarea id="mensaje" name="mensaje" rows="3" cols="30" placeholder="Mensaje"></textarea>
                </label>
              </fieldset>
              <input type="submit" value="Enviar" />
            </form>
          </div>
          
            {/* fin del formulario */}
          <div className="contacto">
            <div className="contacto-info">
              <ul className="direccion">
                <li>
                  <b>Podés contactarnos por estas vías, o bien completar el formulario que se encuentra a continuación (*todos los campos son obligatorios):</b>
                </li>
                <li><span>🗺️ Direccion:</span></li>
                <li><span>📞Telefono:</span></li>
                <li><span>📱Celular:</span></li>
                <li><span>📧Email:</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Contactos;