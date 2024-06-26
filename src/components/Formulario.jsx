import { Formik, Form, Field } from "formik";
import { useState } from "react";
import Modal from "./Modal";
import { useRef } from "react";

const initialValues = {
  fechaMuestra: "",
  fechaEnvío: "",
  planta: "",
  material: "",
  analisis: "",
  codigo: "",
  cuba: "",
  litros: "",
  comentarios: "",
};

const Formulario = ({ addLabel }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState({});
  const ref = useRef(null);
  const handleSubmit = () => {
    setModalOpen(true);
    setData(ref.current.values);
    ref.current.values = null;
  };
  const SaveData = () => {
    addLabel(data);
    ref.current.resetForm();
  };

  return (
    <div className="p-4 bg-neutral-900 shadow-md max-h-fit">
      <Modal
        modalOpen={modalOpen}
        onAccept={SaveData}
        onClose={() => setModalOpen(false)}
      />
      <h1 className="text-2xl font-bold mb-4 text-center text-white">
        Datos Etiqueta
      </h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        innerRef={ref}
      >
        <Form>
          <div className="mb-4">
            <label
              htmlFor="fechaMuestra"
              className=" text-sm font-medium text-white"
            >
              Fecha de Muestreo:
            </label>
            <Field
              type="date"
              id="fechaMuestra"
              name="fechaMuestra"
              className="mt-1 p-2 w-full border rounded"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="fechaEnvio"
              className=" text-sm font-medium text-white"
            >
              Fecha de Envío:
            </label>
            <Field
              type="date"
              id="fechaEnvio"
              name="fechaEnvio"
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="planta" className=" text-sm font-medium text-white">
              Planta:
            </label>
            <Field
              as="select"
              id="planta"
              name="planta"
              className="mt-1 p-2 w-full border rounded"
            >
              <option value="">Seleccione Planta de origen</option>
              <option value="Monte Patria">Monte Patria</option>
              <option value="Salamanca">Salamanca</option>
              <option value="Sotaquí">Sotaqui</option>
            </Field>
          </div>

          <div className="mb-4">
            <label
              htmlFor="analisis"
              className=" text-sm font-medium text-white"
            >
              Análisis Solicitado:
            </label>
            <Field
              as="select"
              id="analisis"
              name="analisis"
              className="mt-1 p-2 w-full border rounded"
            >
              <option value="">Seleccione Tipo de Análisis</option>
              <option value="Control Proceso">Control Proceso</option>
              <option value="FTR Vino">FTR Vino</option>
              <option value="Vino Filtrado de Borra">
                Vino Filtrado de Borra
              </option>
              <option value="Mosto para Sulfuroso">Mosto para Sulfuroso</option>
              <option value="Mosto para FAN">Mosto para FAN</option>
              <option value="Sulfuroso al 5%">Sulfuroso al 5%</option>
              <option value="Mosto para FAN y SO2">Mosto para FAN y SO2</option>
              <option value="Vino de Guarda">Vino de Guarda</option>
            </Field>
          </div>
          <div className="mb-4">
            <label
              htmlFor="material"
              className=" text-sm font-medium text-white"
            >
              Material:
            </label>
            <Field
              as="select"
              id="material"
              name="material"
              className="mt-1 p-2 w-full border rounded"
            >
              <option value="">SELECCIONE MATERIAL</option>
              <option value="VFB">VFB</option>
              <option value="VP-MOST-ESP-FI">VP-MOST-ESP-FI</option>
              <option value="VP-MOST-MIST">VP-MOST-MIST</option>
              <option value="VP-MOST-COM">VP-MOST-COM</option>
              <option value="VP-MOST-3R-AU">VP-MOST-3R-AU</option>
              <option value="VP-MOST-3R-FI">VP-MOST-3R-FI</option>
              <option value="VP-MOST-3R-PJ">VP-MOST-3R-PJ</option>
              <option value="VP-VINO-ESP-F">VP-VINO-ESP-FI</option>
              <option value="VP-VINO-MIST">VP-VINO-MIST</option>
              <option value="VP-VINO-COM">VP-VINO-COM</option>
              <option value="VP-VINO-3R-AU">VP-VINO-3R-AU</option>
              <option value="VP-VINO-3R-FI">VP-VINO-3R-FI</option>
              <option value="VP-VINO-3R-PJ">VP-VINO-3R-PJ</option>
            </Field>
          </div>
          <div className="mb-4">
            <label htmlFor="codigo" className=" text-sm font-medium text-white">
              Código
            </label>
            <Field
              type="text"
              id="codigo"
              name="codigo"
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cuba" className=" text-sm font-medium text-white">
              Cuba:
            </label>
            <Field
              type="text"
              id="cuba"
              name="cuba"
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="litros" className=" text-sm font-medium text-white">
              Litros
            </label>
            <Field
              type="text"
              id="litros"
              name="litros"
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="comentarios"
              className=" text-sm font-medium text-white"
            >
              Comentarios
            </label>
            <Field
              as="textarea"
              type="text"
              id="comentarios"
              name="comentarios"
              className="mt-1 p-2 w-full border rounded"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              Agregar Etiqueta
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Formulario;
