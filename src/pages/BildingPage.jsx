import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function BuildingPage() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    window.scrollTo(0, 0);
    navigate("/");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center pt-40 pb-40 gap-8">
      <h1 className="text-center text-3xl font-extrabold text-primary">
        ⚠ Página em construção ⚠
      </h1>
      <p className="text-center text-lg text-dark-gray-2 max-w-md px-5">
        Esta página ainda está em desenvolvimento. Por favor, volte mais tarde!
      </p>
      <button
        onClick={handleRedirect}
        className="p-2 w-36 border bg-primary rounded-md text-light-gray-3 hover:scale-110 hover:bg-error hover:cursor-pointer hover:transition-colors text-center"
      >
        Voltar
      </button>
    </div>
  );
}
