import { React, useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, Alert } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const NewProduct = ({navigation,route}) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('0')
    const [count, setCount] = useState(1)
    const [payment, setPayment] = useState(null)

    const handleNewProduct = () =>{
        if (name=='' || parseFloat(price)==0 ){
            return
        }
        createNewProduct()
        navigation.goBack()
    }
    const createNewProduct = () => {
        const newProductObject={
            name:name,
            price:price,
            count:count,
            payment:payment,
            id:route.params.productList.length+1
        }
        const newList=[...route.params.productList,newProductObject]
        route.params.setProductList(newList)
        route.params.updatePayment(newList)
    }

    const calculateTotalPayment = (actualPrice,actualCount) => {
        const totalPayment=parseFloat(actualPrice)*actualCount
        return totalPayment.toFixed(2)
    }
    const handleInputPrice = (value) => {
        const regex=/^(?:\d{1,3}(?:\.\d{0,2})?)?$/
        if (!regex.test(value)){
            return 
        }
        const actualPrice=value.length==0?0:value
        setPrice(value)
        const totalPayment = calculateTotalPayment(actualPrice,count)
        setPayment(totalPayment)
    }
    const handleInputCount = (value) => {
        const regex=/^[0-9]*$/
        if(!regex.test(value)){
            return
        }
        setCount(value)
        const actualCount=value.length==0?1:value
        const totalPayment = calculateTotalPayment(price,actualCount)
        setPayment(totalPayment)
    }
    const handleBlurCount = () => {
        if(count==''){
            setCount(1)
            return
        }

    }
    const handleBlurPrice = () => {
        if(price==''){
            setPrice('0')
            return
        }
        setPrice(parseFloat(price).toFixed(2))
    }
    return (
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
                    Nuevo producto
                </Text>
            </View>
            <View
                style={
                    {
                        elevation: 6,
                        shadowRadius: 6,
                    }
                }
                className="h-44 bg-[#F6F4FA] m-3 rounded-lg t.shadow2xl border"
            >
                <Text className="font-bold text-2xl text-center h-[19%]">
                    {name.length > 0 ? '' + name : 'Nombre'}
                </Text>
                <View className="flex-row justify-between items-top p-2 h-[50%]">
                    <View className="flex-column justify-center w-32">
                        <Text className="text-lg font-bold text-center">
                            Precio
                        </Text>
                        <Text className="text-lg text-center">
                            S/ {price==''?'0.00':parseFloat(price).toFixed(2)}
                        </Text>
                    </View>
                    <View className="flex-column justify-center w-32">
                        <Text className="font-bold text-lg text-center">
                            Total
                        </Text>
                        <Text className="text-lg text-center">
                            S/ {payment==null?'0.0':'' + payment}
                        </Text>
                    </View>
                    <Image
                        className="h-12 w-12"
                        source={require("../assets/images/TrashIcon.png")}
                    />
                </View>
                <View className="flex-row justify-center items-center h-[30%] ">
                    <Image
                        className="h-12 w-12"
                        source={require("../assets/images/MinusIcon.png")}
                    />
                    <Text className="font-bold text-4xl w-12 text-center">
                        {count.length==0?'1':'' + count}
                    </Text>
                    <Image
                        className="h-12 w-12"
                        source={require("../assets/images/PlusIcon.png")}
                    />
                </View>
            </View>
            <View className=" h-[58%] mx-5">
                <View className="mb-5">
                    <Text className="text-lg font-medium">
                        Nombre
                        <Text className="text-base font text-gray-500">
                            {name==''?' requerido':''}
                        </Text>
                    </Text>
                    <TextInput
                        className="border-b-2 text-lg px-1 "
                        value={name}
                        onChangeText={setName}
                        maxLength={15}
                        placeholder="Máximo 15 letras"
                        inputMode="text"
                    />
                </View>
                <View className="mb-5">
                    <Text className="text-lg font-medium">
                        Precio
                        <Text className="text-base font text-gray-500">
                            {parseFloat(price)==0?' requerido':''}
                        </Text>
                    </Text>
                    <TextInput
                        className="border-b-2 text-lg px-1 "
                        value={price}
                        onChangeText={handleInputPrice}
                        keyboardType="numeric"
                        placeholder="0.0"
                        inputMode="decimal"
                        onBlur={handleBlurPrice}
                        maxLength={9}
                    />
                </View>
                <View className="mb-5">
                    <Text className="text-lg font-medium">
                        Cantidad
                    </Text>
                    <TextInput
                        className="border-b-2 text-lg px-1 "
                        value={''+count}
                        onChangeText={handleInputCount}
                        keyboardType="numeric"
                        placeholder="1"
                        inputMode="numeric"
                        onBlur={handleBlurCount}
                        maxLength={2}
                    />
                </View>
            </View>
            <TouchableOpacity 
                className="bg-black h-[8%] flex-row justify-center items-center"
                onPress={()=>{
                    handleNewProduct()
                }}
            >
                <Text className="text-center text-white text-xl font-bold">
                    Crear
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default NewProduct