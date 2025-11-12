import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{fontSize: 25}}>Esta aplicación es un traductor, cada palabra se traduce como una rebanada de pizza</Text>
      <TextInput
        placeholder="escribe para transcribir!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        style={{
          height: 80,
          padding: 10,
          marginHorizontal: 8,
          borderWidth: 1,
          fontSize: 20,
        }}
      />
      <Text style={{padding: 50, fontSize: 40}}>
        {text
          .split(' ')
          .map(word => word && '🌷')
          .join(' ')}
      </Text>
    </View>
  );
};

export default PizzaTranslator;