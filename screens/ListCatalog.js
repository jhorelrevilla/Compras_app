import {React,useState} from "react";
import { View,Text, TouchableOpacity, Image, TextInput, ScrollView} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductCard from "../components/ProductCard";

const productList=[
    {
        name:"producto 1",
        price: 1.5,
        count: 1
    },
    {
        name:"producto 2",
        price: 2.0,
        count: 1
    },
    {
        name:"producto 3",
        price: 3.0,
        count: 1
    },
    {
        name:"producto 4",
        price: 2.4,
        count: 1
    },
    {
        name:"producto 5",
        price: 1.60,
        count: 1
    },
]


const ListCatalog = () =>{
    const [listName,ChangeListName]=useState("Lista nueva")
    return(
        <SafeAreaView className="h-full">
            <View className="h-[16%]">
                <View className="flex-row justify-between items-center h-16 mx-3">
                    <Text>
                        volver
                    </Text>
                    <View className="flex-column items-center">
                        <Text className="text-xl font-bold">
                            Nueva Lista
                        </Text>
                        <TextInput
                            value={listName}
                            onChangeText={ChangeListName}
                            maxLength={20}
                        />
                    </View>
                    <Text>
                        Borrar
                    </Text>
                </View>
                <View className="bg-[#A187D9]  h-12 flex-row justify-center items-center">
                    <Text className="text-white text-2xl font-bold">
                        Pago S/ 16.0 
                    </Text>
                </View>
            </View>
            <View className="h-[76%] mx-5">
                <ScrollView className="h-full">
                    {productList.map((item,key) => {
                        return(
                            <ProductCard item={item}/>
                        )
                    })}
                    
                </ScrollView>
            </View>
            <View className="h-[8%]">
                <TouchableOpacity className="bg-black h-full">
                    <View className="mx-4 h-full flex-row justify-between items-center">
                        <Text className="text-xl text-white font-bold">
                            Nuevo Producto
                        </Text>
                        <Image
                            className="h-10 w-10"
                            source={require('../assets/images/NewProductIcon.png')}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    )
}

export default ListCatalog