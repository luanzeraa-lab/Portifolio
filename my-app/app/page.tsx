"use client"
import Image from "next/image";
import NavBar1 from "../components/NavBar1";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, 
    });
  }, []);

  return (
    <>
      <NavBar1 />

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"></link>

      <div className="page">
        <main className="container ">

          <section  id="hero" className="hero section">

            <div className="flex flex-col gap-4 max-w-xl">

              <h1 data-aos="fade-up" className="text-5xl font-bold">
                Olá, eu sou <span className="text-[#d9376e]">Luan Picoli</span>
              </h1>

              <p data-aos="zoom-in" className="text-gray-700 dark:text-gray-300 text-2xl mt-20">
                Desenvolvedor entusiasta em aprender sobre sistemas e aplicações
                escaláveis utilizando Java, Spring e Node.js.
              </p>

            </div>

            <Image
             data-aos="fade-up"
              className="w-80 rounded-full border-4 border-gray-300 dark:border-gray-800"
              src="/EuEu.jpeg"
              alt="Minha Foto"
              width={400}
              height={400}
            />

          </section>

          {/* SOBRE */}
          <section id="sobre" className="sobre section scroll-mt-24">

            <Image
              className="w-120  border-0  border-gray-300 dark:border-gray-700"
              src="/coding.gif"
              alt="Minha Foto"
              width={1000}
              height={1000}
            />

            <p 
            data-aos="fade-up" className="text-main font-bold text-2xl w-1/2 flex justify-center mx-12">
              Sou estudante de Desenvolvimento de Software Multiplataforma,
              atualmente em transição de carreira para a área de tecnologia.
              Durante a graduação venho desenvolvendo conhecimentos em lógica
              de programação, desenvolvimento web e mobile, além de práticas
              relacionadas à análise e construção de sistemas.

              Tenho me dedicado ao aprimoramento técnico e à realização de
              projetos acadêmicos que contribuem para minha formação
              profissional. Busco evoluir constantemente e me preparar para
              os desafios do mercado de tecnologia.
            </p>

          </section>

          {/* FORMAÇÃO */}
          <section  className="section scroll-mt-24 font-bold">
            <h1 className="section-title">Formação</h1>

            <div data-aos="fade-up" className="mt-6 space-y-4 text-main">

              <div>
                <p className="font-semibold">FATEC Votorantim</p>
                <p>Desenvolvimento de Software Multiplataforma</p>
                <p>Agosto/2024 – Julho/2027 (em andamento)</p>
              </div>

              <div>
                <p className="font-semibold">UNIP Sorocaba</p>
                <p>Bacharelado em Educação Física</p>
                <p>Janeiro/2016 – Dezembro/2019</p>
              </div>

              <div>
                <p className="font-semibold">Colégio Humanus</p>
                <p>Ensino Médio Completo</p>
              </div>

              <div>
                <p className="font-semibold">Idiomas</p>
                <p>Inglês: Nível intermediário</p>
              </div>

            </div>
          </section>

          {/* PROJETOS */}
          <section className="section scroll-mt-24">
            <h2 className="section-title">Projetos</h2>
            <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

              <div className="card">
                <h3 className="text-xl font-bold">Achamigos</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Plataforma para conectar adotantes a ONGs e abrigos de animais.
                </p>
                <div className="flex gap-2 mt-3 mx-6  text-sm">
                  <span className="bg-gray-200 px-2 py-1 rounded text-black font-bold">Next.js</span>
                  <span className="bg-gray-200 px-2 py-1 rounded text-black font-bold">Node</span>
                  <span className="bg-gray-200 px-2 py-1 rounded text-black font-bold">MongoDB</span>
                </div>
                <div className="flex gap-4 mt-4 mx-6">
                  <a
                    href="https://github.com/luanzeraa-lab/Achamigos_Full-Stack"
                    className="text-[#d9376e] hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://achamigos-full-stack-p6dr.onrender.com/"
                    className="text-[#d9376e] hover:underline"
                    
                  >
                    Demo
                  </a>
                </div>
              </div>

              {/* <div className="card">

                <h3 className="text-xl font-bold">Achamigos</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Plataforma para conectar adotantes a ONGs e abrigos de animais.
                </p>
                <div className="flex gap-2 mt-3 text-sm">
                  <span className="bg-gray-200 px-2 py-1 rounded">Next.js</span>
                  <span className="bg-gray-200 px-2 py-1 rounded">Node</span>
                  <span className="bg-gray-200 px-2 py-1 rounded">MongoDB</span>
                </div>
                <div className="flex gap-4 mt-4">
                  <a
                    href="#"
                    className="text-[#d9376e] hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="text-[#d9376e] hover:underline"
                  >
                    Demo
                  </a>
                </div>
              </div> */}
            </div>

            


          </section>

          {/* TECNOLOGIAS */}
          <section id="habilidades" className="section scroll-mt-24">
            <h1 className="section-title">Tecnologias</h1>

            <div className="tech-grid">

              <i data-aos="zoom-in" data-aos-delay="100"
                className="devicon-java-plain-wordmark colored hover:scale-110 transition"></i>
              <i data-aos="zoom-in" data-aos-delay="200"
                className="devicon-spring-plain-wordmark colored hover:scale-110 transition"></i>
              <i data-aos="zoom-in" data-aos-delay="300"
                className="devicon-javascript-plain colored hover:scale-110 transition"></i>
              <i data-aos="zoom-in" data-aos-delay="400"
                className="devicon-typescript-plain colored hover:scale-110 transition"></i>
              <i data-aos="zoom-in" data-aos-delay="500"
                className="devicon-react-original-wordmark colored hover:scale-110 transition"></i>
              <i data-aos="zoom-in" data-aos-delay="600"
                className="devicon-nextjs-original-wordmark hover:scale-110 transition"></i>
              <i data-aos="zoom-in" data-aos-delay="700"
                className="devicon-nodejs-plain-wordmark colored hover:scale-110 transition"></i>
              <i data-aos="zoom-in" data-aos-delay="800"
                className="devicon-git-plain-wordmark colored hover:scale-110 transition"></i>
              <i data-aos="zoom-in" data-aos-delay="900"
                className="devicon-mysql-plain-wordmark colored hover:scale-110 transition"></i>
              <i data-aos="zoom-in" data-aos-delay="1000"
                className="devicon-mongodb-plain-wordmark colored hover:scale-110 transition"></i>
              <i data-aos="zoom-in" data-aos-delay="1100"
                className="devicon-express-original-wordmark hover:scale-110 transition"></i>
            </div>
          </section>

          {/* CONTATO */}
          <section id="contato" className="section scroll-mt-24">
            <h1 className="section-title">Contato</h1>
            <div data-aos="zoom-in" className="flex justify-center gap-10 mt-8 text-6xl">
              <a
                href="https://github.com/luanzeraa-lab"
                target="_blank"
                className="hover:scale-110 transition"
              >
                <i className="devicon-github-original"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/luan-silva-de-picoli-5b91a7336/"
                target="_blank"
                className="hover:scale-110 transition"
              >
                <i className="devicon-linkedin-plain"></i>
              </a>
              <a
                href="mailto:luansilva_2@hotmail.com"
                className="hover:scale-110 transition"
              >
                📧
              </a>
              <a
  href="https://wa.me/5515988325100"
  target="_blank"
  className="hover:scale-110 transition"
>
  <i className="fa-brands fa-whatsapp"></i>
</a>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}