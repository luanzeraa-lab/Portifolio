import Image from "next/image";
import NavBar1 from "../components/NavBar1";
export default function Home() {
  return (
      <>
      
        <NavBar1 />
      
      <div className="bg-zinc-50 font-sans dark:bg-black pt-6">
        <main className="mx-auto w-full max-w-3xl py-32 px-16 bg-white dark:bg-black">
          <Image
            className="responsive rounded-full border-4 border-gray-300 dark:border-gray-700"
            src="/EuEu.jpeg"
            alt="Minha Foto"
            width={300}
            height={300}
          />
          <p className="mt-6 text-center text-2xl text-gray-700 dark:text-gray-300 sm:text-left">
            Sou estudante de Desenvolvimento de Software Multiplataforma, atualmente em processo de transição de 
            carreira para a área de tecnologia. Ao longo da graduação, venho desenvolvendo conhecimentos em lógica de programação, 
            desenvolvimento web e mobile, além de práticas relacionadas à análise e construção de sistemas.
            Tenho me dedicado ao aprimoramento técnico e à realização de projetos acadêmicos que contribuem para minha formação profissional. Busco consolidar meus conhecimentos, evoluir constantemente e me preparar para os desafios do mercado de tecnologia.
          </p>
          
        </main>
      </div>
      </>
  );
}
