import { View, Text, Modal, TouchableWithoutFeedback, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'
import { styles } from '../styles'

const CountryModal = ({
    showCountryModal,
    setShowCountryModal,
    countries,
    setSelectedCountry
}) => {
    return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={showCountryModal}
        >
          <TouchableWithoutFeedback
            onPress={() => setShowCountryModal(false)}
          >
            <View
              style={styles.modalContainer}
            >
              <View
                style={styles.modalWrapper}
              >
                <FlatList
                  data={countries}
                  keyExtractor={(item) => item.code}
                  contentContainerStyle={{
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.padding,
                  }}
                  renderItem={({ item }) => {
                    return (
                      <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: SIZES.radius
                        }}
                        onPress={() => {
                          console.log(item)
                          setSelectedCountry(item)
                          setShowCountryModal(false)
                        }}
                      >
                        <Image
                          source={{ uri: item.flag }}
                          resizeMode="contain"
                          style={{
                            width: 40,
                            height: 30
                          }}
                        />
                        <Text style={{ flex: 1, marginLeft: SIZES.radius, ...FONTS.body3 }}>{item.name}</Text>
                      </TouchableOpacity>
                    )
                  }}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )
}

export default CountryModal