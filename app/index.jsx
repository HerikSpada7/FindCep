import axios from "axios";
import { useState } from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { Botao } from "../components/botao/Botao.jsx";
import { Card } from "../components/card/Card.jsx";
import { Input } from "../components/input/Input.jsx";

export default function Index() {
  const [cep, setCep] = useState("");
  const [jsonCep, setJsonCep] = useState({});
  const [amostradinho, setAmostradinho] = useState (false)

  async function consultarCep(e) {
    e.preventDefault();
    try {

      if (cep !== "" && cep.length === 8) {

        const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        setJsonCep(resposta.data);
        setAmostradinho(true)
      } else {
        alert("O cep está incorreto. Digite com 8 números.")
      }

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
    {/* 1. Logo + Img de fundo */}
    <ImageBackground source={require('../assets/images/imgFundoLogoFindCEP.png')} style={styles.imgFundo}>
      <Image source={require('../assets/images/LogoFindCEP.png')} style={styles.logo}></Image>
    </ImageBackground>

    {/* 2. Campo de consulta */}
    <ScrollView style={styles.containerScroll}>
      <View style={styles.container}>

      {/* 2.1. Título */}
      <Text style={styles.titulo}>Consulte seu CEP</Text>

      {/* 2.2. Input */}
          {/* Input. */}
          <Input
            valorCep={cep}
            onChangeValorCep={e => setCep(e)}></Input>

          {/* Botão. */}

          <Botao tituloBotao='Consultar' onPress={consultarCep} />

          {/* Card de Informações. */}
          {amostradinho &&
            <Card
              cep={jsonCep.cep}
              logradouro={jsonCep.logradouro}
              bairro={jsonCep.bairro}
              estado={jsonCep.estado}
              ufzin={jsonCep.uf}
              regiao={jsonCep.regiao}
           />
          
          };

          
        </View>
      </ScrollView>
    </>

  );
}

const styles = StyleSheet.create({
  imgFundo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height:'100%'
  },
  logo: {
    width: 100,
    height: 120
  },
  container:{
    gap: 40,
    width: '100%',
    minHeight: '100%',
    alignItems: 'center',
    paddingBottom: 80,
  },
  containerScroll:{
    flex: 1.5,
    paddingTop: 50,
    height: '100%',
    paddingBottom: 30
  },
  titulo: {
    fontSize: 25,
    fontFamily: "Poppins-Bold",
    color: "#000000"
  }
})
