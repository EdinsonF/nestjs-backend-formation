import { Injectable, NotFoundException } from '@nestjs/common';
import { Note } from 'src/interfaces';
import { CreateNoteDto } from 'src/dto';
import { UpdateNoteDto } from 'src/dto/notes/create-note.dto';

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
    const noteExist = this.NOTES.find((note) => note.id === id);
    if (!noteExist) {
      throw new NotFoundException(`Product #${id} no found`);
    }
    return this.NOTES.find((note) => note.id === id);
  }

  postNotesServices(note: CreateNoteDto): string {
    this.NOTES = [...this.NOTES, note];
    return `register success`;
  }

  deleteNotesServices(id: number): Note[] {
    const noteExist = this.NOTES.find((note) => note.id === id);
    if (!noteExist) {
      throw new NotFoundException(`Product #${id} no found`);
    }
    this.NOTES = this.NOTES.filter((note) => note.id !== id);
    return this.NOTES;
  }

  updateNoteServices(id: number, data: UpdateNoteDto): Note {
    console.log('eciste', 1);
    const noteExist = this.NOTES.find((note) => note.id === id);
    
    if (!noteExist) {
      throw new NotFoundException(`Product #${id} no found`);
    }
    this.NOTES = this.NOTES.map((note) =>
      note.id === id ? { ...note, ...data } : note,
    );

    return this.NOTES.find((note) => note.id === id);
  }
}
