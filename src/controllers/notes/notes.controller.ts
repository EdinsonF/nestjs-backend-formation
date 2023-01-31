import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ParseIntPipe } from 'src/common/parse-int.pipe';

import { CreateNoteDto } from 'src/dto';
import { UpdateNoteDto } from 'src/dto/notes/create-note.dto';
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
  getOneNote(@Param('id', ParseIntPipe) id: number): Note {
    return this.notesServices.getOneNoteService(id);
  }

  @Post()
  postNotes(@Body() note: CreateNoteDto): string {
    return this.notesServices.postNotesServices(note);
  }

  @Delete(':id')
  deleteNotes(@Param('id', ParseIntPipe) id: number): Note[] {
    return this.notesServices.deleteNotesServices(id);
  }

  @Put('/update/:id')
  updateNote(
    @Body() data: UpdateNoteDto,
    @Param('id', ParseIntPipe) id: number,
  ): Note {
    return this.notesServices.updateNoteServices(id, data);
  }
}
