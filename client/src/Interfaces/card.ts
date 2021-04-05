export default interface Card {
  id: number;
  deckId: number;
  front: string;
  back: string;
  languageFront: string;
  languageBack: string;
  stage: number;
}
