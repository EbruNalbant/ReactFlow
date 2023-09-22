const InputArea = ({ label, type, name, holder }) => {
  return (
    <div>
      <label className="mb-2 text-sm font-medium">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={holder}
        className="bg-gray-700 border border-gray-600 placeholder-gray-400 p-2.5 block rounded-lg w-full  focus:ring focus:border-blue-500 my-2"
      />
    </div>
  );
};

export default InputArea;
