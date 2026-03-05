import Image from "next/image";
import NavBar1 from "../components/NavBar1";
import './globals.css';

export default function Home() {
  return (
      <>
      
        <NavBar1 />
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

          <div className="bg-zinc-50 font-sans pt-6">
            <main className="mx-auto w-full max-w-6xl py-32 px-16  dark:bg-gray-900">

              <section id="sobre">
                {/* <Image
                  className="responsive rounded-full border-4 border-gray-300 dark:border-gray-700"
                  src="/EuEu.jpeg"
                  alt="Minha Foto"
                  width={300}
                  height={300}
                /> */}
                <p className="mt-6 text-center text-2xl text-gray-700 dark:text-gray-300 sm:text-left">
                  Sou estudante de Desenvolvimento de Software Multiplataforma, atualmente em processo de transição de 
                  carreira para a área de tecnologia. Ao longo da graduação, venho desenvolvendo conhecimentos em lógica de programação, 
                  desenvolvimento web e mobile, além de práticas relacionadas à análise e construção de sistemas.
                  Tenho me dedicado ao aprimoramento técnico e à realização de projetos acadêmicos que contribuem para minha formação profissional. Busco consolidar meus conhecimentos, evoluir constantemente e me preparar para os desafios do mercado de tecnologia.
                </p>
              </section>
              
              <section id="sobre">
                <h1 className="mt-6 text-center text-2xl text-gray-700 dark:text-gray-300 sm:text-left">Formação</h1>
                  <p className="mt-6 text-center text-2xl text-gray-700 dark:text-gray-300 sm:text-left">
                    
                    FATEC Votorantim Curso Superior de Tecnologia em Desenvolvimento de Software Multiplataforma Agosto/2024 – Julho/2027 (em andamento)
                    UNIP Sorocaba Bacharelado em Educação Física Janeiro/2016 – Dezembro/2019
                    Colégio Humanus Ensino Médio Completo
                    Idiomas
                    Inglês: Nível intermediário (leitura e escrita)
                  </p>
                </section>

                <section id="habilidades" className="mt-10 text-center">
                  <h1 className="text-2xl text-gray-700 dark:text-gray-300">
                    Tecnologias
                  </h1>

                  <section className="grid grid-cols-3 gap-20 mt-15 text-8xl justify-items-center">
                    <i className="devicon-java-plain-wordmark colored hover:scale-110 transition"></i>
                    <i className="devicon-spring-plain-wordmark colored hover:scale-110 transition"></i>
                    <i className="devicon-javascript-plain colored hover:scale-110 transition"></i>
                    <i className="devicon-typescript-plain colored hover:scale-110 transition"></i>
                    <i className="devicon-react-original-wordmark colored hover:scale-110 transition"></i>
                    <i className="devicon-nextjs-original-wordmark hover:scale-110 transition"></i>
                    <i className="devicon-nodejs-plain-wordmark colored hover:scale-110 transition"></i>
                    <i className="devicon-git-plain-wordmark colored hover:scale-110 transition"></i>
                    <i className="devicon-mysql-plain-wordmark colored hover:scale-110 transition"></i>
                    <i className="devicon-mongodb-plain-wordmark colored hover:scale-110 transition"></i>

                  </section>
                </section>

                <section id="contato" className="mt-10 text-center">
                  <h1 className="text-2xl text-gray-700 dark:text-gray-300">
                    Contato
                  </h1>

                  <section className="grid grid-cols-3 gap-20 mt-15 text-8xl justify-items-center">
                    

                  </section>
                </section>
                                
            </main>
          
          </div>
      </>
  );
}
