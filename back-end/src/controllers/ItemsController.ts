import {Request, Response} from 'express';
import knex from '../database/connection';//conecção com o banco de dados 

class ItemsController {
    async index(request: Request, response: Response){
        const items = await knex('items').select('*');
        //É a mesma coisa que isso: SELECT * FROM items
    
        const serializedItens = items.map(item =>{
            return {
                id: item.id,
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}`, //Para acessar a url da imagem 
            }
        })
        return response.json (serializedItens);
    }
}

export default ItemsController;