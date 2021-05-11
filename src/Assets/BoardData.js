export const initialData = [
  {
    id: "hb",
    boardName: "Half Board",
    boardText: "Breakfast and dinner are included.",
    showMoreText: "Show more",
    showLessText: "Show less",
    features: [
      { title: "Breakfast", available: true },
      { title: "Lunch", available: false },
      { title: "Evening Meal", available: true },

      { title: "Drinks", available: false },
      { title: "Snacks", available: false },
    ],
    description:
      "If you're staying in a Twin Room, you'll have the option of 1 dinner in the Restaurant – The Roast, every four nights of stay.",
    selected: true,
    includedText: "Selected",
    totalPrice: "+£442.68",
    perPersonPrice: "(+£31.62pp per night)",
    buttonText: "Select",
    moreDetailsText: "More details",
    moreDetailsTitle:"Half Board"
  },
  {
    id: "ai",
    boardName: "All Inclusive",
    boardText: "Breakfast, lunch, dinner, snacks and drinks are included.",
    showMoreText: "Show more",
    showLessText: "Show less",
    features: [
      { title: "Breakfast", available: true },
      { title: "Lunch", available: true },
      { title: "Evening Meal", available: true },
      { title: "Drinks", available: true },
      { title: "Snacks", available: true },
    ],
    description:
      "Buffet breakfast and dinner at the Food Market. A la carte lunch, salad bar and soup at the themed restaurant. Option to have one dinner for every four night's stay at The Roast restaurant - starters and Desserts are buffet style, while the main is a set menu with a few options. You'll need to reserve a table a day in advance to eat here, and it depends on availability. Drinks within the All Inclusive package are served between 10.30am and 11pm. Selected local-brand alcohol, soft drinks, tea and coffee. Premium drinks. Snacks at set times.",
      selected: false,
      includedText: "Selected",
      totalPrice: "+£442.68",
      perPersonPrice: "(+£31.62pp per night)",
      buttonText: "Select",
      moreDetailsText: "More details",
      moreDetailsTitle:"All Inclusive"
  },
];
