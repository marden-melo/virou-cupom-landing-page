"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  const getWhatsappLink = (planName: string) => {
    const message = `Quero assinar o plano ${planName}`;
    const phoneNumber = "55XX123456789"; // Insira o número de WhatsApp da empresa
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col items-center w-full">
      {/* Header */}
      <header className="w-full flex justify-between items-center py-6 px-12 bg-zinc-200 shadow-md top-0 z-50">
        <Image
          src="/VC-logo-red.png"
          alt="Virou Cupom"
          width={300}
          height={100}
        />
        <nav className="flex gap-6 text-lg font-medium text-gray-800">
          <a href="#about" className="hover:text-[#ff1a1a] transition">
            Sobre
          </a>
          <a href="#benefits" className="hover:text-[#ff1a1a] transition">
            Benefícios
          </a>
          <a href="#plans" className="hover:text-[#ff1a1a] transition">
            Planos
          </a>
          <a href="#contact" className="hover:text-[#ff1a1a] transition">
            Contato
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center text-center bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg text-white ">
        <Image
          src="/image-1.png"
          alt="Imagem de fundo"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full z-10"
        />
        <a
          href="www.viroucupom.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-900 text-white px-10 py-4 rounded-full text-lg font-semibold transition duration-300 hover:bg-indigo-900 shadow-lg z-40 mt-[18rem]"
        >
          ACESSE AQUI
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-24 px-6 bg-gray-200 text-center">
        <h2 className="text-4xl font-bold text-[#ff1a1a]">
          O que é o VIROU CUPOM?
        </h2>
        <p className="text-lg mt-6 max-w-5xl mx-auto text-gray-700">
          O Virou Cupom é a solução ideal para lojistas que desejam atrair mais
          clientes e aumentar suas vendas por meio de cupons de desconto. Nossa
          plataforma permite que as lojas cadastrem cupons de forma simples e
          eficaz, alcançando um público qualificado em busca das melhores
          ofertas.
        </p>
      </section>

      {/* Benefits Section */}
      <section
        id="benefits"
        className="w-full py-20 px-6 bg-gray-300 text-center"
      >
        <h2 className="text-4xl font-bold text-zinc-900">
          Benefícios para sua Loja
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-20 max-w-6xl mx-auto">
          {[
            {
              title: "Maior Visibilidade",
              text: "Aumente a visibilidade da sua marca e produtos, atraindo mais clientes.",
            },
            {
              title: "Aumento de Vendas",
              text: "Os cupons de desconto atraem mais clientes, gerando aumento nas vendas.",
            },
            {
              title: "Controle Total",
              text: "Controle seus cupons, campanhas e resultados de forma prática e rápida.",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-white/60 text-black p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-2xl font-bold">{benefit.title}</h3>
              <p className="mt-4">{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Planos de Assinatura */}
      <section id="plans" className="w-full py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-[#ff1a1a]">
          Nossos Planos de Assinatura
        </h2>
        <p className="text-lg mt-6 max-w-5xl mx-auto text-gray-700">
          Escolha o plano que melhor atende às necessidades da sua loja e
          aproveite ao máximo os recursos e a visibilidade que o Virou Cupom
          oferece.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
          {[
            {
              title: "Plano Básico",
              price: "R$ 49,90/mês",
              annualPrice: "R$ 499,90/ano",
              features: [
                "Cadastro de até 10 cupons por mês",
                "Presença na listagem de lojas",
                "Relatórios básicos de desempenho",
                "Acesso ao suporte padrão",
              ],
            },
            {
              title: "Plano Profissional",
              price: "R$ 99,90/mês",
              annualPrice: "R$ 999,90/ano",
              features: [
                "Cadastro de até 30 cupons por mês",
                "Destaque na listagem de lojas",
                "Relatórios avançados de desempenho",
                "Acesso a campanhas promocionais",
                "1 post mensal nas redes sociais do Virou Cupom",
              ],
            },
            {
              title: "Plano Premium",
              price: "R$ 199,90/mês",
              annualPrice: "R$ 1.999,90/ano",
              features: [
                "Cupons ilimitados",
                "Destaque premium na listagem",
                "Relatórios completos e insights estratégicos",
                "Acesso prioritário a campanhas e eventos",
                "1 banner publicitário gratuito por mês",
                "2 posts mensais nas redes sociais do Virou Cupom",
              ],
            },
            {
              title: "Plano Avançado",
              price: "R$ 299,90/mês",
              annualPrice: "R$ 2.999,90/ano",
              features: [
                "Cupons ilimitados",
                "Destaque premium na listagem",
                "Relatórios completos e insights estratégicos",
                "Acesso prioritário a campanhas e eventos",
                "2 banners publicitários gratuitos por mês",
                "3 posts mensais nas redes sociais do Virou Cupom",
                "Campanhas promocionais exclusivas",
              ],
            },
            {
              title: "Plano Corporativo",
              price: "Sob consulta",
              features: [
                "Cupons ilimitados",
                "Destaque máximo na listagem de lojas",
                "Relatórios personalizados e insights estratégicos",
                "Acesso exclusivo a campanhas e eventos de alto impacto",
                "Banners publicitários ilimitados",
                "Campanhas promocionais exclusivas",
                "Consultoria personalizada de marketing",
                "Divulgação em todas as redes sociais do Virou Cupom",
              ],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className="bg-white text-black p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <h3 className="text-2xl font-bold">{plan.title}</h3>
                <p className="mt-4 text-xl font-semibold text-[#ff1a1a]">
                  {plan.price} |{" "}
                  <span className="text-gray-500">{plan.annualPrice}</span>
                </p>
                <ul className="mt-6 list-inside list-disc text-left text-gray-700">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="mt-2">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() =>
                  (window.location.href = getWhatsappLink(plan.title))
                }
                className="mt-6 bg-[#ff1a1a] text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300 hover:bg-red-600"
              >
                Assinar Agora
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Espaços Publicitários */}
      <section className="w-full py-20 px-6 bg-gray-200 text-center">
        <h2 className="text-4xl font-bold text-[#ff1a1a]">
          Espaços Publicitários
        </h2>
        <p className="text-lg mt-6 max-w-5xl mx-auto text-gray-700">
          Além dos cupons, você pode aumentar ainda mais a visibilidade da sua
          loja com nossos espaços publicitários. Escolha a melhor opção para sua
          campanha.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
          {[
            {
              title: "Banner no topo da página",
              price: "R$ 299,90/mês",
              description: "Exposição destacada no topo da plataforma.",
            },
            {
              title: "Banners na página",
              price: "R$ 199,90/mês",
              description:
                "Exposição ao longo da página, em pontos estratégicos.",
            },
            {
              title: "Conteúdo patrocinado",
              price: "R$ 149,90/post",
              description: "Artigos e posts destacados na plataforma.",
            },
            {
              title: "Post patrocinado nas redes sociais",
              price: "R$ 99,90/post",
              description:
                "Postagem destacada nas redes sociais do Virou Cupom.",
            },
          ].map((adSpace, index) => (
            <div
              key={index}
              className="bg-white text-black p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-bold">{adSpace.title}</h3>
              <p className="mt-4 text-lg text-gray-600">
                {adSpace.description}
              </p>
              <p className="mt-4 text-xl font-semibold text-[#ff1a1a]">
                {adSpace.price}
              </p>
              <button
                onClick={() =>
                  (window.location.href = getWhatsappLink(adSpace.title))
                }
                className="mt-6 bg-[#ff1a1a] text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300 hover:bg-red-600"
              >
                Contratar Agora
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contato Section */}

      <section
        id="contact"
        className="w-full py-20 px-6 bg-gradient-to-r from-[#ff1a1a] to-[#ff7070] text-center rounded-xl shadow-lg"
      >
        <h2 className="text-5xl font-extrabold text-white mb-6">
          Entre em Contato
        </h2>
        <p className="text-xl text-white opacity-80 mb-12 max-w-3xl mx-auto">
          Tem alguma dúvida ou deseja mais informações? Fique à vontade para
          entrar em contato com a gente. Estamos prontos para ajudar!
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 px-4">
          {/* WhatsApp */}
          <div className="flex flex-col items-center">
            <div className="p-6 bg-white rounded-full shadow-xl mb-4 transition-transform transform hover:scale-110">
              <Image
                src="/whats-logo.png"
                alt="WhatsApp"
                width={56}
                height={56}
                objectFit="contain"
              />
            </div>
            <p className="text-xl font-semibold text-white mb-2">WhatsApp</p>
            <a
              href="https://wa.me/5535999039120"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-white hover:text-[#ff1a1a] transition duration-300"
            >
              +55 35 99903-9120
            </a>
          </div>

          {/* E-mail */}
          <div className="flex flex-col items-center">
            <div className="p-6 bg-white rounded-full shadow-xl mb-4 transition-transform transform hover:scale-110">
              <Image
                src="/email-logo.png"
                alt="E-mail"
                width={56}
                height={56}
                objectFit="contain"
              />
            </div>
            <p className="text-xl font-semibold text-white mb-2">E-mail</p>
            <p className="text-lg text-white">contato@viroucupom.com.br</p>
          </div>

          {/* Instagram */}
          <div className="flex flex-col items-center">
            <div className="p-6 bg-white rounded-full shadow-xl mb-4 transition-transform transform hover:scale-110">
              <Image
                src="/insta-logo.png"
                alt="Instagram"
                width={56}
                height={56}
                objectFit="contain"
              />
            </div>
            <p className="text-xl font-semibold text-white mb-2">Instagram</p>
            <a
              href="https://www.instagram.com/viroucupom_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-white hover:text-[#ff1a1a] transition duration-300"
            >
              @VIROUCUPOM_
            </a>
          </div>

          {/* Facebook */}
          <div className="flex flex-col items-center">
            <div className="p-6 bg-white rounded-full shadow-xl mb-4 transition-transform transform hover:scale-110">
              <Image
                src="/face-logo.png"
                alt="Facebook"
                width={56}
                height={56}
                objectFit="contain"
              />
            </div>
            <p className="text-xl font-semibold text-white mb-2">Facebook</p>
            <a
              href="https://www.facebook.com/viroucupom_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-white hover:text-[#ff1a1a] transition duration-300"
            >
              @VIROUCUPOM_
            </a>
          </div>
        </div>
      </section>

      <footer className="w-full py-6 bg-gray-300 text-center mt-auto">
        <p>&copy; 2025 Virou Cupom. Todos os direitos reservados.</p>
        <p className="text-sm">
          Desenvolvido por{" "}
          <Link
            href="https://www.discode.com.br"
            className="hover:text-[#ff1a1a]"
          >
            Discode Software House
          </Link>
        </p>
      </footer>
    </div>
  );
}
