
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, SMARTPHONES, TABLETS, EXTERNAL_SITES } from './constants';
import { Product, ExternalSite } from './types';

// --- Sub-components (defined outside to prevent re-renders) ---

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Altura aproximada do header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-extrabold tracking-tight text-gray-900 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          Mobi<span className="text-tech-blue">Tech</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-sm font-semibold text-gray-600 hover:text-tech-blue transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
           {/* Mobile menu icon can be added here if needed */}
        </div>
      </div>
    </header>
  );
};

const Hero: React.FC = () => {
  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('celulares');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-br from-white to-gray-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Tecnologia que <br />
            <span className="text-tech-blue">acompanha seu ritmo</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            Encontre o dispositivo perfeito para sua rotina. Performance de ponta e custo-benefício que você só encontra aqui.
          </p>
          <button 
            onClick={handleCtaClick}
            className="inline-block bg-tech-blue text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-[#111827] hover:text-white hover:shadow-xl transform hover:-translate-y-1 transition-all"
          >
            Ver Melhores Ofertas
          </button>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 relative">
          <img 
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop" 
            alt="Smartphones Modernos" 
            className="rounded-2xl shadow-2xl transition-all duration-700 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group">
      <div className="overflow-hidden rounded-xl mb-4 bg-gray-50 aspect-square">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-6 flex-grow">{product.highlight}</p>
      <a 
        href={product.affiliateUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block text-center bg-gray-50 text-gray-900 border border-gray-200 py-3 rounded-xl font-bold hover:bg-[#111827] hover:text-white hover:border-[#111827] transition-all"
      >
        Ver no Mercado Livre
      </a>
    </div>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode; id: string; light?: boolean }> = ({ title, children, id, light }) => (
  <section id={id} className={`py-20 px-6 ${light ? 'bg-white' : 'bg-gray-50'}`}>
    <div className="container mx-auto">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-12 text-center md:text-left tracking-tight">{title}</h2>
      {children}
    </div>
  </section>
);

const EducationalContent: React.FC = () => {
  return (
    <section id="educativo" className="py-20 bg-white border-y border-gray-100 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center tracking-tight">Guia de Compra 2025</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-tech-blue mb-4">Qual celular escolher em 2025?</h3>
            <p className="text-gray-600 leading-relaxed">
              O mercado de smartphones em 2025 está mais maduro do que nunca. Ao escolher seu próximo aparelho, foque em três pilares: Longevidade (atualizações de sistema), Qualidade de Tela (AMOLED 120Hz é o padrão) e Versatilidade de Câmera. Modelos intermediários hoje entregam experiências que eram exclusivas de topos de linha há 2 anos.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-tech-blue mb-4">Android ou iOS: Qual o seu perfil?</h3>
            <p className="text-gray-600 leading-relaxed">
              Enquanto o iOS oferece um ecossistema fechado, seguro e extremamente fluido, o Android reina na liberdade de personalização e variedade de hardware. Se você busca integração perfeita entre dispositivos, vá de iPhone. Se quer o melhor hardware por menos preço ou funcionalidades específicas de software, o Android é sua casa.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-tech-blue mb-4">Quando vale a pena investir em um tablet?</h3>
            <p className="text-gray-600 leading-relaxed">
              Tablets deixaram de ser apenas "celulares gigantes". Para estudantes, designers e profissionais que viajam muito, um tablet com caneta stylus e teclado magnético pode substituir o notebook em 90% das tarefas, oferecendo muito mais portabilidade e autonomia de bateria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const OtherSites: React.FC = () => {
  return (
    <section id="rede" className="py-20 px-6 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Nossa Rede MobiTech</h2>
            <p className="text-gray-500 mt-2">Explore outros portais da nossa rede de especialistas.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXTERNAL_SITES.map((site, index) => (
            <a 
              key={index}
              href={site.url}
              className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-300">{site.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-tech-blue transition-colors">{site.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{site.description}</p>
              <div className="mt-6 flex items-center text-tech-blue text-sm font-bold">
                Conhecer site
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTAFinal: React.FC = () => {
  return (
    <section className="py-24 bg-graphite text-center px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">Escolha inteligência. Escolha MobiTech.</h2>
        <p className="text-gray-400 mb-10 text-lg">As melhores ofertas de tecnologia atualizadas diariamente para você.</p>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-tech-blue text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-[#111827] hover:text-white transition-all"
        >
          Voltar ao Topo
        </button>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-extrabold mb-6">Mobi<span className="text-tech-blue">Tech</span></div>
            <p className="text-gray-500 max-w-sm">
              Sua ponte para o futuro da tecnologia. Curadoria especializada em dispositivos móveis e acessórios premium.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-400">Links Rápidos</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-white transition-colors text-left w-full">Início</button></li>
              <li><a href="#celulares" className="hover:text-white transition-colors">Celulares</a></li>
              <li><a href="#tablets" className="hover:text-white transition-colors">Tablets</a></li>
              <li><a href="#educativo" className="hover:text-white transition-colors">Comparativos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-400">Legal</h4>
            <p className="text-gray-600 text-xs italic leading-relaxed">
              Este site participa do programa de afiliados do Mercado Livre. Ao comprar pelos nossos links, você apoia nosso trabalho sem pagar nada a mais por isso.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© 2025 MobiTech. Todos os direitos reservados.</p>
          <p className="mt-4 md:mt-0">Desenvolvido com foco em alta performance.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        
        <Section title="Celulares em Destaque" id="celulares">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SMARTPHONES.map(phone => (
              <ProductCard key={phone.id} product={phone} />
            ))}
          </div>
        </Section>

        <Section title="Tablets Recomendados" id="tablets" light>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TABLETS.map(tablet => (
              <ProductCard key={tablet.id} product={tablet} />
            ))}
          </div>
        </Section>

        <EducationalContent />
        
        <OtherSites />
        
        <CTAFinal />
      </main>

      <Footer />
    </div>
  );
};

export default App;
