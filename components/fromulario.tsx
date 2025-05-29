import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';

const TipCalculator: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [tipPercentage, setTipPercentage] = useState<number>(15);
  const [numPeople, setNumPeople] = useState<string>('1');
  const [tipAmount, setTipAmount] = useState<number | null>(null);
  const [totalAmount, setTotalAmount] = useState<number | null>(null);

  const calculateTip = () => {
    const numAmount = parseFloat(amount);
    const people = parseInt(numPeople);
    
    if (isNaN(numAmount) || numAmount <= 0) {
      Alert.alert('Error', 'Por favor ingresa un monto válido');
      return;
    }

    if (isNaN(people) || people <= 0) {
      Alert.alert('Error', 'El número de personas debe ser mayor a 0');
      return;
    }

    const tip = (numAmount * tipPercentage) / 100;
    const total = numAmount + tip;
    
    setTipAmount(tip);
    setTotalAmount(total);
  };

  const resetCalculator = () => {
    setAmount('');
    setNumPeople('1');
    setTipAmount(null);
    setTotalAmount(null);
  };

  const people = parseInt(numPeople) || 1;
  const totalPerPerson = totalAmount ? totalAmount / people : 0;
  const tipPerPerson = tipAmount ? tipAmount / people : 0;
  const subtotalPerPerson = amount ? parseFloat(amount) / people : 0;

  return (
    <View className="flex-1 bg-rose-500 px-6 justify-center">
      <Text className="text-3xl font-bold text-center text-gray-800 mb-8">
        Calcula la Propina
      </Text>

      {/* Input del monto */}
      <View className="mb-6">
        <Text className="text-lg font-semibold text-gray-700 mb-2 self-center">
          Costo Total
        </Text>
        <TextInput
          className="rounded-lg px-4 py-3 text-lg bg-gray-50"
          placeholder="0.00"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          returnKeyType="done"
        />
      </View>

      {/* Input de porcentaje personalizado */}
      <View className="mb-6">
        <Text className="text-lg font-semibold text-gray-700 mb-2 text-center">
          Porcentaje de Propina (%)
        </Text>
        <TextInput
          className="rounded-lg px-4 py-3 text-lg bg-gray-50 text-center"
          placeholder="15"
          value={tipPercentage.toString()}
          onChangeText={(text) => {
            const num = parseFloat(text);
            if (!isNaN(num) && num >= 0 && num < 100) {
              setTipPercentage(num);
            } else if (text === '') {
              setTipPercentage(0);
            }
          }}
          keyboardType="numeric"
          returnKeyType="done"
        />
      </View>
      {/* Input número de personas */}
      <View className="mb-6">
        <Text className="text-lg font-semibold text-gray-700 mb-2 text-center">
          👥 Número de Personas
        </Text>
        <TextInput
          className="rounded-lg px-4 py-3 text-lg bg-gray-50 text-center"
          placeholder="1"
          value={numPeople}
          onChangeText={(text) => {
            // Solo permitir números enteros
            const cleanText = text.replace(/[^0-9]/g, '');
            setNumPeople(cleanText);
          }}
          keyboardType="numeric"
          returnKeyType="done"
          maxLength={2}
        />
      </View>

      {/* Botón calcular */}
      <TouchableOpacity
        className="bg-green-500 py-4 rounded-lg mb-6 shadow-lg w-1/2 self-center"
        onPress={calculateTip}
        activeOpacity={0.8}
      >
        <Text className="text-white text-xl font-bold text-center">
          Calcular
        </Text>
      </TouchableOpacity>

      

      {/* Resultados */}
      {tipAmount !== null && totalAmount !== null && (
        <ScrollView className="bg-rose-400 p-6 rounded-lg mb-6 ">
          <Text className="text-xl font-bold text-gray-800 mb-4 text-center">
            Resultados
          </Text>
          
          {/* Resumen general */}
          <View className="mb-4 pb-4 border-b border-rose-600">
            <View className="flex-row justify-between mb-2">
              <Text className="text-lg text-gray-700">Subtotal:</Text>
              <Text className="text-lg font-semibold text-gray-800">
                ${parseFloat(amount).toFixed(2)}
              </Text>
            </View>
            
            <View className="flex-row justify-between mb-2">
              <Text className="text-lg text-gray-700">
                Propina ({tipPercentage}%):
              </Text>
              <Text className="text-lg font-semibold text-blue-500">
                + ${tipAmount.toFixed(2)}
              </Text>
            </View>
            
            <View className="flex-row justify-between">
              <Text className="text-xl font-bold text-gray-800">Total General:</Text>
              <Text className="text-xl font-bold text-green-600">
                ${totalAmount.toFixed(2)}
              </Text>
            </View>
          </View>

          {/* División por persona */}
          <View className="bg-rose-300 p-4 rounded-lg mb-4">
            <Text className="text-lg font-bold text-gray-800 mb-3 text-center">
              👥 División entre {people} {people === 1 ? 'persona' : 'personas'}
            </Text>
            
            <View className="flex-row justify-between mb-2">
              <Text className="text-base text-gray-700">Subtotal por persona:</Text>
              <Text className="text-base font-semibold text-gray-800">
                ${subtotalPerPerson.toFixed(2)}
              </Text>
            </View>
            
            <View className="flex-row justify-between mb-2">
              <Text className="text-base text-gray-700">Propina por persona:</Text>
              <Text className="text-base font-semibold text-blue-500">
                + ${tipPerPerson.toFixed(2)}
              </Text>
            </View>
            
            <View className="border-t border-rose-500 pt-2">
              <View className="flex-row justify-between">
                <Text className="text-lg font-bold text-gray-800">Total por persona:</Text>
                <Text className="text-lg font-bold text-green-600">
                  ${totalPerPerson.toFixed(2)}
                </Text>
              </View>
            </View>
          </View>
          
          {/* Botón reset */}
          <TouchableOpacity
            className="bg-gray-500 py-2 rounded-lg mt-2 mb-8 w-1/2 self-center"
            onPress={resetCalculator}
            activeOpacity={0.8}
          >
            <Text className="text-white text-center font-semibold">
              🔄 Nuevo
            </Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </View>
  );
};

export default TipCalculator;