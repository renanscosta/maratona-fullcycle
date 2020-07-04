import { Controller, Get } from '@nestjs/common';
import { Live } from './live.entity';
import { LivesService } from './lives.service';
import { Post,Put, Delete, Body, Param } from  '@nestjs/common';

@Controller('maratona')
export class LivesController {
    constructor(private livesService: LivesService){}

    @Get()
    index(): Promise<Live[]> {
      return this.livesService.findAll();
    }
    
    @Post('create')
    async create(@Body() contactData: Live): Promise<any> {
      return this.livesService.create(contactData);
    }  

    // @Put(':id/update')
    // async update(@Param('id') id, @Body() contactData: Contact): Promise<any> {
    //     contactData.id = Number(id);
    //     console.log('Update #' + contactData.id)
    //     return this.contactsService.update(contactData);
    // }  

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.livesService.delete(id);
    }  
}
