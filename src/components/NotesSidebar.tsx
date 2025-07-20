import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EmptyState } from "./EmptyState";
import { Note } from "@/lib/types";
import { Button } from "./ui/button";
import { DeleteIcon } from "lucide-react";

interface NotesSidebarProps {
  notes: Note[]
}

const NotesSidebar = ({notes}:NotesSidebarProps) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>My Notes</CardTitle>
        </CardHeader>
        <CardContent>
          {notes.length === 0 ? (
            <EmptyState message="You Don't Have any Note yet!" buttonText="Create your first note" />
          ) : (
            <div>
              {notes.map((note) => (
                <div key={note.id} className="p-3 rounded-md cursor-pointer hover:bg-accent transition-colors">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">
                        {note.title.substring(0, 30)}
                        {note.title.length > 30 ? "..." : ""}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {note.content.substring(0, 40)}
                        {note.content.length > 40 ? "..." : ""}
                      </p>
                    </div>
                    <Button>
                      <DeleteIcon />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default NotesSidebar;
