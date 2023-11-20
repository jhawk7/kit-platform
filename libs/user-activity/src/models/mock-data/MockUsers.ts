// not sure if service will have access to actual user objects

export const MockUsers = new Map([
    [
        313, //needs index
        {
            id: 313,
            username: 'mubatt@wyopub.com', //needs index
            password: 'password123',
            firstname: 'Matt',
            lastname: 'McElwee',
        },
    ],
    [
        42,
        {
            id: 42,
            username: 'david.carroll@bibleproject.com',
            password: 'password123',
            firstname: 'David',
            lastname: 'Carroll',
        },
    ],
    [
        1774,
        {
            id: 1774,
            username: 'cameron.carruthers@bibleproject.com',
            password: 'password123',
            firstname: 'Cameron',
            lastname: 'Carruthers',
        },
    ],
])