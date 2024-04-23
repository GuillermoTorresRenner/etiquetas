"use client";

const Modal = ({ modalOpen, onClose, onAccept }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 ${
        modalOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white p-8 rounded shadow-lg">
        <p className="text-lg font-bold mb-4 text-center">
          Revise la información ingresada en la etiqueta antes de agregar .
        </p>
        <p className="text-lg  mb-4">Una vez agregada no podrá editarla.</p>

        <div className="flex justify-end">
          <button
            className="bg-green-500 text-white px-4 py-2 mr-2 rounded hover:bg-green-600"
            onClick={() => {
              onAccept();
              onClose();
            }}
          >
            Agregar Etiqueta
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={onClose}
          >
            Revisar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
