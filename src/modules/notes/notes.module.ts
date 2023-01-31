import { Module } from '@nestjs/common';
import { NotesController } from 'src/controllers';
import { NotesService } from 'src/services';

@Module({
  imports: [],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
