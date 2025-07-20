import { Note } from "@/lib/types"

const STORAGE_KEY = "notes"

export const loadNotes = (): Note[] => {
    if(typeof window === "undefined") return []

    const saveNotes = localStorage.getItem(STORAGE_KEY)
    if(saveNotes) {
        try{
            return JSON.parse(saveNotes)
        }catch(error){
            console.error('Failed to parse notes from localStorage', error)
            return []
        }
    }
    return []
}

export const saveNotes = (notes: Note[]):void => {
    if(typeof window === "undefined") return 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

export const formatDate = (timestamp: number):string => {
    return new Date(timestamp).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
    })
}