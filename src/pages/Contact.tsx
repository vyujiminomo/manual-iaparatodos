
const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-8">
            <a href="/" className="text-black font-medium hover:text-gray-600">
              Home
            </a>
            <a href="/manual" className="text-black font-medium hover:text-gray-600">
              Manual IA Para Todos
            </a>
            <a 
              href="https://linkedin.com/in/vitor-yuji-minomo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black font-medium hover:text-gray-600"
            >
              LinkedIn
            </a>
            <a href="/contato" className="text-black font-medium text-blue-600">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* Contact Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-black">
              Quer Conversar?
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              Me mande um e-mail para:
            </p>
            <p className="text-3xl text-gray-700 font-bold">
              contato.vitoryujiminomo@gmail.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
