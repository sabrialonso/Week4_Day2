import { atom, selector } from "recoil";

export const todoListState = atom({
  key: "ThisIsATest",
  default: [
    {
      id: 0,
      text: "Wash Toilet",
      isComplete: false,
    },
    {
      id: 1,
      text: "Clean room",
      isComplete: false,
    },
  ],
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});

// new selector
export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;


    return {
      totalNum,
      totalCompletedNum,
  
    };
  },
});