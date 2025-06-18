import { useRoutes } from 'react-router-dom';
import Layout from './Layout';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Produtos from './pages/Produtos';
import Carrinho from './pages/Carrinho';
import Cep from './pages/Cep';
import Paises from './pages/Paises';
import ConsultaDB from './pages/ConsultaDB';

export default function RoutesApp() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout />, // <== layout com navbar/footer
      children: [
        { path: '/', element: <Home /> },
        { path: '/sobre', element: <Sobre /> },
        { path: '/produtos', element: <Produtos /> },
        { path: '/carrinho', element: <Carrinho /> },
        { path: '/cep', element: <Cep /> },
        { path: '/paises', element: <Paises /> },
        { path: '/consulta', element: <ConsultaDB  /> },
      ],
    }
  ]);

  return routes;
}
