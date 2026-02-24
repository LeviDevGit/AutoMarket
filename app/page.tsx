import {
  ArrowRightIcon,
  CarFrontIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  FuelIcon,
  GaugeIcon,
  LayoutGridIcon,
  LogsIcon,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex h-16 justify-center px-4">
        <div className="flex w-full max-w-400 items-center justify-between">
          <div className="flex gap-2">
            <CarFrontIcon color="blue" />
            <h1 className="font-bold text-black">AutoMarket</h1>
          </div>
          <button className="rounded-full bg-blue-600 px-5 py-2 text-sm font-bold text-white transition-all hover:bg-blue-700">
            Minha Conta
          </button>
        </div>
      </header>
      <div className="flex flex-col justify-center gap-10 border-y border-slate-200 bg-[#f6f6f8] p-6 md:flex-row">
        <aside className="flex flex-col items-center gap-4">
          <div className="w-full space-y-6 rounded-xl border border-slate-200 bg-white p-6 text-black">
            <div className="flex justify-between">
              <h1>Filtros</h1>
              <button className="text-blue-500">Limpar</button>
            </div>
            <div>
              <label htmlFor="price-range">PREÇO MAX.</label>
              <input
                type="range"
                name="price-range"
                id="price-range"
                className="w-full"
              />
            </div>
            <label htmlFor="brand">Marca</label>
            <div>
              <input type="checkbox" name="brand" id="bmw" />
              <label htmlFor="bmw">BMW</label>
              <br />
              <input type="checkbox" name="brand" id="mercedes" />
              <label htmlFor="mercedes">Mercedes-Benz</label>
              <br />
              <input type="checkbox" name="brand" id="audi" />
              <label htmlFor="audi">Audi</label>
              <br />
              <input type="checkbox" name="brand" id="lexus" />
              <label htmlFor="lexus">Lexus</label>
            </div>
          </div>
          <div className="rounded-xl bg-blue-600 p-6 text-white shadow-lg shadow-blue-200">
            <h3 className="mb-2 font-bold">Avalie seu carro</h3>
            <p className="mb-4 text-xs text-blue-100">
              Receba uma oferta real em minutos sem sair de casa.
            </p>
            <button className="w-full rounded-lg bg-white py-2 text-sm font-bold text-blue-600 transition-colors hover:bg-blue-50">
              Começar
            </button>
          </div>
        </aside>
        <main className="flex w-full max-w-7xl flex-col gap-4">
          <div className="text-xs text-slate-500">
            <p>Home &gt; Inventory &gt; Luxury Sedans</p>
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-slate-900">
                Luxury Sedans Listings
              </h1>
              <p className="text-slate-500">
                Showing 12 luxury sedans available in stock.
              </p>
            </div>
            <div className="flex items-center gap-4 text-black">
              <div className="flex gap-2 rounded-lg border border-slate-200 bg-white p-1">
                <input
                  type="radio"
                  name="view"
                  id="grid-view"
                  hidden
                  defaultChecked
                  className="peer/grid"
                />
                <label
                  htmlFor="grid-view"
                  className="p-1.5 text-slate-400 peer-checked/grid:text-blue-600 hover:bg-slate-100"
                >
                  <LayoutGridIcon />
                </label>
                <input
                  type="radio"
                  name="view"
                  id="list-view"
                  hidden
                  className="peer/list"
                />
                <label
                  htmlFor="list-view"
                  className="p-1.5 text-slate-400 peer-checked/list:text-blue-600 hover:bg-slate-100"
                >
                  <LogsIcon />
                </label>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-slate-500">
                  Ordernar:{" "}
                </span>
                <select
                  name="order"
                  id="order"
                  className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-bold shadow-sm"
                >
                  <option value="price-low">Mais Recentes</option>
                  <option value="price-high">Preço: Decrescente</option>
                  <option value="year">Ano</option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 text-black lg:grid-cols-2 xl:grid-cols-3">
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
          </div>
          <div className="flex justify-center gap-2 text-black">
            <button className="flex h-10 w-10 items-center justify-center bg-white">
              <ChevronLeftIcon />
            </button>
            <button className="h-10 w-10 bg-white">1</button>
            <button className="h-10 w-10 bg-white">2</button>
            <button className="h-10 w-10 bg-white">3</button>
            ...
            <button className="h-10 w-10 bg-white">42</button>
            <button className="flex h-10 w-10 items-center justify-center bg-white">
              <ChevronRightIcon />
            </button>
          </div>
        </main>
      </div>
      <footer className="flex items-center justify-center px-4 py-12 text-black">
        <div className="flex w-full max-w-400 flex-col justify-between gap-8 opacity-60 grayscale transition-all hover:grayscale-0 md:flex-row">
          <div className="max-w-xs space-y-4">
            <div className="flex items-center gap-2">
              <div className="rounded bg-slate-900 p-1">
                <div className="h-3 w-3 rotate-45 bg-white" />
              </div>
              <span className="text-lg font-black tracking-tighter">
                AutoMarket
              </span>
            </div>
            <p className="text-xs leading-relaxed">
              A plataforma líder mundial em compra e venda de veículos premium.
              Excelência em cada km.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
            <div>
              <h4 className="mb-4 text-xs font-bold tracking-widest uppercase">
                Empresa
              </h4>
              <ul className="space-y-2 text-xs">
                <li>Sobre Nós</li>
                <li>Carreiras</li>
                <li>Contato</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xs font-bold tracking-widest uppercase">
                Newsletter
              </h4>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Seu email"
                  className="w-full rounded border-none bg-slate-100 px-3 py-2 text-xs"
                />
                <button className="rounded bg-slate-900 px-4 py-2 text-xs text-white">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CarCard() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <img
          src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=800&auto=format&fit=crop"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="rounded bg-emerald-500 px-2 py-1 text-[10px] font-bold tracking-wider text-white uppercase">
            AVAILABLE
          </span>
        </div>
      </div>
      <div className="p-6">
        <h1 className="mb-1 text-lg font-bold text-slate-900">
          2022 BMW 5 Series 530i
        </h1>
        <div className="flex gap-4 border-b border-slate-100 pb-4 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <GaugeIcon size={14} />
            <h2>12.450 km</h2>
          </div>
          <div className="flex items-center gap-2">
            <FuelIcon size={14} />
            <h2>Gasoline</h2>
          </div>
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <h1 className="text-2xl font-extrabold text-blue-600">$45.900</h1>
            <h2 className="text-[10px] font-medium text-slate-400 uppercase">
              EST. $765/MÊS
            </h2>
          </div>
          <button className="rounded-lg bg-slate-100 p-2.5 hover:bg-[#f6f6f8]">
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
