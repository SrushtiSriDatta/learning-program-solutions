import CalculateScore from './components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore
        name="John Doe"
        school="Greenwood High"
        total={450}
        goal={5}
      />
    </div>
  );
}

export default App;
