
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarComp from './Components/Navbar/NavbarComp';

import CarouselComp from './Components/Carousels/CarouselComp';

import InfoSection from './Components/Last_Part/InfoSection';
import TrendingSection from './Components/Last_Part/TrendingSection';
import AppSection from './Components/Last_Part/AppSection';
import AwardsSection from './Components/AwardsSection';
import TrainingSolution from './Components/TrainingSolution';
import BootcampSection from './Components/BootcampSection';
import CustomCarousel from './Components/CustomCarousel';
import UnivercityCarousel from './Components/UnivercityCarousel';
import Alumini from './Components/Alumini';
import CardDisplay from './Components/CardDisplay';


function App() {
  return (
    <div className="App">
      
      <NavbarComp/>
      <CarouselComp/>
      <UnivercityCarousel/>
      <CardDisplay/>
      
      <BootcampSection/>
      <Alumini/>
      <CustomCarousel/>
      <TrainingSolution/>
      <AwardsSection/>
      <AppSection/>
      <InfoSection/>
      <TrendingSection/>
    </div>
  );
}

export default App;
