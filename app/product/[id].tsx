import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import { useGlobalContext } from '@/context/GlobalContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  GestureHandlerRootView,
  NativeViewGestureHandler,
} from 'react-native-gesture-handler';
import { router } from 'expo-router';
import { imageMapper } from '@/components/CoffeeCard';
import CoffeeSizes from '@/components/CoffeeSizes';

const ProductWithId = () => {
  const { product } = useGlobalContext();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NativeViewGestureHandler>
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 30 }}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
              }}
            >
              <View
                style={{
                  height: 25,
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 10,
                }}
              >
                <TouchableOpacity onPress={() => router.back()}>
                  <Image
                    source={require('@/assets/images/Back.png')}
                    style={{ width: 20, height: 20 }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    fontFamily: 'SpaceMono',
                    maxWidth: '80%',
                    textAlign: 'center',
                    overflow: 'scroll',
                  }}
                >
                  {product?.title} {product?.subtitle}
                </Text>
                <TouchableOpacity>
                  <Image
                    source={require('@/assets/images/Favorite.png')}
                    style={{ width: 22, height: 22 }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>

              {/* Main content */}
              <View style={{ flex: 2, gap: 5 }}>
                <View
                  style={{
                    marginTop: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: 300,
                  }}
                >
                  {product?.image && (
                    <Image
                      source={
                        imageMapper[product?.image as string] ||
                        require('@/assets/images/default.png')
                      }
                      style={{ width: '100%', height: '100%' }}
                      resizeMode="contain"
                    />
                  )}
                </View>
                {/* Title */}
                <View
                  style={{
                    flexDirection: 'column',
                    width: '100%',
                    gap: 2,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 32,
                      fontWeight: 700,
                      fontFamily: 'SpaceMono',
                    }}
                  >
                    {product?.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#8a8a8a',
                      fontWeight: '400',
                      fontFamily: 'SpaceMono',
                    }}
                  >
                    {product?.subtitle}
                  </Text>

                  {/* Rating */}
                  <View
                    style={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      flexDirection: 'row',
                    }}
                  >
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 5,
                      }}
                    >
                      <Image
                        source={require('../../assets/images/Star.png')}
                        style={{ width: 22, height: 22 }}
                        resizeMode="contain"
                      />
                      <Text
                        style={{
                          fontSize: 24,
                          fontWeight: '600',
                          fontFamily: 'SpaceMono',
                        }}
                      >
                        {product?.rating}{' '}
                        <Text style={{ color: '#8a8a8a', fontSize: 18 }}>
                          (230)
                        </Text>
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 20,
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          width: 50,
                          height: 50,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 16,
                          backgroundColor: '#FFF0F0',
                          borderColor: '#ffd7d7',
                          borderWidth: 1,
                          padding: 5,
                        }}
                      >
                        <Image
                          source={require('@/assets/images/CoffeeKind.png')}
                          style={{ width: '100%', height: '100%' }}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          width: 50,
                          height: 50,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 16,
                          backgroundColor: '#FFF0F0',
                          borderColor: '#ffd7d7',
                          borderWidth: 1,
                          padding: 5,
                        }}
                      >
                        <Image
                          source={require('@/assets/images/Milk.png')}
                          style={{ width: '100%', height: '100%' }}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    height: 1,
                    backgroundColor: '#dddddd',
                    marginVertical: 10,
                  }}
                />
                {/* Description */}
                <View
                  style={{
                    flexDirection: 'column',
                    width: '100%',
                    gap: 4,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: 600,
                      fontFamily: 'SpaceMono',
                    }}
                  >
                    Description
                  </Text>
                  <Text
                    style={{
                      fontWeight: 400,
                      fontSize: 16,
                      fontFamily: 'SpaceMono',
                      color: '#8a8a8a',
                      lineHeight: 24,
                    }}
                  >
                    A cappuccino is an approximately 150 ml (5 oz) beverage,
                    with 25 ml of espresso coffee and 85ml of fresh milk the
                    fo..
                    {/* {product?.description} */}
                  </Text>
                </View>

                {/* Sizes */}
                <View
                  style={{
                    flexDirection: 'column',
                    width: '100%',
                    gap: 4,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: 600,
                      fontFamily: 'SpaceMono',
                    }}
                  >
                    Size
                  </Text>
                  <View style={{ width: '100%' }}>
                    <CoffeeSizes />
                  </View>
                </View>
                <View
                  style={{
                    height: 1,
                    backgroundColor: '#dddddd',
                    marginVertical: 10,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <View style={{ flexDirection: 'column' }}>
                    <Text
                      style={{
                        fontWeight: 500,
                        fontSize: 20,
                        fontFamily: 'SpaceMono',
                        color: '#8a8a8a',
                      }}
                    >
                      Price
                    </Text>
                    <Text
                      style={{
                        fontSize: 28,
                        fontWeight: 700,
                        color: '#C67C4E',
                        fontFamily: 'SpaceMono',
                      }}
                    >
                      $ {product?.price}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      width: '60%',
                      height: 60,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 16,
                      backgroundColor: '#C67C4E',
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 24,
                        fontWeight: '600',
                        color: '#fff',
                      }}
                    >
                      Buy Now
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </NativeViewGestureHandler>
    </GestureHandlerRootView>
  );
};

export default ProductWithId;
