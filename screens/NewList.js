import { React, useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductCard from "../components/ProductCard";


const NewList = ({ navigation }) => {
    const [listName, SetListName] = useState("Lista nueva")
    const [productList, setProductList] = useState([])
    const [totalPayment, setTotalPayment] = useState(0)

    const handleDeleteProduct = (productId) => {
        const updatedCards = productList.filter(
            (card) => card.id != productId
        )
        setProductList(updatedCards)

        const sum = updatedCards.reduce((count, object) => {
            return count + parseFloat(object.payment)
        }, 0)
        setTotalPayment(sum)
    }


    const handleUpdateTotalPayment = () => {
        const sum = productList.reduce((count, object) => {
            return count + parseFloat(object.payment)
        }, 0)
        setTotalPayment(sum)
    }

    const calculateTotalPayment = (newList) => {
        const sum = newList.reduce((count, object) => {
            return count + parseFloat(object.payment)
        }, 0)
        setTotalPayment(sum)
    }

    const handleBlurName = () =>{
        if(listName==''){
            SetListName('Lista nueva')
            return
        }
    }
    return (
        <SafeAreaView className="h-full bg-white">
            <View className=" bg-white flex-row justify-between items-center h-16">
                <TouchableOpacity
                    className=""
                    onPress={() => navigation.goBack()}
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
                        className="border-b text-center font-semibold text-lg"
                        value={listName}
                        onChangeText={SetListName}
                        onBlur={handleBlurName}
                        maxLength={20}
                    />
                </View>
                <TouchableOpacity
                    className="mr-3"
                // onPress={()=>navigation.goBack()}
                >
                    <Image
                        className="h-8 w-8"
                        source={require("../assets/images/SaveIcon.png")}
                    />
                </TouchableOpacity>
            </View>
            <View className="h-[84%] bg-[#EAF6CF]">
                <View className="bg-white  h-12 flex-row justify-center items-center border-2 mx-5 rounded-full my-2">
                    <Text className="text-black text-2xl font-bold ">
                        Pago S/ {parseFloat(totalPayment).toFixed(2)}
                    </Text>
                </View>
                <ScrollView className="h-full mx-5">
                    {productList.map((item) => {
                        return (
                            <ProductCard
                                item={item}
                                key={item.id}
                                onDelete={handleDeleteProduct}
                                onUpdatePayment={handleUpdateTotalPayment}
                            />
                        )
                    })}
                </ScrollView>
            </View>
            <View className="h-[8%]">
                <TouchableOpacity
                    className="bg-black h-full"
                    onPress={() =>
                        navigation.navigate(
                            "NewProduct",
                            {
                                setProductList: setProductList,
                                updatePayment: calculateTotalPayment,
                                productList: productList
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