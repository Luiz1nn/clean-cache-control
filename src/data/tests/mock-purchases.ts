import { SavePurchases } from '@/domain/usecases';
const { faker } = require('@faker-js/faker');

export const mockPurchases = (): Array<SavePurchases.Params> => [
    {
        id: faker.datatype.uuid(),
        date: faker.date.recent(),
        value: faker.datatype.number()
    },
    {
        id: faker.datatype.uuid(),
        date: faker.date.recent(),
        value: faker.datatype.number()
    }
]