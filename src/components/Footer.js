import Link from "next/link";
import Layout from "../pages/layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span className="text-center">
          {new Date().getFullYear()} &copy; Todos os direitos reservados.
        </span>
        <div className="flex items-center lg:py-2 lg:text-center lg:flex-wrap lg:justify-center">
          Feito com{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1 lg:text-center">
            &#9825;
          </span>
          por&nbsp;
          <Link
            href={"https://www.linkedin.com/in/lucas-oliveira15/"}
            className="underline underline-offset-2"
          >
            Lucas Oliveira Véras
          </Link>
        </div>
        <Link
          href={"https://www.linkedin.com/in/lucas-oliveira15/"}
          target="_blank"
          className="underline underline-offset-2"
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
