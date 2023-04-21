export type TasksData = TaskData[];

export type TaskData = {
  mainHint: string;
  smallHint: string;
  bigHint: string;
  location: GpsPosition;
  task: string;
};

export type GpsPosition = {
  latitude: number;
  longitude: number;
};

export const mockData: TasksData = [
  {
    mainHint:
      "Pierwsza lokalizacja to miejsce w którym pracuje. Jest to miejsce w którym wykonuje ciężką pracę taką jak konfiguracja nowego kiosku.",
    smallHint:
      "Ten budynek jest cały czarny oraz jest pokryty prawie w całości z okien.",
    bigHint:
      "Ten budynek jest cały czarny oraz jest pokryty prawie w całości z okien.",
    location: {
      latitude: 52.431939,
      longitude: 16.910857,
    },
    task: "W tym miejscu pracowałem po raz pierwszy. Widziałem samochody jeżdzące oraz rowery też jeżdzące. Może kiedyś też pojeżdże. Twoje zadanie to obrócić się 3 razy w miejscu.",
  },
  {
    mainHint: "Druga lokalizacja to miejsce w którym je się burgery.",
    smallHint: "Małe burgery",
    bigHint: "Duże burtgery",
    location: {
      latitude: 52.429061,
      longitude: 16.916006,
    },
    task: "Zjedz dużego burgera",
  },
];
