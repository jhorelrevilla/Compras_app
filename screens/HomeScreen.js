import React from "react";
import { View, Text, TouchableOpacity, Image,ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const dataDeBromita = {
    name: "Lista 1",
    date: "Dia,mes,año",
    payment: 15.4,
    elementList: [
        {
            name: "Producto 1",
            price: 1.0,
            count: 4
        },
        {
            name: "Producto 2",
            price: 1.1,
            count: 3
        },
        {
            name: "Producto 3",
            price: 1.0,
            count: 1
        },
        {
            name: "Producto 4",
            price: 1.0,
            count: 1
        },
        {
            name: "Producto 5",
            price: 1.0,
            count: 1
        },
        {
            name: "Producto 6",
            price: 1.0,
            count: 1
        },
    ]
}


const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="relative flex justify-center items-center p-3">
                <TouchableOpacity
                    // onPress={()=>navigation.goBack()}
                    className="absolute left-0 ml-3"
                >
                    <Image
                        className="h-10 w-10"
                        source={require("../assets/images/settingsIcon.png")}
                    />
                </TouchableOpacity>
                <Text className="text-2xl font-bold">
                    Mercado rapido
                </Text>
            </View>
            <View className="m-5">
                <TouchableOpacity
                    className="mb-5 bg-[#EAF6CF] rounded-lg flex-row justify-between items-center h-24"
                    onPress={
                        () => navigation.navigate('NewList')
                    }
                >
                    <Text className=" mx-5 text-2xl">
                        Nueva Lista
                    </Text>
                    <Image
                        className="h-20 w-20"
                        source={require('../assets/images/GroceryIcon.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    className="mb-5 bg-[#D7E6FD] rounded-lg flex-row justify-between items-center h-24"
                    onPress={() => { navigation.navigate('ListCatalog') }}
                >
                    <Text className="mx-5 text-2xl">
                        Mis Listas
                    </Text>
                    <Image
                        className="h-20 w-20"
                        source={require('../assets/images/GroceryListIcon.png')}
                    />
                </TouchableOpacity>
                <View className="mb-5">
                    <Text className="text-xl">
                        Ultima Lista
                    </Text>
                    <View
                        className="bg-[#EAE9FF] rounded-lg h-72 mt-2"
                    >
                        <Text className="mt-3 ml-5 font-bold text-xl">
                            {dataDeBromita.name}
                        </Text>
                        <Text className="ml-5 text-xl">
                            {dataDeBromita.date}
                        </Text>
                        <View className="h-40 bg-white rounded-lg m-2">
                            <ScrollView
                                vertical
                                className=""
                            >
                                {dataDeBromita.elementList.map((item, key) => {
                                    return (
                                        <Text className="text-center my-2 text-1xl" key={key}>
                                            {item.name}
                                        </Text>
                                    )
                                })}
                            </ScrollView>
                        </View>
                        <Text className="text-center text-xl">
                            Pago Final S/
                            <Text className="font-bold">
                                {dataDeBromita.payment}
                            </Text>
                        </Text>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default HomeScreen