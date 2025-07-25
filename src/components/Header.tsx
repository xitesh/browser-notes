import { NotebookTabsIcon, Plus } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

interface HeaderProps {
  onNewNote: () => void;
  onWritingNote: boolean;
}

const Header = ({ onNewNote, onWritingNote }: HeaderProps) => {
  return (
    <header className="border-b p-4 bg-card">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Browser Notes</h1>
        <Button disabled={onWritingNote ? true : false} onClick={onNewNote} size={"sm"} className="cursor-pointer">
          <Plus className="h-4 w-4 mr-2" />
          New Note
        </Button>
      </div>
    </header>
  );
};

export default Header;
