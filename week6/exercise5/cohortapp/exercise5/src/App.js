import CohortDetails from './CohortDetails';

function App() {
  const cohorts = [
    {
      cohortCode: 'C001',
      technology: 'React',
      startDate: '2025-01-10',
      currentStatus: 'ongoing',
      coachName: 'John Doe',
      trainerName: 'Jane Smith'
    },
    {
      cohortCode: 'C002',
      technology: 'Angular',
      startDate: '2025-02-05',
      currentStatus: 'completed',
      coachName: 'Alice Brown',
      trainerName: 'Bob Martin'
    }
  ];

  return (
    <div>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
