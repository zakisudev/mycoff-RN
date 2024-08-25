import React from 'react';
import { Image, View } from 'react-native';

import IconHome from '@/assets/images/Home.png';
import IconHomeInactive from '@/assets/images/HomeInactive.png';
import IconBag from '@/assets/images/Bag.png';
import IconBagInactive from '@/assets/images/BagInactive.png';
import IconHeart from '@/assets/images/Heart.png';
import IconHeartInactive from '@/assets/images/HeartInactive.png';
import IconNotification from '@/assets/images/Notification.png';
import IconNotificationInactive from '@/assets/images/NotificationInactive.png';

const icons = {
  Home: {
    active: IconHome,
    inactive: IconHomeInactive,
  },
  Heart: {
    active: IconHeart,
    inactive: IconHeartInactive,
  },
  Bag: {
    active: IconBag,
    inactive: IconBagInactive,
  },
  Notification: {
    active: IconNotification,
    inactive: IconNotificationInactive,
  },
};

export function TabBarIcon({
  icon,
  active,
}: {
  icon: keyof typeof icons;
  active: boolean;
}) {
  const imageSource = active ? icons[icon].active : icons[icon].inactive;

  return (
    <View style={{ width: 30, height: 30 }}>
      <Image
        source={imageSource}
        style={{ width: '100%', height: '100%' }}
        resizeMode="contain"
      />
    </View>
  );
}
