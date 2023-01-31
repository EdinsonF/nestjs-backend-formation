import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateNoteDto } from 'src/dto';
import { Note } from 'src/interfaces';
import { NotesService } from 'src/services';

@Controller('notes')
export class NotesController {
  constructor(private notesServices: NotesService) {}

  /* endpoint request api notes */
  @Get()
  getNotes(): Note[] {
    return this.notesServices.getNotesService();
  }

  @Get(':id')
  getOneNote(@Param('id') id: string): Note {
    return this.notesServices.getOneNoteService(Number(id));
  }

  @Post()
  postNotes(@Body() note: CreateNoteDto): string {
    return this.notesServices.postNotesServices(note);
  }

  @Delete(':id')
  deleteNotes(@Param('id') id: string): Note[] {
    return this.notesServices.deleteNotesServices(Number(id));
  }
}
