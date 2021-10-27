const MushroomSchema = {
    name: 'Mushroom',
    properties: {
        _id: 'objectId',
        strain: 'string?',
        price: 'string?',
        descr: 'string?',
        img: 'string',
    },
    primaryKey: '_id',
};


export default MushRoomSchema;