// src/pages/Home/Home.js

import ContentCardWrapper from '../../components/common/ContentCardWrapper/ContentCardWrapper';
import Header from '../../components/common/Header/Header';
import Pulldowns from '../../components/common/Pulldowns/Pulldowns';
import Spinimg from '../../components/common/Spinimg/Spinimg';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <div></div>
      <Spinimg />
      <Pulldowns />
      <ContentCardWrapper />
    </div>
  );
};

export default Home;
