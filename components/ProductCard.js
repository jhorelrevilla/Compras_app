import { React, useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, Button } from "react-native";

const ProductCard = ({ item, onDelete, onUpdatePayment}) => {
    const [productTotalPrice, ChangeProductTotalPrice] = useState(parseFloat(item.payment))
    const [itemCount, ChangeItemCount] = useState(parseInt(item.count))


    const handleDelete = () => {
        onDelete(item.id)
    }
    const MinusButton = () => {
        if (itemCount >= 2) {
            const newCount = itemCount - 1
            ChangeItemCount(newCount)
            const newTotalPrice = item.payment - parseFloat(item.price)
            item.payment=newTotalPrice
            ChangeProductTotalPrice(newTotalPrice)
            onUpdatePayment()
        }
    }
    const PlusButton = () => {
        if (itemCount <= 98) {
            const newCount = itemCount + 1
            ChangeItemCount(newCount)
            // const newTotalPrice = item.price * newCount
            const newTotalPrice = parseFloat(item.payment) + parseFloat(item.price)
            item.payment=newTotalPrice
            ChangeProductTotalPrice(newTotalPrice)
            // onUpdateSum(item.price)
            onUpdatePayment()
        }
    }
    const updateTotalPrice = (value) => {
        const count = parseInt(value)
        if (isNaN(count)) {
            ChangeItemCount(1)
            ChangeProductTotalPrice(item.price)
            return
        }
        ChangeItemCount(count)
        const newTotalPrice = item.price * parseInt(value)
        ChangeProductTotalPrice(newTotalPrice.toFixed(2))
    }

    return (
        <View
            style={
                {
                    elevation: 6,
                    shadowRadius: 6,
                }
            }
            className="h-44 bg-white m-3 rounded-lg t.shadow2xl border"
        >
            <View className="flex-column mx-3 h-full">
                <Text className="font-bold text-2xl text-center h-[19%]">
                    {''+item.name}
                </Text>
                <View className="flex-row justify-between items-top p-2 h-[50%]">
                    <View className="flex-column justify-center w-24">
                        <Text className="text-lg font-bold text-center">
                            Precio
                        </Text>
                        <Text className="text-lg text-center">
                            S/ {''+parseFloat(item.price).toFixed(2)}
                        </Text>
                    </View>
                    <View className="flex-column justify-center w-24">
                        <Text className="font-bold text-lg text-center">
                            Total
                        </Text>
                        <Text className="text-lg text-center">
                            S/ {parseFloat(productTotalPrice).toFixed(2)}
                        </Text>
                    </View>
                    <TouchableOpacity
                        className="h-12 w-12 "
                        onPress={handleDelete}
                    >
                        <Image
                            className="h-12 w-12"
                            source={require("../assets/images/TrashIcon.png")}
                        />
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-center items-center h-[30%] ">
                    <TouchableOpacity
                        className="h-12 w-12 rounded-full mx-1"
                        onPress={MinusButton}
                    >
                        <Image
                            className="h-12 w-12"
                            source={require("../assets/images/MinusIcon.png")}
                        />
                    </TouchableOpacity>
                    {/* <TextInput
                        className="font-bold text-4xl w-12 text-center"
                        value={'' + itemCount}
                        // onChangeText={updateTotalPrice}
                        onChange={updateTotalPrice}
                        maxLength={2}
                        keyboardType="numeric"
                        inputMode="numeric"
                    /> */}
                    <Text
                        className="font-bold text-4xl w-12 text-center"
                    >
                        {''+itemCount}
                    </Text>
                    <TouchableOpacity
                        className="h-12 w-12 rounded-full mx-1"
                        onPress={PlusButton}
                    >
                        <Image
                            className="h-12 w-12"
                            source={require("../assets/images/PlusIcon.png")}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )


}
export default ProductCard