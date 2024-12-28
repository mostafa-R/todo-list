import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const InputContext = createContext();

export const ContextProvider = ({ children }) => {
  // الحالة الأولية
  const [input, setInput] = useState(() => {
    try {
      const savedItems = localStorage.getItem("todoItems");
      return savedItems
        ? {
            items: JSON.parse(savedItems),
            item: "",
            editItem: false,
          }
        : {
            items: [],
            item: "",
            editItem: false,
          };
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      return {
        items: [],
        item: "",
        editItem: false,
      };
    }
  });

  // حفظ العناصر في localStorage عند التحديث
  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(input.items));
  }, [input.items]);

  // إضافة عنصر جديد
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.item.trim()) {
      alert("Please enter a valid item!");
      return;
    }

    const newItem = {
      id: uuidv4(),
      title: input.item,
      editItem: false,
      checked: false,
    };

    setInput((prevState) => ({
      ...prevState,
      items: [...prevState.items, newItem],
      item: "",
    }));
  };

  // حذف عنصر
  const handleDeleteItem = (id) => {
    const filteredItems = input.items.filter((item) => item.id !== id);
    setInput((prevState) => ({ ...prevState, items: filteredItems }));
  };

  // حذف جميع العناصر
  const clearList = () => {
    setInput((prevState) => ({
      ...prevState,
      items: [],
    }));
    localStorage.removeItem("todoItems");
  };

  // تعديل عنصر
  const handleEdit = (id) => {
    const selectedItem = input.items.find((item) => item.id === id);

    if (!selectedItem) {
      console.error(`Item with id ${id} not found`);
      return;
    }

    const filteredItems = input.items.filter((item) => item.id !== id);

    setInput((prevState) => ({
      ...prevState,
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
    }));
  };

  // تبديل الحالة (checked)
  const handleChecked = (id) => {
    setInput((prevState) => ({
      ...prevState,
      items: prevState.items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      ),
    }));
  };

  return (
    <InputContext.Provider
      value={{
        input,
        setInput,
        handleSubmit,
        handleDeleteItem,
        clearList,
        handleEdit,
        handleChecked,
      }}
    >
      {children}
    </InputContext.Provider>
  );
};
