import OrderCard from "../components/OrderCard";

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-light-gray-3 py-20 px-4 md:px-10">
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 p-6 bg-white rounded-2xl shadow-md">
          <p className="text-dark-gray-2 font-bold text-base mb-6">Meu Perfil</p>

          <nav className="flex flex-col gap-4">
            <a href="#" className="text-dark-gray-2 hover:text-primary transition-colors font-medium text-sm">
              Meus pedidos
            </a>
            <hr className="border-light-gray-2" />
            <a href="#" className="text-dark-gray-2 hover:text-primary transition-colors font-medium text-sm">
              Minhas informações
            </a>
            <hr className="border-light-gray-2" />
            <a href="#" className="text-dark-gray-2 hover:text-primary transition-colors font-medium text-sm">
              Métodos de pagamento
            </a>
          </nav>
        </aside>

        {/* Conteúdo principal */}
        <main className="flex-1 bg-white rounded-2xl shadow-md p-6 md:p-10">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold text-dark-gray-2">Meus pedidos</h1>
            <span className="hidden lg:inline-block text-sm text-dark-gray-2 font-medium">
              STATUS
            </span>
          </div>
          <hr className="mb-6 border-light-gray-2" />
          
          {/* Cards dos pedidos */}
          <OrderCard />
        </main>
      </div>
    </div>
  );
}
