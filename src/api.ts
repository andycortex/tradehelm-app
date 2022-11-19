import { Item } from "./types";

const DATA: Item[] = [{
    id: 1,
    text: "Helado de Naranja"
},
{
    id: 2,
    text: "Helado de Menta"
},
{
    id: 3,
    text: "Helado de Banana"
}]
export default {
    list: (): Promise<Item[]> => Promise.resolve(DATA),
    create: (text: Item['text']): Promise<Item> => Promise.resolve({id: +new Date(), text}),
    remove: (id: Item['id']): Promise<Item['id']> => Promise.resolve(id),
}