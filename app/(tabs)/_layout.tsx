import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon="Home" active={focused ? true : false} />
          ),
          tabBarLabel: '',
          freezeOnBlur: false,
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon="Heart" active={focused ? true : false} />
          ),
          tabBarLabel: '',
        }}
      />
      <Tabs.Screen
        name="bag"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon="Bag" active={focused ? true : false} />
          ),
          tabBarLabel: '',
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon="Notification" active={focused ? true : false} />
          ),
          tabBarLabel: '',
        }}
      />
    </Tabs>
  );
}
