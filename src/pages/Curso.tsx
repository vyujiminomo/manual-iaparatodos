import { useEffect } from 'react';

const Curso = () => {
  useEffect(() => {
    // Redireciona automaticamente para o link do Hotmart
    window.location.href = 'https://pay.hotmart.com/N100239403C?off=b9iztv2i';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-white text-xl">Redirecionando...</p>
      </div>
    </div>
  );
};

export default Curso;