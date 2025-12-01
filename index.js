import Header from '@/components/Header';
import LotteryCard from '@/components/LotteryCard';
import { useState, useEffect } from 'react';

export default function Home() {
  const [featuredLotteries, setFeaturedLotteries] = useState([]);
  
  const lotteries = [
    { id: 1, name: 'Mega-Sena', color: 'from-green-500 to-emerald-700', price: 4.50, nextDraw: 'Sábado, 20:00' },
    { id: 2, name: 'Lotofácil', color: 'from-blue-500 to-cyan-700', price: 2.50, nextDraw: 'Segunda a Sábado' },
    { id: 3, name: 'Quina', color: 'from-purple-500 to-indigo-700', price: 2.00, nextDraw: 'Terça a Sábado' },
    { id: 4, name: 'Lotomania', color: 'from-orange-500 to-red-600', price: 3.00, nextDraw: 'Sexta-feira' },
    { id: 5, name: 'Timemania', color: 'from-yellow-500 to-orange-600', price: 3.00, nextDraw: 'Quinta-feira' },
    { id: 6, name: 'Dia de Sorte', color: 'from-pink-500 to-rose-600', price: 2.50, nextDraw: 'Quarta-feira' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              LotoSmart AI
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              A plataforma mais inteligente para aumentar suas chances nas loterias
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
                Gerar Desdobramento Gratuito
              </button>
              <button className="px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-full font-bold text-lg hover:bg-gray-700 transition-all">
                Ver Resultados
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl">
                <div className="text-3xl font-bold text-cyan-400">+98%</div>
                <div className="text-gray-400">Aumento de chances</div>
              </div>
              <div className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl">
                <div className="text-3xl font-bold text-purple-400">R$ 2.1M</div>
                <div className="text-gray-400">Em prêmios gerados</div>
              </div>
              <div className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl">
                <div className="text-3xl font-bold text-green-400">15.8K</div>
                <div className="text-gray-400">Usuários ativos</div>
              </div>
              <div className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl">
                <div className="text-3xl font-bold text-yellow-400">4.7★</div>
                <div className="text-gray-400">Avaliação dos usuários</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lotteries Grid */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Principais Lotterias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lotteries.map((lottery) => (
            <LotteryCard key={lottery.id} lottery={lottery} />
          ))}
        </div>
      </section>

      {/* AI Feature */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 border border-gray-700">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  IA Inteligente
                </span>
                <br />
                Para Desdobramentos Otimizados
              </h2>
              <p className="text-gray-300 mb-6">
                Nossa inteligência artificial analisa milhões de combinações históricas para criar os desdobramentos mais eficientes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Análise estatística avançada</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Algoritmos de machine learning</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Garantia matemática de cobertura</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Otimização em tempo real</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-black/50 rounded-xl p-6 border border-cyan-500/30">
                <div className="text-center mb-4">
                  <div className="inline-block px-4 py-2 bg-cyan-900/30 text-cyan-400 rounded-full text-sm">
                    GERADOR DE DESDOBRAMENTOS
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-400 mb-2">Escolha a Loteria</label>
                    <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3">
                      <option>Mega-Sena</option>
                      <option>Lotofácil</option>
                      <option>Quina</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Números Selecionados</label>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {[3, 7, 12, 18, 23, 29, 35, 41, 47, 52].map(num => (
                        <div key={num} className="w-10 h-10 bg-gradient-to-b from-purple-600 to-purple-700 rounded-full flex items-center justify-center font-bold">
                          {num}
                        </div>
                      ))}
                    </div>
                  </div>
                  <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-bold text-lg hover:shadow-2xl transition-all">
                    Gerar com IA → 
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-12 py-8">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>© 2024 LotoSmart AI. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">Este site não é afiliado à Caixa Econômica Federal.</p>
        </div>
      </footer>
    </div>
  );
}
