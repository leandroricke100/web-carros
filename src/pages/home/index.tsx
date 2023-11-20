import { Container } from "../../components/container";

export function Home() {
  return (
    <Container>
      <section className="bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex justify-center items-center gap-2">
        <input
          className="w-full border-2 rounded-lg h-9 px-3 outline-none"
          placeholder="Digite o nome do carro"
        />
        <button className="bg-red-500 h-9 px-8 rounded-lg text-white font-medium text-lg">
          Buscar
        </button>
      </section>

      <h1 className="font-bold text-center mt-6 text-2xl mb-4">
        Carros novos e usados em todo o Brasil
      </h1>

      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <section className="w-full bg-white rounded-lg">
          <img
            className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
            src="data:image/jpeg;base64,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"
            alt="carro"
          />
          <p className="font-bold mt-1 mb-2 px-2">BMW 320i</p>

          <div className="flex flex-col px-2">
            <span className="text-zinc-500 mb-6">
              Ano 2016/2017 | 30.599 km
            </span>
            <strong className="text-black font-medium text-xl">
              R$ 190.000
            </strong>
          </div>

          <div className="w-full h-px bg-slate-200 my-2"></div>

          <div className="px-2 pb-2">
            <span className="text-zinc-500">Viçosa - MG</span>
          </div>
        </section>
      </main>
    </Container>
  );
}
