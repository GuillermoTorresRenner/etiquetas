import { print } from "react-html2pdf";
import logo from "../assets/logo.png";
const Etiqueta = ({ data }) => {
  return (
    <div>
      <div className="flex justify-center">
        {data.length > 0 && (
          <button
            className="bg-green-700 p-3 text-white rounded-md mb-3 hover:bg-green-950"
            onClick={() => print("Etiquetas Manuales", "etiquetas")}
          >
            Descargar Etiquetas
          </button>
        )}
      </div>

      <div className="w-full border-2 mx-10 grid grid-cols-2" id="etiquetas">
        {data.map((d, index) => (
          <div key={index} className="p-4 border ">
            <div className=" border-4 px-3 py-2">
              <img
                src={logo}
                alt="logo"
                width="100" // Ancho deseado de la imagen
                height="200" // Altura deseada de la imagen
              />
              <h2 className="font-bold mb-2 text-center text-2xl">
                {d.analisis}
              </h2>
              <p className="mb-2">
                <strong className="text-gray-600">Planta:</strong> {d.planta}
              </p>
              <p className="mb-2">
                <strong className="text-gray-600">Fecha de Muestreo:</strong>{" "}
                {d.fechaMuestra}
              </p>
              <p className="mb-2">
                <strong className="text-gray-600"> Fecha Envío:</strong>{" "}
                {d.fechaEnvio}
              </p>
              <p className="mb-2">
                <strong className="text-gray-600">Material:</strong>{" "}
                {d.material}
              </p>
              <p className="mb-2">
                <strong className="text-gray-600">Código:</strong> {d.codigo}
              </p>
              <p className="mb-2">
                <strong className="text-gray-600">Cuba:</strong> {d.cuba}
              </p>
              <p className="mb-2">
                <strong className="text-gray-600">Litros:</strong> {d.litros}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Etiqueta;
