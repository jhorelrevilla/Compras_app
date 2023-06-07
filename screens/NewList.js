import {React,useState} from "react";
import { View,Text, TouchableOpacity, Image, TextInput, ScrollView} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductCard from "../components/ProductCard";

// const productList=[
//     {
//         name:"producto 1",
//         price: 1.5,
//         count: 1
//     },
//     {
//         name:"producto 2",
//         price: 2.0,
//         count: 1
//     },
//     {
//         name:"producto 3",
//         price: 3.0,
//         count: 1
//     },
//     {
//         name:"producto 4",
//         price: 2.4,
//         count: 1
//     },
//     {
//         name:"producto 5",
//         price: 1.60,
//         count: 1
//     },
// ]


const NewList = ({navigation}) =>{
    const [listName,SetListName] = useState("Lista nueva")
    const [productList,setProductList] = useState([])

    const handleDeleteProduct= (productId) => {
        const updatedCards = productList.filter(
            (card) => card.id != productId
        )
        setProductList(updatedCards)
    }
    const totalPayment = () => {
        if(productList.length==0){
            return 0
        } 
        const sum=productList.reduce(
            (count,Object)=>{
                return count+Object.payment
            }
        )
        return sum
    }
    return(
        <SafeAreaView className="h-full">
            <View className="h-[16%]">
                <View className="flex-row justify-between items-center h-16 mx-3">
                    <TouchableOpacity
                        onPress={()=>navigation.goBack()}
                    >
                        <Image
                            className="h-10 w-10"
                            source={require("../assets/images/backIcon.png")}
                        />
                    </TouchableOpacity>
                    <View className="flex-column items-center">
                        <Text className="text-xl font-bold">
                            Nueva Lista
                        </Text>
                        <TextInput
                            value={listName}
                            onChangeText={SetListName}
                            maxLength={20}
                        />
                    </View>
                    <Text>
                        Guardar
                    </Text>
                </View>
                <View className="bg-[#A187D9]  h-12 flex-row justify-center items-center">
                    <Text className="text-white text-2xl font-bold">
                        {/* Pago S/ {totalPayment()} */}
                        Pago S/
                    </Text>
                </View>
            </View>
            <View className="h-[76%] mx-5">
                <ScrollView className="h-full">
                    {productList.map((item) => {
                        return(
                            <ProductCard item={item} key={item.id} onDelete={handleDeleteProduct}/>
                        )
                    })}
                </ScrollView>
            </View>
            <View className="h-[8%]">
                <TouchableOpacity 
                    className="bg-black h-full"
                    onPress={()=>
                        navigation.navigate(
                            "NewProduct",
                            {
                                setProductList:setProductList,
                                productList:productList
                            }
                        )

                    }
                >
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

export default NewList