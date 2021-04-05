export default interface TrainingPageProps {
  history: {
    location: {
      state: {
        deck: number;
        method: string;
      };
    };
  };
}
