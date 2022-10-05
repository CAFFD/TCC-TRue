import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput, Button, CheckBox } from "react-native";



const UselessTextInput  = () => {
  const [text, onChangeText, text2, onChangeText2, text3, onChangeText3, text4, onChangeText4, text5, onChangeText5, text6, onChangeText6, text7, onChangeText7, text8, onChangeText8, text9, onChangeText9, text10, onChangeText10 ] = React.useState("");
  const [number, onChangeNumber, ] = React.useState(null);
  const [isSelected, setSelection,] = useState(false);
  


  return (


<View>
    <SafeAreaView>
      <Text style= {styles.paragraph}> 
Em que ano vc nasceu?
      </Text> 

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        
        



      />
      
      <Text style= {styles.paragraph}> 
Quando foi sua última menstruação?
      </Text>

      <TextInput
        style={styles.input}
        onChangeText2={onChangeText2}
        value={text2}
    />


    
    
 <Text style= {styles.paragraph}> 
Seu ciclo menstrual é regular? (geralmente não varia mais do que 7 dias)
      </Text>

      <TextInput
        style={styles.input}
        onChangeText3={onChangeText3}
        value={text3}
      />

      <Text style= {styles.paragraph}> 
    Quanto tempo dura seu ciclo, em média?
(os ciclos geralmente duram de 24 a 38 dias)
      </Text>
      

      <TextInput
        style={styles.input}
        onChangeText4={onChangeText4}
        value={text4}
      />

<Text style= {styles.paragraph}> 
Você sente algum tipo de desconforto no ciclo menstrual? Se sim, quais?
      </Text>

      <TextInput
        style={styles.input}
        onChangeText5={onChangeText5}
        value={text5}
      />


    <Text style= {styles.paragraph}> 
Você gostaria de melhorar algo no seu sono?
      </Text>

      <TextInput
        style={styles.input}
        onChangeText6={onChangeText6}
        value={text6}
      />

     <Text style= {styles.paragraph}> 

Você gostaria de melhorar algo seu bem-estar mental?
     
      </Text>

      <TextInput
        style={styles.input}
        onChangeText7={onChangeText7}
        value={text7}
      />

     
     <Text style= {styles.paragraph}> 

Você toma algum suplemento ou medicamento? (Se sim, pode ocorrer algumas variações)
     
      </Text>

      <TextInput
        style={styles.input}
        onChangeTex8t={onChangeText8}
        value={text8}
    />
     
     
     <Text style= {styles.paragraph}> 
Você usa contraceptivos?


     
      </Text>

      <TextInput
        style={styles.input}
        onChangeText9={onChangeText9}
        value={text9}
    />
     

     
     
      <Text style= {styles.paragraph}> 
O que você gostaria de visualizar no aplicativo?

      </Text>

      <TextInput
        style={styles.input}
        onChangeText10={onChangeText10}
        value={text10}
    />
     
     
     

     
     <Button style={styles.botao}
        title="Próximo"
        onPress={() => Alert.alert('Proximo')}
      />
    




    </SafeAreaView>

    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 8,
  },
    paragraph:{
      fontWeight: 'bold',
      textAlign: 'ceter',
      margin: 8,
      
    },
botao:  {
  borderRadius: 8,
  color: 'white',
},




});

export default UselessTextInput;

