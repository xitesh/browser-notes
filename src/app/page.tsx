'use client'

import Header from '@/components/Header'
import NotesSidebar from '@/components/NotesSidebar'
import { Note } from '@/lib/types'
import React, { useState } from 'react'

const page = () => {

  const [notes, setNotes] = useState<Note[]>([])
  console.log(notes)
  const createNewNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: "New Note",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci possimus libero, unde laudantium ipsum labore veritatis ipsam eaque odit dolor voluptas. Blanditiis assumenda labore a sunt. Voluptate amet aspernatur odio.",
      createdAt: Date.now(),
    }
    setNotes([newNote, ...notes]);

  };
  return (
    <div className='flex flex-col min-h-screen'>
      <Header onNewNote={createNewNote} />
      <main className='container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className="md:col-span-1">
          <NotesSidebar notes={notes} />
        </div>
        <div className="bg-amber-900 md:col-span-2]">hI</div>
      </main>
    </div>
  )
}

export default page