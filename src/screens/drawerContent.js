import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import {
    DrawerContentScrollView, 
    DrawerItem 
} from '@react-navigation/drawer';
import {
    Avatar, Caption, Paragraph, Text,
    Drawer, TouchableRipple, Switch, Title
} from 'react-native-paper';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/screens/drawerContent';
import { ContextConsumer } from '../../context';


function DrawerContent({ navigation }) {

  const context = useContext(ContextConsumer);
  const {authContext} = context;

  const [isDark, setIsDark] = useState(false);
  const toggleMenu = () => setIsDark(() => !isDark);

  return (
      <View style={{flex:1}}>
          <DrawerContentScrollView>
              <View style={styles.drawerContent}>

                  <View style={styles.userInfoSection}>
                      <View style={{flexDirection:"row",marginTop:15}}>
                          <Avatar.Image
                            source={require("../images/iRon-Man.jpg")}
                            size={50}
                          />
                          <View style={{marginLeft:12}}>
                              <Title style={styles.title}>sido zoldik Xhunter</Title>
                              <Caption style={styles.caption}>kilwaZoldik76@gmail.com</Caption>
                          </View>
                      </View>
                      <View style={styles.row}>
                          <View style={styles.section}>
                              <Caption style={styles.caption}>Status: </Caption>
                              <Paragraph style={styles.paragraph}>Assistant</Paragraph>
                          </View>
                          <View style={styles.section}>
                              <Caption style={styles.caption}>Follower: </Caption>
                              <Paragraph style={styles.paragraph}>146</Paragraph>
                          </View>
                      </View>
                  </View>

                  <Drawer.Section style={styles.drawerSection}>
                      <DrawerItem
                        icon={({color, size}) => (
                          <Icons 
                            name="home-outline" 
                            color={color}
                            size={size}
                          />
                        )}
                        label="Home"
                        onPress={() => navigation.navigate('Home')}
                      >
                      </DrawerItem>
                      <DrawerItem
                        icon={({color, size}) => (
                          <Icons 
                            name="account-badge" 
                            color={color}
                            size={size}
                          />
                        )}
                        label="categories"
                        onPress={() => navigation.navigate('categories')}
                      >
                      </DrawerItem>
                      <DrawerItem
                        icon={({color, size}) => (
                          <Icons 
                            name="bookmark-outline" 
                            color={color}
                            size={size}
                          />
                        )}
                        label="Bookmark"
                        onPress={() => navigation.navigate('bookmark')}
                      >
                      </DrawerItem>
                      <DrawerItem
                        icon={({color, size}) => (
                          <Icons 
                            name="format-textbox" 
                            color={color}
                            size={size}
                          />
                        )}
                        label="forms"
                        onPress={() => navigation.navigate('forms')}
                      >
                      </DrawerItem>
                      <DrawerItem
                        icon={({color, size}) => (
                          <Icons 
                            name="account-check-outline" 
                            color={color}
                            size={size}
                          />
                        )}
                        label="Support"
                        onPress={() => navigation.navigate('support')}
                      >
                      </DrawerItem>
                  </Drawer.Section>

                  <Drawer.Section title="Preference">
                      <TouchableRipple onPress={() => toggleMenu()}>
                          <View style={styles.preference}>
                              <Text>Dark Theme</Text>
                              <View pointerEvents="none">
                                  <Switch value={isDark} color="#111" />
                              </View>
                          </View>
                      </TouchableRipple>
                  </Drawer.Section>

              </View>
          </DrawerContentScrollView>
          <Drawer.Section style={styles.bottomDrawerSection}>
              <DrawerItem
                icon={({color, size}) => (
                    <Icons 
                      name="exit-to-app" 
                      color={color}
                      size={size}
                  />
                )}
                label="sign-out"
                onPress={() => authContext.logOut()}
              >
              </DrawerItem>
          </Drawer.Section>
      </View>
  );
};

export default DrawerContent;
