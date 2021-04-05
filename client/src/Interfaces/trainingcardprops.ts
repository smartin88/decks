export default interface TrainingCardProps {
  id: number;
  method: string;
  front: string;
  back: string;
  languageFront: string;
  languageBack: string;
  progress: number;
  max: number;
}
