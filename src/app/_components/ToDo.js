"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { nanoid } from "nanoid";

const tabs = ["All", "Completed", "Incompleted"];

export const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [selectedButton, setSelectedButton] = useState("All");
  console.log(todos);
  return (
    <div className="w-screen h-screen justify-center flex py-10">
      <Card className="w-[400px] h-fit ">
        <CardHeader>
          <h1>To-Do list</h1>
          <div className="flex gap-4">
            <Input
              className="flex-1"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            ></Input>
            <Button
              onClick={() => {
                setTodos([
                  ...todos,
                  {
                    id: nanoid(),
                    isDone: false,
                    text: value,
                  },
                ]);
                setValue("");
              }}
            >
              Add
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex">
            {tabs.map((tab) => (
              <Button
                key={tab}
                variant="ghost"
                className="flex-1"
                style={{
                  backgroundColor:
                    tab === selectedButton ? "Blue" : "transparent",
                }}
                onClick={() => {
                  setSelectedButton(tab);
                }}
              >
                {tab}
              </Button>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {todos
              .filter((item) => {
                if (selectedButton === "All") return true;
                if (selectedButton === "Completed") return item.isDone === true;
                return item.isDone === false;
              })
              .map((item) => (
                <Card key={item.id}>
                  <CardContent className="flex gap-4 items-center">
                    <Checkbox
                      checked={item.isDone}
                      onClick={() => {
                        const newTodos = todos.map((todo) => {
                          if (todo.id !== item.id) return todo;
                          return {
                            isDone: !item.isDone,
                            text: item.text,
                            id: item.id,
                          };
                        });

                        setTodos(newTodos);
                      }}
                    />
                    <p className="flex-1">{item.text}</p>
                    <Button className="text-red-500 bg-red-300">Delete</Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
