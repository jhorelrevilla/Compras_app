import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

const ListCard = ({ list }) => {
    const finalPayment=list.elementList.reduce((count,object)=>{
        return count+object.price
    },0.0)
    return (
        <View
            className="bg-[#EAE9FF] rounded-lg h-72 mt-2"
        >
            <Text className="mt-3 ml-5 font-bold text-xl">
                {list.name}
            </Text>
            <Text className="ml-5 text-xl">
                {list.date}
            </Text>
            <View className="h-40 bg-white rounded-lg m-2">
                <ScrollView
                    vertical
                    className=""
                >
                    {list.elementList.map((item,key) => {
                        return(
                            <Text className="text-center my-2 text-1xl" key={key}>
                                {item.name}
                            </Text>
                        )
                    })}
                </ScrollView>
            </View>
            <Text className="text-center text-xl">
                Pago Final: 
                <Text className="font-bold">
                    {" "+finalPayment}
                </Text>
                S./
            </Text>
        </View>
    )
}

export default ListCard