import './App.css';

import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { ContainerHome } from './components/ContainerHome';
import { ContainerWhyEasyBank } from './components/ContainerWhyEasyBank';
import { ContainerLastArticles } from './components/ContainerLastArticles';
import { Footer } from './components/Footer';

import { useHamburger } from './hooks/useHamburger';

export const App = () => {
  const { active, toggleMode } = useHamburger();

  return (
    <>
      <Header active={active} toggleMode={toggleMode}/>
      <Menu active={active}/>

      <main>
        <ContainerHome/>
        <ContainerWhyEasyBank/>
        <ContainerLastArticles/>
      </main>

      <Footer/>
    </>
  )
}