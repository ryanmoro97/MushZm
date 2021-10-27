const UserSchema = {
    name: 'User',
    properties: {
        _id: 'objectId',
        email: 'string?',
        orders: {type: 'list', objectType: "Order"},
        reports: {type: "list", objectType: "Report"},
    },
    primaryKey: '_id',
};

const OrderSchema = {
    name: "Order",
    embedded: true,
    properties:{
        total: 'string?'
        orderID: 'string?'
        mushrooms: {type: 'list', objectType: "Mush"}
    }
}

const OrderMushSchema = {
    name: "Mush",
    embedded: true,
    properties:{
        strain: 'string?'
        amount: 'string?'
        cost: 'string?'
    }
}

const ReportsSchema = {
    name: "Report",
    embedded: true,
    properties: {
        date: 'date',
        text: 'string?',
        intensity: 'int',
        dose: 'double',
    }
}

export {
    UserSchema,
    OrderSchema,
    OrderMushSchema,
    ReportsSchema,
} 