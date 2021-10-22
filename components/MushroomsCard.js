import { Badge } from 'react-bootstrap'
import React from 'react';
import Card from 'react-bootstrap/Card'
import { View } from 'react-native';


function MushroomsCard ({mushroom}) {
    //get average of grades
    let sum = 0;
    // mushroom.grades.forEach(element => {
    //     sum += element.score
    // });
    // const avg = Math.round(sum / (restaurant.grades.length))
    return (
        <View>
            <Card className="m">
                <Card.Body>
                    {/* <Card.Title>{mushroom.name}</Card.Title> */}
                </Card.Body>
            </Card>
        </View>
        
    )
}

export default MushroomsCard