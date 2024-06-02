export interface ToDoItem {
  _id: string;
  title: string;
  order: string;
  description?: string;
}

export interface payloadProps {
  title: string;
  descriptions?: string;
}

export const dummyData = [
  {
    _id: "1",
    title: "Hello World",
    order: "0",
    description:
      "Menyambut Dunia asidjsalkjd wlakjdiwojd iowajd lkawjdl kajldk ajldk awjlkd sjkld sjlkds jlksajkl",
  },
  {
    _id: "2",
    title: "Berenang",
    order: "1",
    description: "Berenang di pagi hari",
  },
  { _id: "3", title: "Bermain Game", order: "2", description: "Main Game" },
  { _id: "4", title: "Istirahat", order: "3", description: "Beristirahat" },
  {
    _id: "5",
    title: "Beli Makan",
    order: "4",
    description: "Beli makan di warmindo",
  },
  {
    _id: "6",
    title:
      "Beli Makan, pergi jalan jalan, kemudianadkaskdj kajdlkas jdlkasj dlkasjlkdsj",
    order: "5",
    description: "Beli makan di warmindo",
  },
  {
    _id: "7",
    title: "Beli Makan",
    order: "6",
    description: "Beli makan di warmindo",
  },
];
