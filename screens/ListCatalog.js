import { React, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput, Alert } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import ListCard from '../components/ListCard'


const data=[
    {
    name:"Lista 1",
    date: "Dia,mes,año",
    elementList:[
        {
            name:"Producto 1",
            price: 1.0,
            count: 4
        },
        {
            name:"Producto 2",
            price: 1.1,
            count: 3
        },
        {
            name:"Producto 3",
            price: 1.0,
            count: 1
        },
        {
            name:"Producto 4",
            price: 1.0,
            count: 1
        },
        {
            name:"Producto 5",
            price: 1.0,
            count: 1
        },
        {
            name:"Producto 6",
            price: 1.0,
            count: 1
        },
    ]
    },
    {
        name:"Lista 2",
        date: "Dia,mes,año",
        elementList:[
            {
                name:"Producto 7",
                price: 1.0,
                count: 4
            },
            {
                name:"Producto 8",
                price: 1.1,
                count: 3
            },
            {
                name:"Producto 9",
                price: 1.0,
                count: 1
            },
            {
                name:"Producto 10",
                price: 1.0,
                count: 1
            },
            {
                name:"Producto 11",
                price: 1.0,
                count: 1
            },
            {
                name:"Producto 12",
                price: 1.0,
                count: 1
            },
        ]
        },
        {
            name:"Lista 2",
            date: "Dia,mes,año",
            elementList:[
                {
                    name:"Producto 7",
                    price: 1.0,
                    count: 4
                },
                {
                    name:"Producto 8",
                    price: 1.1,
                    count: 3
                },
                {
                    name:"Producto 9",
                    price: 1.0,
                    count: 1
                },
                {
                    name:"Producto 10",
                    price: 1.0,
                    count: 1
                },
                {
                    name:"Producto 11",
                    price: 1.0,
                    count: 1
                },
                {
                    name:"Producto 12",
                    price: 1.0,
                    count: 1
                },
            ]
            }

]

const ListCatalog = ({navigation}) => {
    return(
        <SafeAreaView>
            <View className="relative flex justify-center items-center p-3">
                <TouchableOpacity
                    onPress={()=>navigation.goBack()}
                    className="absolute left-0"
                >
                    <Image
                        className="h-10 w-10"
                        source={require("../assets/images/backIcon.png")}
                    />
                </TouchableOpacity>
                <Text className="text-xl font-bold">
                    Mis Listas
                </Text>
            </View>
            <ScrollView>
                {data.map((item,key) => {
                    return(
                        <ListCard list={item} key={key}/>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}
export default ListCatalog