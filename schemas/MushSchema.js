const MushSchema = {
    name: 'Mushroom',
    properties: {
        _id: 'objectId',
        strain: 'string?',
        price: 'string?',
        descr: 'string?',
        // realm_id: 'string?', // should be userId or add any static for test project.
        img: 'string',
    },
    primaryKey: '_id',
};




export default BookSchema;