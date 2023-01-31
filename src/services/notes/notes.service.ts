import { Injectable } from '@nestjs/common';
import { Note } from 'src/interfaces';

@Injectable()
export class NotesService {
  NOTES: Note[] = [
    {
      id: 1,
      name: 'Studying',
      description: 'studying for the test',
    },
    {
      id: 2,
      name: 'buy',
      description: 'to buy a table',
    },
    {
      id: 3,
      name: 'my task pending',
      description: 'there one task pending',
    },
  ];

  getNotesService(): Note[] {
    return this.NOTES;
  }

  getOneNoteService(id: number): Note {
    return this.NOTES.find((note) => note.id === id);
  }

  postNotesServices(note: Note): string {
    this.NOTES = [...this.NOTES, note];
    return `register success`;
  }

  deleteNotesServices(id: number): Note[] {
    this.NOTES = this.NOTES.filter((note) => note.id !== id);
    return this.NOTES;
  }
}
