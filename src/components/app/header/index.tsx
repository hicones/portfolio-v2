import { TransitionLink } from "../transition-link";

export const Header = () => {
  return (
    <header className="flex justify-between items-center w-full p-12">
      <TransitionLink href="/">
        <h1 className="font-title text-3xl font-bold">Hicones Tech</h1>
      </TransitionLink>

      <nav className="text-lg font-medium font-title">
        <ul className="flex space-x-4">
          <li className="hover-underline-animation">
            <TransitionLink href="/">Home</TransitionLink>
          </li>
          <li className="hover-underline-animation">
            <TransitionLink href="/about">About</TransitionLink>
          </li>
          <li className="hover-underline-animation">
            <TransitionLink href="/contact">Contact</TransitionLink>
          </li>
          <li className="hover-underline-animation">
            <TransitionLink href="/blogs">Blog</TransitionLink>
          </li>
          <li className="hover-underline-animation">
            <TransitionLink href="/portfolios">Portfolios</TransitionLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
