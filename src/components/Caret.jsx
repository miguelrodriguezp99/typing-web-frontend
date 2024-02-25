import "../styles/Caret.css";

const Caret = () => {
  return (
    <div className="relative w-0.5 h-6 bg-secondary caret inline-block ">
      <div className="bg-secondary w-full h-full absolute mt-2"></div>
    </div>
  );
};

export default Caret;
