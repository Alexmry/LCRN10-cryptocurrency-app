import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { COLORS, SIZES, FONTS, icons } from "../constants";

const TransactionHistory = ({ customContainerStyle, history }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: SIZES.base,
      }}
      onPress={()=> console.log(item)}
    >

    </TouchableOpacity>
  );

  return (
    <View
      style={{
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.padding,
        padding: 20,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...customContainerStyle,
      }}
    >
      <Text style={{ ...FONTS.h2 }}>Transaction History</Text>
      <FlatList
        contentContainerStyle={{ marginTop: SIZES.radius }}
        scrollEnabled={false}
        data={history}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                width: "100%",
                height: 1,
                backgroundColor: COLORS.lightGray,
              }}
            ></View>
          );
        }}
      />
    </View>
  );
};

export default TransactionHistory;
