import { React, useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, Button } from "react-native";

const ProductCard = ({ item, isClickable }) => {
    const [productTotalPrice, ChangeProductTotalPrice] = useState((item.price * item.count).toFixed(2))
    const [itemCount, ChangeItemCount] = useState(item.count)

    const MinusButton = () => {
        const actualCount = parseInt(itemCount)
        if (actualCount >= 2) {
            const newCount = actualCount - 1
            ChangeItemCount(newCount.toString())
            const newTotalPrice = item.price * newCount
            ChangeProductTotalPrice(newTotalPrice.toFixed(2))
        }
    }
    const PlusButton = () => {
        const actualCount = parseInt(itemCount)
        if (actualCount <= 98) {
            const newCount = parseInt(itemCount) + 1
            ChangeItemCount(newCount.toString())
            const newTotalPrice = item.price * newCount
            ChangeProductTotalPrice(newTotalPrice.toFixed(2))
        }
    }
    const updateTotalPrice = (value) => {
        const count = parseInt(value)
        if (isNaN(count)) {
            // console.log("is Nan")
            ChangeItemCount(1)
            ChangeProductTotalPrice(item.price.toFixed(2))
            return
        }
        ChangeItemCount(count)
        const newTotalPrice = item.price * parseInt(value)
        ChangeProductTotalPrice(newTotalPrice.toFixed(2))
    }

    return (
        <TouchableOpacity
            style={
                {
                    elevation: 3,
                    shadowRadius: 6,
                }
            }
            className="h-44 bg-[#F6F4FA] m-3 rounded-lg t.shadow2xl border"
        >
            <View className="flex-column mx-3 h-full">
                <Text className="font-bold text-2xl text-center h-[19%]">
                    {item.name}
                </Text>
                <View className="flex-row justify-between items-top p-2 h-[50%]">
                    <View className="flex-column justify-center w-24">
                        <Text className="text-lg font-bold text-center">
                            Precio
                        </Text>
                        <Text className="text-lg text-center">
                            S/ {item.price.toFixed(2)}
                        </Text>
                    </View>
                    <View className="flex-column justify-center w-24">
                        <Text className="font-bold text-lg text-center">
                            Total
                        </Text>
                        <Text className="text-lg text-center">
                            S/ {productTotalPrice.toString()}
                        </Text>
                    </View>
                    <TouchableOpacity
                        className="h-12 w-12 "
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
                    <TextInput
                        className="font-bold text-4xl w-12 text-center"
                        value={'' + itemCount}
                        // onChangeText={updateTotalPrice}
                        onChange={updateTotalPrice}
                        maxLength={2}
                        keyboardType="numeric"
                        inputMode="numeric"
                    />
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
        </TouchableOpacity>
    )


}
export default ProductCard