import Formulario from "./components/Formulario";
import { useState } from "react";
import Etiquetas from "./components/Etiquetas";

const Home = () => {
  const [labelList, setLabelList] = useState([]);

  const addLabel = (label) => {
    setLabelList([...labelList, label]);
  };

  return (
    <div className="px-10">
      <h1 className="text-center text-3xl my-5">
        Generador de etiquetas manuales
      </h1>
      <div className="flex justify-around">
        {labelList.length < 6 ? (
          <Formulario addLabel={addLabel} />
        ) : (
          <div className="bg-yellow-300 max-h-64 max-w-64 text-center p-3">
            <h2 className="font-bold mb-2">
              {" "}
              Oops... Se alcanzó el limite de 6 etiquetas por hoja
            </h2>
            <p>
              Por favor descargue las etiquetas generadas y luego recargue la
              página (f5) para crear una hoja nueva
            </p>
          </div>
        )}
        <div className="flex justify-center">
          <Etiquetas data={labelList} />
        </div>
      </div>
    </div>
  );
};

export default Home;
