import { React, useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, Alert } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
const NewProduct = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [count, setCount] = useState(1)
    const [payment, setPayment] = useState(null)

    const calculateTotalPayment = (actualPrice,actualCount) => {
        console.log('price',price)
        console.log('count',count)
        console.log('totalPayment',totalPayment)
        const totalPayment=parseFloat(actualPrice)*actualCount
        return totalPayment.toFixed(2)
    }

    const handleInputPrice = (value) => {
        const regex=/^(?:\d{1,3}(?:\.\d{0,2})?)?$/
        if (!regex.test(value)){
            return 
        }
        if(value.slice(-1)=='.'){
            setPrice(value)
            return
        }
        const actualPrice=value.length==0?0:value
        setPrice(''+parseFloat(actualPrice))
        const totalPayment = calculateTotalPayment(actualPrice,count)
        setPayment(totalPayment)
    }
    const handleInputCount = (value) => {
        const regex=/^[0-9]*$/
        if(!regex.test(value)){
            return
        }
        setCount(value)
        const actualCount=value.length==0?0:value
        const totalPayment = calculateTotalPayment(price,actualCount)
        setPayment(totalPayment)
    }
    const handleBlurCount = () => {
        if(count==''){
            setCount(1)
        }
    }
    const handleBlurPrice = () => {
        if(price==''){
            setPrice('0.0')
        }
    }
    return (
        <SafeAreaView>
            <View className="h-9 flex-row justify-start items-center  mx-3">
                <TouchableOpacity>
                    <Image
                        className="h-12 w-12"
                        source={require("../assets/images/backIcon.png")}
                    />
                </TouchableOpacity>
                
            </View>
            <View className="h-9 flex justify-center items-center mx-3">
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
                        {'' + count}
                    </Text>
                    <Image
                        className="h-12 w-12"
                        source={require("../assets/images/PlusIcon.png")}
                    />
                </View>
            </View>
            <View className=" h-[56%] mx-5">
                <Text className="text-lg font-bold">
                    Nombre
                </Text>
                <TextInput
                    className="border-b-2 text-lg px-1 "
                    value={name}
                    onChangeText={setName}
                    maxLength={15}
                    placeholder="Máximo 15 letras"
                    inputMode="text"
                />
                <Text className="text-lg font-bold">
                    Precio
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
                <Text className="text-lg font-bold">
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
            <TouchableOpacity 
                className="bg-black h-[8%] flex-row justify-center items-center"
                // onPress={}
            >
                <Text className="text-center text-white text-xl font-bold">
                    Crear
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default NewProduct