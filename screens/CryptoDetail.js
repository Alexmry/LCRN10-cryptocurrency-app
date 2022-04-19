import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity, 
    Image,
    ScrollView,
    Animated
} from 'react-native';

import { dummyData, COLORS, SIZES, FONTS, icons } from "../constants";
import { HeaderBar } from "../components";
import { CurrencyLabel  } from "../components";

const CryptoDetail = ({ navigation }) => {

    function renderChart() {
      return (
        <View
          style={{
            marginTop: SIZES.padding,
            marginHorizontal: SIZES.radius,
            alignItems: "center",
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
            ...styles.shadow,
          }}
        >
          {/* Header */}
          <View
            style={{
              flexDirection: "row",
              marginTop: SIZES.padding,
              marginHorizontal: SIZES.padding
            }}
          >
            <View style={{ flex: 1 }}>
              <CurrencyLabel
              />
            </View>
            <View style={{ flexDirection: "row" }}></View>
          </View>
          {/* Chart */}
          {/* Options */}
          {/* Dots */}
        </View>
      );
    }

    return (
      <SafeAreaView
        style={{
          flex: "1",
          backgroundColor: COLORS.lightGray1,
        }}
      >
          <HeaderBar
            right={true}
          />
          <ScrollView>
            <View style={{flex: 1, paddingBottom: SIZES.padding}}>
              {renderChart()}
            </View>
          </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})

export default CryptoDetail;