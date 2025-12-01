export default function LotteryCard({ lottery }) {
  return (
    <div className={`bg-gradient-to-br ${lottery.color} rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold">{lottery.name}</h3>
          <p className="text-gray-200">Próximo sorteio: {lottery.nextDraw}</p>
        </div>
        <span className="bg-black/30 px-3 py-1 rounded-full text-sm">
          R$ {lottery.price.toFixed(2)}
        </span>
      </div>
      
      {/* Sample numbers */}
      <div className="flex flex-wrap gap-2 mb-6">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold backdrop-blur-sm">
            {i * 5 + 1}
          </div>
        ))}
      </div>
      
      <div className="flex justify-between">
        <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-all backdrop-blur-sm">
          Resultados
        </button>
        <button className="px-4 py-2 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-200 transition-all">
          Gerar
        </button>
      </div>
    </div>
  );
}
