import './App.css';
import Headline from './Components/Headline.tsx';
import Herocta from './Components/HeroCTA.tsx';
import Heroimage from './Components/HeroImage.tsx';
import Subheadline from './Components/Subheadline.tsx';

function App() {
  return (
    <>
      <Headline>Never Lose a Night of Tracking</Headline>
      <Subheadline>With the all in one digital log book accessible anywhere</Subheadline>
      <Heroimage />
      <Herocta />
    </>
  );
}

export default App;