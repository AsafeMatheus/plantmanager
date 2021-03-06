import React from 'react'
import {Text, SafeAreaView, Image, TouchableOpacity, StyleSheet} from 'react-native'

import watering from '../assets/watering.png'
import colors from '../styles/colors'

export default function Wellcome(){
    return(
        <SafeAreaView style={styles.conteiner}>
            <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil {'\n'}
            </Text>
            <Image source={watering} style={styles.image} />
            <Text style={styles.subtitle}>
                Não esqueça mais de regar as suas plantas. Nós cuidamos de lembrar você sempre que precisar
            </Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                <Text style={styles.buttonText}>
                    {'>'}
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title:{
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38
    },
    image:{
        width: 292,
        height: 284
    },
    subtitle:{
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },
    button:{
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    buttonText:{
        color: colors.white,
        fontSize: 24
    }
})