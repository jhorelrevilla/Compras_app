import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

const ListCard = ({ list }) => {
    const finalPayment=list.elementList.reduce((count,object)=>{
        return count+object.price
    },0.0)
    return (
        <TouchableOpacity
            className="bg-white rounded-lg h-24 mt-2"
        >
            <Text className="mt-3 ml-5 font-bold text-xl">
                {list.name}
            </Text>
            <Text className="ml-5 text-xl">
                {list.date}
            </Text>
            <Text className="text-center text-xl">
                Pago Final S/
                <Text className="font-bold">
                    {" "+finalPayment}
                </Text>
            </Text>
        </TouchableOpacity>
    )
}

export default ListCard