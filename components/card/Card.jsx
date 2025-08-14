import { StyleSheet, Text, View } from "react-native"

export const Card = ({cep, logradouro, bairro, ufzin, estado, regiao}) => {
    return(
        <View style={styles.cardzin}>
            <View>
                <Text style={styles.tituloValor}>CEP:</Text>
                <Text style={styles.valor}>{cep}</Text>
            </View>

            <View>
                <Text style={styles.tituloValor}>Logradouro:</Text>
                <Text style={styles.valor}>{logradouro}</Text>
            </View>

            <View>
                <Text style={styles.tituloValor}>Bairro:</Text>
                <Text style={styles.valor}>{bairro}</Text>
            </View>

            <View>
                <Text style={styles.tituloValor}>UF:</Text>
                <Text style={styles.valor}>{ufzin}</Text>
            </View>

            <View>
                <Text style={styles.tituloValor}>Estado</Text>
                <Text style={styles.valor}>{estado}</Text>
            </View>

            <View>
                <Text style={styles.tituloValor}>Região:</Text>
                <Text style={styles.valor}>{regiao}</Text>
            </View>


            {/* A partir dessa linha aqui serão os testes de scroll para tablet, então terá diversas Views e Texts*/}

            {/* <View>
                <Text>Test:</Text>
                <Text>Dado de teste</Text>
            </View>
            <View>
                <Text>Test:</Text>
                <Text>Dado de teste</Text>
            </View>
            <View>
                <Text>Test:</Text>
                <Text>Dado de teste</Text>
            </View>
            <View>
                <Text>Test:</Text>
                <Text>Dado de teste</Text>
            </View> */}
            
        </View>
    )
}

const styles = StyleSheet.create({
    cardzin:{
        width: '70%',
        minHeight: '60%',
        padding: 20,
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        borderRadius: 7,
        gap: 20
    },
    tituloValor:{
        fontWeight: 600
    }
})